function addElement(value, second, completeID) {
    const warnInput = document.getElementById("inputWarning");
    //select main element
    const mainContainer = document.getElementById("container");
    //create task container
    const createTaskContainer = document.createElement("div");
    const buttonContainer = document.createElement("div");
    createTaskContainer.setAttribute("class", "task");
    
    const id = crypto.randomUUID();
    const staticID = id
    const finalID = completeID ? completeID : staticID
    createTaskContainer.setAttribute("id", "div" + finalID);

    if (!value.trim()) {
        warnInput.setAttribute("class", "deletedTasksList");
        return;
    }
    //set task name value to container
    const task = document.createElement("span");
    const deleteButton = document.createElement("img");
    task.innerHTML = value.trim();
    task.setAttribute("id", "span" + finalID);
    deleteButton.setAttribute("src", "./asserts/trash-can-solid.svg");
    deleteButton.setAttribute("class", "trash");
    task.setAttribute("ondblclick", "editElement(event)");
    createTaskContainer.appendChild(task);
    warnInput.setAttribute("class", "deletedTasksListHidden");

    //create checkbox for task
    const newCHeckbox = document.createElement("input");
    const label = document.createElement("label");
    const image = document.createElement("img");

    newCHeckbox.setAttribute("type", "checkbox");
    newCHeckbox.setAttribute("class", "checkbox");
    newCHeckbox.setAttribute("id", finalID);
    label.setAttribute("for", finalID);
    label.setAttribute("name", finalID);
    label.setAttribute("id", "label" + finalID);
    label.setAttribute("class", "labelForCheckbox");
    image.setAttribute("src", "./asserts/circle-regular.svg");
    image.setAttribute("id", "img" + finalID);
    buttonContainer.appendChild(label);
    buttonContainer.appendChild(newCHeckbox);
    buttonContainer.appendChild(deleteButton);
    label.appendChild(image);
    createTaskContainer.appendChild(buttonContainer);

    // add the newly created element and its content into the DOM
    // document.body.insertBefore(createTaskContainer, mainInput);
    mainContainer.appendChild(createTaskContainer);
    //add listener of checked status
    let dateFromLS = localStorage.getItem("labelDate");
    if (second) {
        const items = JSON.parse(localStorage.getItem(dateFromLS))
            ? JSON.parse(localStorage.getItem(dateFromLS)).tasks
            : [];
        items.push({id: staticID, text: value, isDone: false});
        const dataTransform = JSON.stringify({
            tasks: items
        });
        let dateToLS = localStorage.setItem(dateFromLS, dataTransform);
    }

    newCHeckbox.onclick = () => completeTask(finalID);
    deleteButton.onclick = () => deleteTask(finalID);
}
