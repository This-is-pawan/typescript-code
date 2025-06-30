'use server'
import { readFile,writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { resolve } from "path";

type User={
id:string,
firstName:string,
lastName:string,
}



const CreateUser = async (prevState:any,formData: FormData) => {
  await new Promise((resolve)=>setTimeout(resolve,2000));
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const newUser:User={firstName,lastName,id:Date.now().toString()}
try {
  
  await saveUser(newUser)
  revalidatePath(
  '/actions'  )
  
  return '💥 User created successfully!';

} catch (error) {
  return 'failed to create user'
}
// redirect('/')

  // You can continue your logic here, e.g., saving to a database
};

export default CreateUser;


export const fetchUsers = async (): Promise<User[]> => {
  try {
    const result = await readFile('users.json', { encoding: 'utf-8' });
    return result ? JSON.parse(result) : [];
    
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      return []; // File doesn't exist yet
    }
    throw err;
  }
};

export const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile('users.json', JSON.stringify(users, null, 2));
};
export const deleteUser=async(formData:FormData)=>{
const id=formData.get('id') as string;
const users=await fetchUsers()
const updatedUsers=users.filter((user)=>user.id!==id)
await writeFile('users.json',JSON.stringify(updatedUsers))
revalidatePath('/actions')
}
export const removeUser=async(id:string,formData:FormData)=>{
const name=formData.get('name') as string;

const users=await fetchUsers()
const updatedUsers=users.filter((user)=>user.id!==id)
await writeFile('users.json',JSON.stringify(updatedUsers))
revalidatePath('/actions')
}