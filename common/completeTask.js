function completeTask(id) {
    let dateFromLS = localStorage.getItem("labelDate");
    const tasks = localStorage.getItem(dateFromLS);
    const selectContent = document.getElementById("selectID").value;
    let task = JSON.parse(tasks).tasks;
    const newTasks = task.map((el) => {
        const currentElementLabel = document.getElementById("img" + id);
        const setCurrentElementStyle = document.getElementById("div" + id);

        const currentElementLabel1 = document.getElementById("img" + el.id);
        const setCurrentElementStyle1 = document.getElementById("div" + el.id);
        if (el.isDone) {
            const selectContent = document.getElementById("selectID");
            if (el.id) {
                if (selectContent.value === "todo") {
                    return el;
                }
                if (setCurrentElementStyle1) {
                    setCurrentElementStyle1.setAttribute("class", "task checked");
                    currentElementLabel1.setAttribute("src", "./asserts/circle-check-regular.svg");
                    if (selectContent.value === "done" && id) {
                        setCurrentElementStyle.remove()
                    }
                   
                }
            }
        } else {
            const selectContent = document.getElementById("selectID");
            if (selectContent.value === "done") {
                const setCurrentElementStyle2 = document.getElementById("div" + id);
                if (id) {
                    const setTasks1 = task.map((el) => {
                        let newValue = el.isDone;
                        return el.id === id ? {...el, isDone: !newValue} : el;
                    });
                    const taskToLS = JSON.stringify({tasks: setTasks1});
                    const setTasks = localStorage.setItem(dateFromLS, taskToLS);
                    if (setCurrentElementStyle2) {
                        setCurrentElementStyle2.remove();
                    }
                }
                let newValue = el.isDone;
                return el;
            }
            if (selectContent.value === "todo") {
                const setCurrentElementStyle2 = document.getElementById("div" + id);
                if (id) {
                    const setTasks1 = task.map((el) => {
                        let newValue = el.isDone;
                        return el.id === id ? {...el, isDone: !newValue} : el;
                    });
                    const taskToLS = JSON.stringify({tasks: setTasks1});
                    const setTasks = localStorage.setItem(dateFromLS, taskToLS);
                    if (setCurrentElementStyle2) {
                        console.log(4);
                        setCurrentElementStyle2.remove();
                    }
                }
                let newValue = el.isDone;
                return el;
            }

            setCurrentElementStyle1.setAttribute("class", "task");
            currentElementLabel1.setAttribute("src", "./asserts/circle-regular.svg");
        }

        if (el.id === id && el.isDone) {
            if (setCurrentElementStyle) {
                setCurrentElementStyle.setAttribute("class", "task");
                currentElementLabel.setAttribute("src", "./asserts/circle-regular.svg");
            }
        }
        if (el.id === id && !el.isDone) {
            setCurrentElementStyle.setAttribute("class", "task checked");
            currentElementLabel.setAttribute("src", "./asserts/circle-check-regular.svg");
        }

        let newValue = el.isDone;
        return el.id === id ? {...el, isDone: !newValue} : el;
    });
    if (selectContent !== "todo") {
        const taskToLS = JSON.stringify({tasks: newTasks});
        const setTasks = localStorage.setItem(dateFromLS, taskToLS);
    }
   
}
