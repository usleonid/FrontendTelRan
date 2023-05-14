const persons = [];
const personsList = document.getElementById('personsList');
const addPerson = document.getElementById('addPerson');
//TODO click Add person => add unique person to array persons,
// and add to ol with id='personsList'
// click Get Stats => add stats after  <h2>Stats</h2>, average age, min age, max age

addPerson.addEventListener('click', () => addPersonToList());

function addPersonToList() {
    const li = document.createElement('li'); 
    li.style.paddingBottom = "5px"
    const fields = document.querySelectorAll('input')
    const person = {
        id: fields[0].value.trim(),
        firstName: fields[1].value.trim(),
        lastName: fields[2].value.trim(),
        age: +fields[3].value.trim()
    }
    if (person) {
        persons.push(person);
        li.append(document.createTextNode(`ID: ${person.id}, Full name: ${person.firstName.toUpperCase()} ${person.lastName.toUpperCase()}, Age: ${person.age}`));
        personsList.appendChild(li);
        // taskId += 1;
        // li.id = `task${taskId}`;
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
    fields.forEach(field => {
        field.value = ''
    });
    // fields.value = '';
}