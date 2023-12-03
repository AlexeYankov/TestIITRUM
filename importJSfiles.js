const files = [
    "./jsApp.js",
    "./common/addElement.js",
    "./common/editElement.js",
    "./common/completeTask.js",
    "./common/selectAllTasks.js",
    "./common/deleteTask.js",
    "./common/handleEnter.js",
    "./common/getToLocalStorage.js",
    "./common/setCurrentDate.js",
    "./common/clearTasks.js",
];

function importFiles(files) {
    const selectAnchorJStag = document.getElementById("JSinject");
    files.map((el) => {
        const createJSfileConnect = document.createElement("script");
        createJSfileConnect.setAttribute("src", el);

        document.body.insertBefore(createJSfileConnect, selectAnchorJStag);
    });
}
importFiles(files);
