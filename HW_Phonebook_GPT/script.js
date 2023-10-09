// Массив для хранения контактов
let contacts = [];

// Получаем элементы формы и таблицы контактов
const contactForm = document.getElementById('contact-form');
const contactsTableBody = document.getElementById('contacts-table-body');
const searchInput = document.getElementById('search-input');

// Функция для добавления контакта
function addContact(event) {
    event.preventDefault();

    // Получаем значения полей формы
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const phone = document.getElementById('phone-input').value;
    const company = document.getElementById('company-input').value;
    const city = document.getElementById('city-input').value;
    const street = document.getElementById('street-input').value;
    const house = document.getElementById('house-input').value;

    // Создаем объект контакта
    const contact = {
        name: name,
        email: email,
        phone: phone,
        company: company,
        address: {
            city: city,
            street: street,
            house: house
        }
    };

    // Добавляем контакт в массив
    contacts.push(contact);

    // Очищаем значения полей формы
    contactForm.reset();

    // Обновляем таблицу контактов
    displayContacts();
}

// Функция для отображения контактов в таблице
function displayContacts() {
    // Очищаем таблицу контактов
    contactsTableBody.innerHTML = '';

    // Получаем значение поля поиска
    const searchTerm = searchInput.value.toLowerCase();

    // Фильтруем контакты по значению поиска
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm) ||
        contact.email.toLowerCase().includes(searchTerm) ||
        contact.phone.includes(searchTerm) ||
        contact.company.toLowerCase().includes(searchTerm) ||
        contact.address.city.toLowerCase().includes(searchTerm) ||
        contact.address.street.toLowerCase().includes(searchTerm) ||
        contact.address.house.includes(searchTerm)
    );

    // Создаем строки таблицы для отображения контактов
    filteredContacts.forEach(contact => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td>${contact.company}</td>
            <td>${contact.address.city}, ${contact.address.street}, ${contact.address.house}</td>
            <td><button onclick="editContact('${contact.name}')">Изменить</button>
                <button onclick="deleteContact('${contact.name}')">Удалить</button></td>
        `;
        contactsTableBody.appendChild(row);
    });
}

// Функция для изменения контакта
function editContact(name) {
    // Находим контакт по имени
    const contact = contacts.find(c => c.name === name);

    // Заполняем значениями полей формы
    document.getElementById('name-input').value = contact.name;
    document.getElementById('email-input').value = contact.email;
    document.getElementById('phone-input').value = contact.phone;
    document.getElementById('company-input').value = contact.company;
    document.getElementById('city-input').value = contact.address.city;
    document.getElementById('street-input').value = contact.address.street;
    document.getElementById('house-input').value = contact.address.house;

    // Удаляем контакт из массива
    contacts = contacts.filter(c => c.name !== name);

    // Обновляем таблицу контактов
    displayContacts();
}

// Функция для удаления контакта
function deleteContact(name) {
    // Удаляем контакт из массива
    contacts = contacts.filter(c => c.name !== name);

    // Обновляем таблицу контактов
    displayContacts();
}

// Обработчик события отправки формы
contactForm.addEventListener('submit', addContact);

// Обработчик события ввода в поле поиска
searchInput.addEventListener('input', displayContacts);

// Инициализация при загрузке страницы
displayContacts();
