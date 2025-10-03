import express, { Application, Request, Response, NextFunction } from "express";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDb from "./db/mongDB";
import User from "./model/model";

const JWT_SECRET = "your_jwt_secret_key"; 
const app: Application = express();

connectDb();
app.use(express.json());

/**
 * Middleware to verify JWT
 */
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
    (req as any).user = decoded; // attach user payload to req
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  } 
};

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript + Express + JWT!");
});

/**
 * Register Route
 */
app.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, mobile, country } = req.body;

    // hash mobile as "password" (just for demo)
    const hashedMobile = await bcrypt.hash(mobile, 10);

    const user = await User.create({
      name,
      email,
      mobile: hashedMobile,
      country,
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ error });
  }
});

/**
 * Login Route (generate JWT)
 */
app.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, mobile } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(mobile, user.mobile);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error });
  }
});

/**
 * Protected Route
 */
app.get("/profile", authMiddleware, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const user = await User.findById(userId).select("-mobile"); // hide hashed mobile
    res.json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

export default app;
