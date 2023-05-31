// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json()) // метод then отработает в случае успеха;
//     .then(data => console.log(data))
//     .catch(err => console.log(err)) // метод catch отработает в случае неудачи;
//     .finally(() => console.log('Hello from finally')); // метод finally отработает в любом случае;

const baseUrl = 'https://jsonplaceholder.typicode.com/';

const $userList = document.getElementById('userList');
const $userList2 = document.getElementById('userList2');
const $searchInput = document.getElementById('searchInput');

// let usersArr = [];

fetch(`${baseUrl}users`)
    .then(response => response.json())
    .then(users => {
        let filteredUsers = users;
        displayUsers(filteredUsers);

        $searchInput.addEventListener('input', () => {
            const searchTerm = $searchInput.value.toLowerCase();
            filteredUsers = users.filter(user => 
                user.name.toLowerCase().includes(searchTerm)
            )
            displayUsers(filteredUsers);
        })
        
        users.forEach(user => {
            liGeneration (user.name, $userList)
        })

    })
    .catch(err => {
        console.log(err);
        liGeneration (err, $userList)
    });

function displayUsers(users) {
    $userList2.innerHTML = '';

    users.forEach(user => {
        liGeneration (user.name, $userList2)
    })
}

function liGeneration (content, $listForInclude) {
    const li = document.createElement('li');
    li.textContent = content;
    $listForInclude.append(li);
}