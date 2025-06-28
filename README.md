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
```
