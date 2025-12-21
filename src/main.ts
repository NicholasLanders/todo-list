const todoItem = document.querySelector(".todo-item");
const todoButton = document.querySelector("#todo-button");
const todoItemEntry = document.querySelector("#todo-entry");
const listItem = document.querySelector(".list-item");
const listButton = document.querySelector("#list-button");
const listItemEntry = document.querySelector("#list-entry");

//Delete button on first element
const firstListDltBtn = listItem?.querySelector(".list-delete");
firstListDltBtn?.addEventListener("click", () => {
    firstListDltBtn.parentElement?.remove();
});

const lists = new Map<HTMLElement, HTMLElement[]>();
listButton?.addEventListener("click", () => {
    const newListItem = listItem?.cloneNode(true) as HTMLElement;
    lists.set(newListItem, []);
    newListItem.querySelector<HTMLInputElement>(".list-text")!.value = "";
    const radio = newListItem.querySelector<HTMLInputElement>(".list-select");
    if (radio) radio.checked = false;
    listItemEntry?.after(newListItem);

    const dltBtn = newListItem.querySelector(".list-delete");
    dltBtn?.addEventListener("click", () => {
        dltBtn.parentElement?.remove();
    });
});

//TODO: Need to delete the associated todo list with it
function deleteList(dltBtn: HTMLElement, listItem: HTMLElement) {}

//Delete button on first element
const firstTodoDltBtn = todoItem?.querySelector(".todo-delete");
firstTodoDltBtn?.addEventListener("click", () =>
    deleteTodo(firstTodoDltBtn as HTMLElement, todoItem as HTMLElement)
);

let curListItem = document.querySelector(
    ".list-item input[type='radio']:checked"
);
lists.set(curListItem as HTMLElement, [todoItem as HTMLElement]);
todoButton?.addEventListener("click", () => {
    const newTodoItem = todoItem?.cloneNode(true) as HTMLElement;
    newTodoItem.querySelector<HTMLInputElement>(".todo-text")!.value = "";
    curListItem = document.querySelector(
        ".list-item input[type='radio']:checked"
    );
    lists.get(curListItem as HTMLElement)?.push(newTodoItem);
    todoItemEntry?.after(newTodoItem);

    const dltBtn = newTodoItem.querySelector(".todo-delete");
    dltBtn?.addEventListener("click", () =>
        deleteTodo(dltBtn as HTMLElement, newTodoItem)
    );
});

function deleteTodo(dltBtn: HTMLElement, todoItem: HTMLElement) {
    dltBtn.parentElement?.parentElement?.remove();

    const curTodoArray = lists.get(curListItem as HTMLElement);
    const btnIndex = curTodoArray?.indexOf(todoItem) as number;
    if (btnIndex !== -1) curTodoArray?.splice(btnIndex, 1);
}
