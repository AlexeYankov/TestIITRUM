function addTask() {
    const mainInput = document.getElementById("input");

    addElement(mainInput.value, 1);
    mainInput.value = "";
    selectTasks()
}
