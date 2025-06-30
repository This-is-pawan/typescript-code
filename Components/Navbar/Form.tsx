 'use client'
 import {useFormState,useFormStatus} from 'react-dom'

import CreateUser from "../../utils/actions"

const SubmitButton=()=>{
  const {pending}=useFormStatus()
  return <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize cursor-pointer' disabled={pending}>{pending?'loading...':"submit"}</button>
}
const 
Form = () => {
  const [message,formAction]=useFormState(CreateUser,null)
  return (
   <div className='w-full '>
    {message && <p className='text-justify p-2 text-pink-700 capitalize'>{message}</p>}
    <form className='flex flex-col justify-center max-w-lg  shadow rounded p-8 text-center'action={formAction}> 
     <h1 className='text-2xl capitalize mb-4'>create user</h1>
     <input type="text" name='firstName' defaultValue='peter' className='m-4 bg-pink-50 p-4 rounded-full' required/>
     <input type="text" name='lastName' defaultValue='smith' className='m-4 p-4 rounded-full bg-pink-50' required/>
     <SubmitButton/>
    </form>
   </div>
  )
}

export default Form
