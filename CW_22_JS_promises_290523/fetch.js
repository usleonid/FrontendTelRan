// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json()) // метод then отработает в случае успеха;
//     .then(data => console.log(data))
//     .catch(err => console.log(err)) // метод catch отработает в случае неудачи;
//     .finally(() => console.log('Hello from finally')); // метод finally отработает в любом случае;

const baseUrl = 'https://jsonplaceholder.typicode.com/';

const $userList = document.getElementById('userList');
const $userList2 = document.getElementById('userList2');
const $searchInput = document.getElementById('searchInput');
const $personalData = document.getElementById('personalData')
const $divListAndData = document.getElementById('usersBeforeFiltering')

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
            const $li = liGeneration (user.name, $userList);
            // $li.addEventListener('click', () => console.log(user))
            $li.addEventListener('click', (event) => {
                document.querySelectorAll('.row ol li').forEach((element) => {
                    element.style = ''
                });
                event.target.style.border = '1px solid black';
                event.target.style.padding = '0px 15px 0 5px'
                $personalData.innerHTML = ''
                Object.entries(user).forEach(([key, value]) => {
                    if (typeof value !== 'object') {
                        $personalData.innerHTML += `<strong>${key}:</strong> ${value}</br>`;
                    // } else {
                    //     const $innerUl = document.createElement('ul')
                    //     Object.entries(value).forEach(([keyV, valueV]) => {
                    //         const $liInnerUl = document.createElement('li');
                    //         $liInnerUl.innerHTML = `<strong>${keyV}:</strong> ${valueV}`;
                    //         $innerUl.insertAdjacentElement('beforeend', $liInnerUl);
                    //         // $innerUl.textContent += `<li><strong>${keyV}:</strong> ${valueV}</li>`;
                    //     });
                    //     $personalData.innerHTML += `<strong>${key}:</strong></br>${$innerUl}</br>`;
                    }
                });
            });
        })

        $divListAndData.addEventListener('click', (event) => {
            console.log(event);
            if (event.target.nodeName.toLowerCase() !== 'li') {
                document.querySelectorAll('.row ol li').forEach((element) => {
                    element.style = ''
                });
                $personalData.innerHTML = 'Click to some user to see its personal data...'
            }
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
    return li;
}