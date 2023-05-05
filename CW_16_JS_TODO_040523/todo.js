const addItem = document.getElementById('addItem');
const todoList = document.getElementById('todoList');

addItem.onclick = addTodoItem;

function addTodoItem() {
    const li = document.createElement('li'); 
    const item = document.getElementById('item');
    const text = item.value.trim();
    if (text) {
        li.append(document.createTextNode(text));
        todoList.appendChild(li);
    }
    item.value = '';
}