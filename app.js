function addItem() {
    var listItem = document.createElement("li");
    var taskDesc = document.getElementById("taskDetails").value;
    var newItem = document.createTextNode(taskDesc);
    listItem.appendChild(newItem);
    if (taskDesc == '')
    {
        document.getElementById('txtout').innerHTML = 'Please enter task detailsin the box above.';
        document.getElementById("taskDetails").setAttribute("style", "background-color: #FCED99;");
    }
    else
    {
        document.getElementById('taskList').appendChild(listItem);
        document.getElementById("taskDetails").value = "";
        document.getElementById("txtout").innerHTML = "";
    }
}