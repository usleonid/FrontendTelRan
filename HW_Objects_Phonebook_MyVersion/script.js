// NODES
const $contactName = document.getElementById('contactName');
const $email = document.getElementById('contactEmail');
const $contactPhone = document.getElementById('contactPhone');
const $company = document.getElementById('contactCompany');
const $address = document.getElementById('contactAddress');
const $contactsList = document.getElementById('contactsList');
const $addContactBtn = document.getElementById('addContactButton');
const $contactForm = document.getElementById('addContactForm');
const $searchInput = document.getElementById('search-input');

//get values of the contact form
const getNameFieldValue = () => $contactName.value.trim();
const getEmailFieldValue = () => $email.value.trim();
const getPhoneFieldValue = () => $contactPhone.value.trim();
const getCompanyFieldValue = () => $company.value.trim();
const getAddressFieldCityValue = () => $address.value.split(",")[0];
const getAddressFieldStreetValue = () => $address.value.split(",")[1];
const getAddressFieldHouseValue = () => $address.value.split(",")[2];
// END OF NODES


// EVENT LISTENERS
// Add contact
$addContactBtn.addEventListener('click', addHandler);
// Search
$searchInput.addEventListener('input', displayContacts);
// END OF EVENT LISTENERS


// MAIN OBJECT "PHONEBOOK"
const phoneBook = {
    contactsList: [],
    addContact(contact) {
            this.contactsList.push(contact)
            alert('Contact was added!')
    },
    changeContact(contactId) {
        const contact = this.contactsList.find(contact => contact.id === contactId);

        // Fill the fields of the form to change any of them
        $contactName.value = contact.contactName;
        $email.value = contact.email;
        $contactPhone.value = contact.phone;
        $company.value = contact.company;
        contact.address.city || contact.address.street || contact.address.house ? 
            $address.value = `${contact.address.city},${contact.address.street},${contact.address.house}` : 
            $address.value = "";
    },
    deleteContact(contactID) {
        this.contactsList = this.contactsList.filter(contact => contact.id !== contactID);
    },
}
// END OF THE OBJECT "PHONEBOOK"


// HANDLERS
// Add contact button handler
function addHandler(event) {

    event.preventDefault();

    const contact = {
        contactName: getNameFieldValue(),
        email: getEmailFieldValue(),
        phone: getPhoneFieldValue(),
        company: getCompanyFieldValue(),
        address: {
            city: getAddressFieldCityValue() ? getAddressFieldCityValue().trim() : "",
            street: getAddressFieldStreetValue() ? getAddressFieldStreetValue().trim() : "",
            house: getAddressFieldHouseValue() ? getAddressFieldHouseValue().trim() : ""
        }
    };
    
    if (contact.contactName || contact.email || contact.phone) {
        contact.id = String(new Date().getTime());
        phoneBook.addContact(contact);
    } else {
        alert("Please enter at least one of the following parameters: Name, Email or Phone")
    }
    
    // Reset all of the fields in contactForm
    $contactForm.reset();

    // Renew Contact list
    displayContacts();
    
}

// Change contact button handler
function changeHandler(contactID) {
    phoneBook.changeContact(contactID);
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            deleteHandler(contactID)
            displayContacts();
        })
    });
} 

// Delete contact button handler
function deleteHandler(contactID) {
    phoneBook.deleteContact(contactID);
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
        
        textContent += contact.contactName ? `<strong>Contact name:</strong> ${contact.contactName} | ` : '';
        textContent += contact.email ? `<strong>Email:</strong> ${contact.email} | ` : '';
        textContent += contact.phone ? `<strong>Phone:</strong> ${contact.phone} | ` : '';
        textContent += contact.company ? `<strong>Company:</strong> ${contact.company} | ` : '';
        if (contact.address.city || contact.address.street || contact.address.house) {
            const contactAddress = `<strong>Address:</strong> ${contact.address.city}, ${contact.address.street}, ${contact.address.house}`;
            textContent += contactAddress;
        } else {
            textContent += '';
        }
        
        li.innerHTML += textContent;
        const spanBtns = document.createElement('span');
        spanBtns.setAttribute('id', 'spanBtns')
        spanBtns.innerHTML = `
            <button id="changeContactButton" onclick="changeHandler('${contact.id}')">Change details</button>
            <button id="deleteContactButton" onclick="deleteHandler('${contact.id}')">Delete</button>
        `;
        li.insertAdjacentElement("beforeend", spanBtns);

        $contactsList.append(li);
    });
}