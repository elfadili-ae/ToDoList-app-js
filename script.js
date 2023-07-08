const listHolder = document.getElementById("list-holder");
const input = document.getElementById("input-field");

loadData();

function addTask()
{
    if (input.value === '') {
        alert("Enter a task first!");
    }
    else {
        //check if the input already exists
        const liElements = listHolder.querySelectorAll('li');
        // Loop through each <li> element and extract the text content
        liElements.forEach((li) => {
            //compare tasks
            console.log(li.textContent.slice(0, -3));
            if (li.textContent.slice(0, -3) == input.value) {
                alert("This task already exists!\nmind finishing that first?");
                return;
            }
        });

        //create new element li
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listHolder.appendChild(li);
        input.value = "";

        let duplica = document.createElement("duplica");
        duplica.innerHTML = "🗍";
        li.append(duplica);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);

        saveData();
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