
function addTodo() {
    let rand = Math.random().toFixed(6);
    let id = parseInt(rand.slice(2, 8)) + 1

    let userVal = document.getElementById('userInput');
    let todoButton = document.getElementById('addTodoBtn');
    if (userVal.value === "") {
        alert('enter something')
    }
    else {
        let singleTodo = document.createElement('li');
        let list = document.getElementById('todo_list')
        let delet = document.createElement('button');
        let update = document.createElement('button');
        delet.appendChild(document.createTextNode('delete'));
        update.appendChild(document.createTextNode('update'));

        let userText = document.createTextNode(userVal.value);
        singleTodo.appendChild(userText);
        singleTodo.appendChild(delet);
        singleTodo.appendChild(update);
        singleTodo.setAttribute('id', id);

        update.setAttribute('onClick', 'updateTodo(this)');
        delet.setAttribute('onClick', 'deleteTodo(this)');
        list.appendChild(singleTodo);
        userVal.value = "";
        userVal.focus()
    }
    
}
function deleteTodo(event) {
    event.parentNode.remove();
}

function updateTodo(event) {

    let val = event.parentNode.childNodes[0].nodeValue
    updatedValue = prompt('Update value', val);
    event.parentNode.childNodes[0].nodeValue = updatedValue;
}
function checkVal() {
    let userValue = document.getElementById('userInput');
    if (userValue.value === "") {
        userValue.focus;
        userValue.style.backgroundColor = "yellow";

    }
    else {
        userValue.style.backgroundColor = 'white';
    }
}