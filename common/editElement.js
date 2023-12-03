let currentText = ""

function editElement(event) {
    const spanElement = document.getElementById(event.target.attributes.id.value)
    const currentTextValue = document.getElementById(event.target.attributes.id.value).innerHTML
    currentText = currentTextValue
    const input = document.createElement("input")
    input.setAttribute("onkeydown", "handleEdit(event)");
    input.setAttribute("value", currentText);
    input.setAttribute("id", event.target.attributes.id.value);
    spanElement.replaceWith(input);
    input.innerText = currentText

}