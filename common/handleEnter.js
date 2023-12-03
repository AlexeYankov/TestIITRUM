function handle(event) {
    if (event.keyCode === 13) {
        addTask(); // Ensure it is only this code that runs
    }
}

function handleEdit(event) {
    const currentElement = document.getElementById(event.target.attributes.id.value);
    const warnInput = document.getElementById("inputWarning");

    if (event.keyCode === 13) {
        const inputValue = document.getElementById(event.target.attributes.id.value).value;

        if (inputValue.trim()) {
            let dateFromLS = localStorage.getItem("labelDate");
            const tasks = localStorage.getItem(dateFromLS);
            const task1 = JSON.parse(tasks).tasks;
            currentText = "";
            const task = document.createElement("span");
            const id = crypto.randomUUID();
            task.innerHTML = inputValue;
            task.setAttribute("id", "span" + id);
            task.setAttribute("ondblclick", "editElement(event)");
            currentElement.replaceWith(task);
            warnInput.setAttribute("class", "deletedTasksListHidden");
            const newTasks = task1.map((el) => {
                return el.id === event.target.attributes.id.value.slice(4) ? {...el, text: inputValue} : el;
            });
            const taskToLS = JSON.stringify({tasks: newTasks});
            const setTasks = localStorage.setItem(dateFromLS, taskToLS);
            return;
        }

        warnInput.setAttribute("class", "deletedTasksList");
        return;
    }
    if (event.key === "Escape") {
        const task = document.createElement("span");
        task.innerHTML = currentText;
        const id = crypto.randomUUID();
        task.setAttribute("id", "span" + id);
        task.setAttribute("ondblclick", "editElement(event)");
        currentElement.replaceWith(task);
        warnInput.setAttribute("class", "deletedTasksListHidden");
    }
}
