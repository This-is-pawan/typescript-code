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
