const todoItem = document.querySelector(".todo-item");
const todoButton = document.querySelector("#todo-button");
const todoItemEntry = document.querySelector("#todo-entry");
const listItem = document.querySelector(".list-item");
const listButton = document.querySelector("#list-button");
const listItemEntry = document.querySelector("#list-entry");

const initialDeleteBtn = todoItem?.querySelector(".delete-btn");
initialDeleteBtn?.addEventListener("click", () => {
    initialDeleteBtn.parentElement?.parentElement?.remove();
});

let todoClones: HTMLElement[] = [];
todoButton?.addEventListener("click", () => {
    const newTodoItem = todoItem?.cloneNode(true) as HTMLElement;
    newTodoItem.querySelector<HTMLInputElement>(".todo-text")!.value = "";
    todoClones.push(newTodoItem);
    todoItemEntry?.after(newTodoItem);

    const dltBtn = newTodoItem.querySelector(".delete-btn");
    dltBtn?.addEventListener("click", () => {
        dltBtn.parentElement?.parentElement?.remove();

        const btnIndex = todoClones.indexOf(newTodoItem);
        if (btnIndex !== -1) todoClones.splice(btnIndex, 1);
    });
});

let listClones: HTMLElement[] = [];
listButton?.addEventListener("click", () => {
    const newListItem = listItem?.cloneNode(true) as HTMLElement;
    newListItem.querySelector<HTMLInputElement>(".list-text")!.value = "";
    listClones.push(newListItem);
    listItemEntry?.after(newListItem);
});
