function clearTasks() {
    let dateFromLS = localStorage.getItem("labelDate")
    const tasks = JSON.stringify({tasks: []})
    let dateToLS = localStorage.setItem(dateFromLS, tasks);
    getToLocalStorage(dateFromLS, 1);
}