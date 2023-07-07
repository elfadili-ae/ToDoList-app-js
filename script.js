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

        let duplica = document.createElement("duplica");
        duplica.innerHTML = "🗍";
        li.append(duplica);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
    }
}

listHolder.addEventListener("click", function(e){
    if (e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
    else if (e.target.tagName === "DUPLICA")
    {
        var txt = e.target.parentElement.textContent;
        navigator.clipboard.writeText(txt.slice(0, -3))
        input.value = txt.slice(0, -3);
        saveData();
    }
});

function saveData()
{
    localStorage.setItem("todo_data", listHolder.innerHTML);
}

function loadData()
{
    listHolder.innerHTML = localStorage.getItem("todo_data");
}