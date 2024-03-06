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
        var statusbtn = document.createElement("button");
        var btnText = document.createTextNode("Pending");
        statusbtn.className = "status";
        statusbtn.appendChild(btnText);
        tasks[i].appendChild(statusbtn);
        tasks[i].addEventListener('click', function (ev) {ev.target.innerHTML = "Completed"; }, false);
        i++;
        document.getElementById("taskDetails").value = "";
        document.getElementById("txtout").innerHTML = "";
    }
}

var tasks = document.getElementsByTagName("LI");
for (var i=0; i < tasks.length; i++) 
{
    var statusbtn = document.createElement("button");
    var btnText = document.createTextNode("Pending");
    var txt = "btn";
    statusbtn.className = "status";
    statusbtn.appendChild(btnText);
    tasks[i].appendChild(statusbtn);
}

var btns = document.getElementsByClassName("status");
for (j=0; j<=btns.length; j++)
{
    btns[j].addEventListener('click', function (ev) {ev.target.innerHTML = "Completed";}, false);
}
