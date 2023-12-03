function selectTasks() {
    let dateFromLS = localStorage.getItem("labelDate")

    getToLocalStorage(dateFromLS, 1);
    completeTask()
}