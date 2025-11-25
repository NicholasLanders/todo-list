const todoInput = document.querySelector(".todo-text") as HTMLInputElement;
const todoItem = document.querySelector(".todo-item") as HTMLElement;
const main = document.querySelector("main");

let clones: HTMLElement[] = [];
//TODO: Need to think about it all when it comes to deleting elements in different orders of
//      the list and such
main?.addEventListener("change", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (!target.classList.contains("todo-text")) return;

    if (target.value !== "") {
        const newClone = todoItem.cloneNode(true) as HTMLElement;
        newClone.querySelector<HTMLInputElement>(".todo-text")!.value = "";
        main?.appendChild(newClone);
        clones.push(newClone);
    } else {
        const lastClone = clones.pop();
        main?.removeChild(lastClone!);
    }
});
