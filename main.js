const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addMission() {
    if (inputBox.value === "")
        alert("You must write something!");
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
        inputBox.value = "";
    }
}

function clearAll() {
    listContainer.innerHTML = "";
    localStorage.removeItem("data");
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showList();