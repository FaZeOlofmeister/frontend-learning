function addList() {
    var task = document.getElementById("task").value;
    if (task == "") {
        alert("请输入用户名！");
    } else {
        var data = loadData();
        var todo = {
            "task": task,
            "done": false
        };
        data.push(todo);
        saveData(data);
        var form = document.getElementById("form");
        form.reset();
        load();
    }
}

function loadData() {
    var collection = localStorage.getItem("todo");
    if (collection != null) {
        return JSON.parse(collection);
    }
    else return [];
}

function saveData(data) {
    localStorage.setItem("todo", JSON.stringify(data));
}

function clear() {
    localStorage.clear();
    load();
}

function remove(i) {
    var data = loadData();
    data.splice(i, 1);
    saveData(data);
    load();
}

function update(i, key, value) {
    var data = loadData();
    data[i][key] = value;
    saveData(data);
    load();
}

function load() {
    var todolist = document.getElementById("todolist");
    var collection = localStorage.getItem("todo");
    if (collection != null) {
        var data = JSON.parse(collection);
        var todoCount = 0;
        var todoString = "";
        for (var i = 0; i < data.length; i++) {
            if (data[i].done) {
                todoString += `<li><a href="javascript:remove(${i})">X</a><input type="checkbox" checked="checked" onclick="update(${i},'done',false)"/><p id="p-${i}")"><del>${data[i].task}</del></p></li>`;
            }
            else {
                todoString += `<li><a href="javascript:remove(${i})">X</a><input type="checkbox" onclick="update(${i},'done',true)"/><p id="p-${i}" onclick="edit(${i})">${data[i].task}</p></li>`;
                todoCount++;
            }
        };
        todocount.innerHTML = todoCount;
        todolist.innerHTML = todoString;
    }
    else {
        todocount.innerHTML = 0;
        todolist.innerHTML = "";
    }
}

function edit(i) {
    load();
    var p = document.getElementById(`p-${i}`);
    task = p.innerHTML;
    p.innerHTML = `<input id="input-${i}" value="${task}"/>`;
    var input = document.getElementById(`input-${i}`);
    input.setSelectionRange(input.value.length, input.value.length);
    input.focus();
    input.onblur = () => {
        if (input.value.length == 0) {
            p.innerHTML = task;
            alert("请输入新的任务名！");
        }
        else {
            update(i, "task", input.value);
        }
    };
}

window.onload = load();
window.addEventListener("storage", load());