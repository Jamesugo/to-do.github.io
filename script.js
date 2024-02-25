function addTask() {
    var inputValue = document.getElementById("taskInput").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var li = document.createElement("li");
        var textNode = document.createTextNode(inputValue);
        li.appendChild(textNode);
        document.getElementById("todo-list").appendChild(li);
        document.getElementById("taskInput").value = "";
        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "❌";
        deleteBtn.onclick = function() {
            this.parentElement.remove();
        }
        li.appendChild(deleteBtn);
        li.onclick = function() {
            this.classList.toggle('checked');
        }
    }
}