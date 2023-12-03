let dateFromLS = localStorage.getItem("labelDate");
let newDataDefault = new Date();
let dateTransformGlobal = [
    newDataDefault.getDay(),
    newDataDefault.getMonth(),
    newDataDefault.getFullYear(),
    newDataDefault.getDate()
];
let fullDataDefault = dateTransformGlobal.join("-");
let date = dateFromLS ? dateFromLS : fullDataDefault;

function displayDate(fnDate) {
    let dateTransform = fnDate.split("-");
    const currentLabelDisplay = document.getElementById("inputDateLabel");
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var mS = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ];
    const date = dateTransform[3] < 10 ? "0" + dateTransform[3] : dateTransform[3];
    currentLabelDisplay.innerHTML =
        weekday[dateTransform[0]] + ", " + mS[dateTransform[1]] + " " + date;
}

function setNewCurrentDate(date1, value) {
    let newDate = document.getElementById("inputDate");
    const defaultDate = newDate.value === "select date" ? new Date() : new Date(newDate.value);

    let dateTransformGlobal = [
        defaultDate.getDay(),
        defaultDate.getMonth(),
        defaultDate.getFullYear(),
        defaultDate.getDate()
    ].join("-");
    let date2 = date1 ? date1 : dateTransformGlobal;

    let fullDataDefault = date2;
    let dateFromLS = JSON.stringify(localStorage.setItem("labelDate", fullDataDefault));
    displayDate(fullDataDefault);
    if (value) {
        const defaultDate = new Date(newDate.value);
        let dateTransformGlobal = [
            defaultDate.getDay(),
            defaultDate.getMonth(),
            defaultDate.getFullYear(),
            defaultDate.getDate()
        ].join("-");
        getToLocalStorage(dateTransformGlobal, 1);
        selectTasks()
    }
    selectTasks()
}

setNewCurrentDate(date);