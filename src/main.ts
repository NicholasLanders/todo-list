const todoInput = document.querySelector(".todo-text") as HTMLInputElement;
const todoItem = document.querySelector(".todo-item") as HTMLElement;
const clone = todoItem.cloneNode(true) as HTMLElement;
const main = document.querySelector("main");

todoInput?.addEventListener("input", () => {
    if (todoInput.value !== "Task") {
        main?.appendChild(clone);
    }
});
