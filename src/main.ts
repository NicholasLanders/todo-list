const todoItem = document.querySelector(".todo-item");
const todoButton = document.querySelector("#todo-button");
const todoItemEntry = document.querySelector("#todo-entry");
const listItem = document.querySelector(".list-item");
const listButton = document.querySelector("#list-button");
const listItemEntry = document.querySelector("#list-entry");

const initialTodoDelete = todoItem?.querySelector(".todo-delete");
initialTodoDelete?.addEventListener("click", () => {
    initialTodoDelete.parentElement?.parentElement?.remove();
});

let todoClones: HTMLElement[] = [];
todoButton?.addEventListener("click", () => {
    const newTodoItem = todoItem?.cloneNode(true) as HTMLElement;
    newTodoItem.querySelector<HTMLInputElement>(".todo-text")!.value = "";
    todoClones.push(newTodoItem);
    todoItemEntry?.after(newTodoItem);

    const dltBtn = newTodoItem.querySelector(".todo-delete");
    dltBtn?.addEventListener("click", () => {
        dltBtn.parentElement?.parentElement?.remove();

        const btnIndex = todoClones.indexOf(newTodoItem);
        if (btnIndex !== -1) todoClones.splice(btnIndex, 1);
    });
});

const initialListDelete = listItem?.querySelector(".list-delete");
initialListDelete?.addEventListener("click", () => {
    initialListDelete.parentElement?.remove();
});

listButton?.addEventListener("click", () => {
    const newListItem = listItem?.cloneNode(true) as HTMLElement;
    newListItem.querySelector<HTMLInputElement>(".list-text")!.value = "";
    const radio = newListItem.querySelector<HTMLInputElement>(".list-select");
    if (radio) radio.checked = false;
    listItemEntry?.after(newListItem);

    const dltBtn = newListItem.querySelector(".list-delete");
    dltBtn?.addEventListener("click", () => {
        dltBtn.parentElement?.remove();
    });
});
