const phoneBook = {
    contactsList: [],
    addContact(contact) {
            this.contactsList.push(contact)
            alert('Contact was added!')
    },
    changeContact(contactId) {
        const index = this.contactsList.findIndex(contact => {
            contact.contactName === updatedContact.contactName
        })
        if (index !== -1) {
            this.contactsList[index] = updatedContact;
        } else {
            alert('Contact not found')
        }
    },
    deleteContact(contactName) {
        const index = this.contactsList.findIndex(contact => {
            contact.contactName === contactName
        });
        if (index !== -1) {
            this.contactsList.splice(index);
        } else {
            alert('Contact not found');
        }
    },
}

const $contactsList = document.getElementById('contactsList');
const $addContactBtn = document.getElementById('addContact');
const $contactForm = document.getElementById('addContactForm');
const $searchInput = document.getElementById('search-input');

// EVENT LISTENERS

// Add contact
$addContactBtn.addEventListener('click', addHandler);
// Search
$searchInput.addEventListener('input', displayContacts);

// HANDLERS

// Add contact button handler
function addHandler(event) {

    event.preventDefault();

    const $contactName = document.getElementById('contactName');
    const $email = document.getElementById('contactEmail');
    const $phone = document.getElementById('contactPhone');
    const $company = document.getElementById('contactCompany');
    const $address = document.getElementById('contactAddress');

    const contact = {
        contactName: $contactName.value.trim(),
        email: $email.value,
        phone: $phone.value,
        company: $company.value.trim(),
        address: {
            city: $address.value.split(",")[0],
            street: $address.value.split(",")[1] ? $address.value.split(",")[1] : "",
            house: $address.value.split(",")[2] ? $address.value.split(",")[2] : ""
        }
    };
    
    if (contact.contactName || contact.email || contact.phone) {
        contact.id = new Date().getTime();
        phoneBook.addContact(contact);
    } else {
        alert("Please enter at least one of the following parameters: Name, Email or Phone")
    }
    
    // Reset all of the fields in contactForm
    $contactForm.reset();

    // Renew Contact list
    displayContacts();
    
}

// Display contacts in the contacts list of the interface of the webpage
function displayContacts() {
    // Reset current contacts list
    $contactsList.innerHTML = '';

    // Get the value of the search field
    const searchTerm = $searchInput.value.toLowerCase();

    // Filter contacts by the value of the search field
    const filteredContacts = phoneBook.contactsList.filter(contact =>
        contact.contactName.toLowerCase().includes(searchTerm) ||
        contact.email.toLowerCase().includes(searchTerm) ||
        contact.phone.includes(searchTerm) ||
        contact.company.toLowerCase().includes(searchTerm) ||
        contact.address.city.toLowerCase().includes(searchTerm) ||
        contact.address.street.toLowerCase().includes(searchTerm) ||
        contact.address.house.includes(searchTerm)
    );

    // Create contacts points of the contacts list 
    filteredContacts.forEach(contact => {
        const li = document.createElement('li');
        let textContent = '';
        
        textContent += contact.contactName ? `Contact name: ${contact.contactName}, ` : '';
        textContent += contact.email ? `Email: ${contact.email}, ` : '';
        textContent += contact.phone ? `Phone: ${contact.phone}, ` : '';
        textContent += contact.company ? `Company: ${contact.company}, ` : '';
        if (contact.address.city || contact.address.street || contact.address.house) {
            const contactAddress = contact.address.city + contact.address.street + contact.address.house;
            textContent += contactAddress;
        } else {
            textContent += '';
        }
        
        li.textContent = textContent;
        const spanBtns = document.createElement('span');
        spanBtns.innerHTML = `
            <button id="changeContact" onclick="phoneBook.changeContact('${contact.contactName}')">Change details</button>
            <button id="deleteContact" onclick="phoneBook.deleteContact('${contact.contactName}')">Delete</button>
        `;
        li.insertAdjacentElement("beforeend", spanBtns);

        $contactsList.append(li);

        // row.innerHTML = `
        //     <td>${contact.name}</td>
        //     <td>${contact.email}</td>
        //     <td>${contact.phone}</td>
        //     <td>${contact.company}</td>
        //     <td>${contact.address.city}, ${contact.address.street}, ${contact.address.house}</td>
        //     <td><button onclick="editContact('${contact.name}')">Изменить</button>
        //         <button onclick="deleteContact('${contact.name}')">Удалить</button></td>
        // `;
        // contactsTableBody.appendChild(row);
    });
}