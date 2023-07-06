const listHolder = document.getElementById("list-holder");
const input = document.getElementById("input-field");

loadData();

function addTask()
{
    if (input.value === '') {
        alert("Enter a task first!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listHolder.appendChild(li);
        input.value = "";
        saveData();
    }
}

function saveData()
{
    localStorage.setItem("todo_data", listHolder.innerHTML);
}

function loadData()
{
    listHolder.innerHTML = localStorage.getItem("todo_data");
}