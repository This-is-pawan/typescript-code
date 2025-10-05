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
// #################### second way is
import express, { Application, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "./model/model";
import connectDb from "./db/mongDB";
import cookieParser from "cookie-parser";

const app: Application = express();
const PORT = 3000;
const JWT_SECRET = "secret_jwt_dev";

connectDb();
app.use(express.json());
app.use(cookieParser());

// ================== REGISTER ==================
app.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, mobile, country } = req.body;
    if (!name || !email || !mobile || !country) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ success: false, message: `User email already exists: ${email}` });
    }

    const hash = await bcrypt.hash(mobile, 10);
    const user = await User.create({ name, email, mobile: hash, country });

    return res.status(201).json({ success: true, message: "Register successful", user });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error });
  }
});

// ================== LOGIN ==================
app.post("/login", async (req: Request, res: Response) => {
  try {
    const { name, email, mobile } = req.body;
    if (!name || !email || !mobile) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(mobile, user.mobile);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid mobile number" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

    // send token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // in production → true with HTTPS
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error });
  }
});

// ================== LOGOUT ==================
app.post("/logout", (req: Request, res: Response) => {
  res.clearCookie("token"); // remove token from cookies
  return res.status(200).json({ success: true, message: "Logout successful" });
});

// ================== SERVER ==================
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
// /#############
import * as bcrypt  from 'bcryptjs';
import express, { NextFunction, Request, Response } from "express";
import cookieParser from 'cookie-parser'

import connect from "./db/mongoDb"
import jwt from 'jsonwebtoken'
const secrettoken='secret_jwt_token'
connect();

import UserModel from "./Auth";
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cookieParser());
app.get("/", (req: Request, res: Response) => {
  res.send("Home Page");
});


const  Auth=(req: Request, res: Response, next:NextFunction)=>{
const  token = req.cookies.token;
  if(!token) res.json('not authenticated')
try {
  const decoded=jwt.verify(token,secrettoken)
  res.send(`hello ${JSON.stringify(decoded)}`)
} catch (error) {
  
}
}
app.post("/register", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.json("somethign is missing");
  }

  try {
    const exist = await UserModel.findOne({ email });
    if (exist) res.json("user is already exist");
  const hash=await bcrypt.hash(password,10)

    const user=await UserModel.create({name,email,password:hash});
    res.json({ success: true, message: "register succesfully" ,user});
  } catch (error) { 
    res.json({ success: false, message: error });
  }
});
app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Step 1: Validate input
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Something is missing" });
  }

  try {
    // Step 2: Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not registered" });
    }

    // Step 3: Compare password
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }
 const token:string=jwt.sign({id:user._id},secrettoken,{expiresIn:'1d'})
 res.cookie('token',token,{
  httpOnly:true,
  secure:false,
  maxAge:36000
 })
    res.json({ success: true, message: "Login successful", user: user.email,token });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

app.get('/profile',Auth,async(req: Request, res: Response)=>{
res.json('my profile')

})
app.use((req: Request, res: Response) => {
  res.send("page not found");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// #######################################################################
