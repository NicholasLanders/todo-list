const todoItem = document.querySelector(".todo-item");
const firstTodoDltBtn = todoItem?.querySelector(".todo-delete");
const todoAddBtn = document.querySelector("#todo-add-btn");
const todoControl = document.querySelector("#todo-control");
const listItem = document.querySelector(".list-item");
const firstListDltBtn = listItem?.querySelector(".list-delete");
const listAddBtn = document.querySelector("#list-add-btn");
const listControl = document.querySelector("#list-control");

// Using a map to associate the list selector with the different todo lists arrays
const lists = new Map<HTMLElement, HTMLElement[]>();
const listSetup = () => {
    const curList = document.querySelector(
        ".list-item input[type='radio']:checked"
    );
    lists.set(curList as HTMLElement, [todoItem as HTMLElement]);
};
listSetup();

firstListDltBtn?.addEventListener("click", () =>
    deleteList(firstListDltBtn as HTMLElement)
);

//FIXME: For DEBUGGING
(window as any).lists = lists;
listAddBtn?.addEventListener("click", () => {
    const newListItem = listItem?.cloneNode(true) as HTMLElement;
    lists.set(newListItem, []);
    newListItem.querySelector<HTMLInputElement>(".list-text")!.value = "";
    const radio = newListItem.querySelector<HTMLInputElement>(".list-select");
    if (radio) radio.checked = false;
    listControl?.after(newListItem);

    // TODO: Make a listener on the radio button to change the list each time
    radio?.addEventListener("click", () => {});

    const dltBtn = newListItem.querySelector(".list-delete");
    dltBtn?.addEventListener("click", () => {
        dltBtn.parentElement?.remove();
    });
});

function deleteList(dltBtn: HTMLElement) {
    // TODO: Clear the dom if the current todo items are on the screen
    dltBtn.parentElement?.remove();
    lists.delete(listItem as HTMLElement);
}

// TODO: This will delete all the DOM elements from the screen and replace them with the new list selected
function changeList(curList: HTMLElement) {}

firstTodoDltBtn?.addEventListener("click", () => {
    const curList = document.querySelector(
        ".list-item input[type='radio']:checked"
    );
    deleteTodo(
        firstTodoDltBtn as HTMLElement,
        todoItem as HTMLElement,
        curList as HTMLElement
    );
});

todoAddBtn?.addEventListener("click", () => {
    const newTodoItem = todoItem?.cloneNode(true) as HTMLElement;
    const curList = document.querySelector(
        ".list-item input[type='radio']:checked"
    );
    newTodoItem.querySelector<HTMLInputElement>(".todo-text")!.value = "";
    lists.get(curList as HTMLElement)?.push(newTodoItem);
    todoControl?.after(newTodoItem);

    const dltBtn = newTodoItem.querySelector(".todo-delete");
    dltBtn?.addEventListener("click", () =>
        deleteTodo(dltBtn as HTMLElement, newTodoItem, curList as HTMLElement)
    );
});

function deleteTodo(
    dltBtn: HTMLElement,
    todoItem: HTMLElement,
    curList: HTMLElement
) {
    dltBtn.parentElement?.parentElement?.remove();

    const curTodoArray = lists.get(curList as HTMLElement);
    const btnIndex = curTodoArray?.indexOf(todoItem) as number;
    if (btnIndex !== -1) curTodoArray?.splice(btnIndex, 1);
}
