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
