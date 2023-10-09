const addItem = document.getElementById('addItem');
const todoList = document.getElementById('todoList');

addItem.onclick = addTodoItem;

function addTodoItem() {
    const li = document.createElement('li'); 
    li.style.paddingBottom = "5px"
    const item = document.getElementById('item');
    const text = item.value.trim();
    let taskId = 0;
    if (text) {
        li.append(document.createTextNode(text));
        todoList.appendChild(li);
        taskId += 1;
        li.id = `task${taskId}`;
        // delete button create v
        const divDel = document.createElement('div');
        divDel.id = `deletePointer${taskId}`
        divDel.style.display = "inline";
        divDel.style.marginLeft = "10px";
        divDel.style.padding = "0 2px";
        divDel.style.color = "#fff";
        divDel.style.cursor = "pointer";
        divDel.style.backgroundColor = "red";
        divDel.append(document.createTextNode('X'));
        li.appendChild(divDel);
        
        // add event listener to delete button var 1
        // divDel.onclick = deleteTodoItem;
        // function deleteTodoItem () {
        //      li.remove();
        // }

        // add event listener to delete button var 2
        // divDel.addEventListener('click', (event) => {
        //     // event.preventDefault();
        //     // const listItem = event.target.parentNode;
        //     // listItem.remove();
        //     // listItem.parentNode.removeChild(listItem);
        //     li.remove();
        // });

        // add event listener to delete button var 3
        divDel.onclick = () => {li.remove()} 
    }
    item.value = '';
}




// divDel.onclick = deleteTodoItem;

