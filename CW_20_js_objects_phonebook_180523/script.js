const phoneBook = {
    contactsList: [{
        id: '',
        contactName: '',
        email: '',
        phoneNumber: '',
        company: '',
        address: {
            street: '',
            house: '',
            city: ''
        }
    }],
    addContact(contact) {
        if (contact.contactName || contact.email || contact.phoneNumber) {
            contact.id = new Date().getTime();
            this.contactsList.push(contact)
            alert('Contact was added!')
        } 
    },
    changeContact(updatedContact) {
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
    }
}
