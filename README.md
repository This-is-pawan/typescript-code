typescript is important role in the nextjs
```ts
// const btn = document.querySelector<HTMLButtonElement>(".btn");
// btn?.addEventListener("click", () => {
//   if (btn) {
//     btn.disabled = true;
//   }
// });

const formInput = document.querySelector<HTMLInputElement>(".form-input");
// const taskListElement = document.querySelector<HTMLUListElement>(".list");
// const taskForm = document.querySelector<HTMLFormElement>(".task-form");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = [];

formInput?.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskDescription = formInput?.value.trim();
  if (taskDescription) {
    console.log(taskDescription);

    return;
  }

  alert("please enter a task decription");
});

```
### tourschema use of zod libaray
```ts
const url='https://course-api.com/react-tours-project'
export const tourSchema=z.object({
 id:z.string(),
 name:z.string(),
 image:z.string(),
info:z.string(),
prince:z.string(),
})
export type Tour=z.infer<typeof tourSchema>;

export const fetchTours=async ():Promise<Tour[]> => {
 const response=await axios.get<Tour[]>(url);
 const result=tourSchema.arry().safeParse(response.data);
 if (!result.success) {
  throw new Error("parsing failed");
  
 }
 return result.data;
}
```
```ts
import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

 type CounterState='active'|'inactive'|'pending..'
 
const initalState:CounterState={
 count:0,
 status:'pending....'
}
export const counterSlice=createSlice({
 name:'counter',
 initialState,
 reducers:{
  increment:(state)=>{
   state.count+=1;
  },
  decrement:(state)=>{
   state.count-=1;
  },
  reset:(state)=>{
   state.count=0;
  },
  setStatus:(state,action:payloadAction<CounterState>)=>{
   state.status=action.payload;
  }

 }
})
export default  counterSlice.reducer;


```
```ts
import {configureStore} from '@reduxjs/toolkit'
const counterReducer from '/.couterSlice'
export const store=configureStore({
 reducer:{
  counter:counterReducer,
 }
})
export type RootState=ReturnType<typeof store.getstate>;
export type AppDispatch=typeof store.dispatch;

#############
import {useDispatch,useSelector} from 'react-redux'
import type {TypedUseSelectorHook} from 'react-redux'
import type {RootState} from './store'
export const useAppDispatch:()=>AppDispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;


```
```ts
// main.tsx
import {store} from './store.ts'
import {Provider} from 'react-redux'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
ReactDOM.createRoot(document.getElementById('root')!).render(
 <Provider store={store}>
 <App/>
 </Provider>

)
import {useAppSelectore,useAppDispatch} from '../../hooks'
import {decrement,increment ,reset,setStatus} from './counterSlice'

const Component=()=>{
 const {count,status}=useAppSelectore((state)=>state)
 return
 <>
 </>
}
```
```ts
"use client";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";

const localImg = "/images/pexels-map.jpg";
const Img = "https://images.pexels.com/photos/2859369/pexels-photo-2859369.jpeg";// if you change the value than chnage the img
const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  return (
    <div>
      <h1 className="text-4xl">ID: {id}</h1>

      <section className="flex gap-x-4 mt-4">
        <div>
          <Image
            src={localImg}
            alt="Local Map"
            width={400}
            height={200}
            priority
            className="w-auto h-auto object-v"
          />
          <h2>Local Image</h2>

          <div className="mt-4">
            <Image
              src={Img}
              alt="External Tour"
              width={400}
              height={200}
              className="object-cover w-auto h-auto"
            />

            <h2>External Image</h2>
          </div>
        </div>
      </section>

      <button className="bg-pink-400 p-2 rounded mt-4">
        <Link href="/tours">Back to Tour</Link>
      </button>
    </div>
  );
};

export default Page;

```
