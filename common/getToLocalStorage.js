function getToLocalStorage(date) {
    const mainContent = document.getElementById("container");
    const selectContent = document.getElementById("selectID");
    let currentValue = JSON.parse(localStorage.getItem(date));
    let currentTasks = currentValue ? currentValue.tasks : [];

    let newMainContent = document.createElement("div");
    newMainContent.setAttribute("id", "container");
    newMainContent.setAttribute("class", "container");
    mainContent.replaceWith(newMainContent);
    currentTasks.forEach((element) => {
        if (selectContent.value === "all") {
            addElement(element.text, 0, element.id);
        }
        if (selectContent.value === "done" && element.isDone) {
            addElement(element.text, 0, element.id);
        }
        if (selectContent.value === "todo" && !element.isDone) {
            addElement(element.text, 0, element.id);
        }
    });
}
