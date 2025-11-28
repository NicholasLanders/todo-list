const todoItem = document.querySelector(".todo-item");
const todoButton = document.querySelector("#todo-button");
const todoItemEntry = document.querySelector("#todo-entry");
const listItem = document.querySelector(".list-item");
const listButton = document.querySelector("#list-button");
const listItemEntry = document.querySelector("#list-entry");

let todoClones: HTMLElement[] = [];
todoButton?.addEventListener("click", () => {
    const newTodoItem = todoItem?.cloneNode(true) as HTMLElement;
    newTodoItem.querySelector<HTMLInputElement>(".todo-text")!.value = "";
    todoItemEntry?.after(newTodoItem);
});

let listClones: HTMLElement[] = [];
listButton?.addEventListener("click", () => {
    const newListItem = listItem?.cloneNode(true) as HTMLElement;
    newListItem.querySelector<HTMLInputElement>(".list-text")!.value = "";
    listItemEntry?.after(newListItem);
});
