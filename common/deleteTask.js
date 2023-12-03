function deleteTask(id) {
    let dateFromLS = localStorage.getItem("labelDate");
    const tasks = localStorage.getItem(dateFromLS);
    const task = JSON.parse(tasks).tasks;
    const newTasks = task.filter((el) => el.id !== id)
    const taskToLS = JSON.stringify({tasks: newTasks});
    const setTasks = localStorage.setItem(dateFromLS, taskToLS);
    getToLocalStorage(dateFromLS, 1);
    completeTask()

}