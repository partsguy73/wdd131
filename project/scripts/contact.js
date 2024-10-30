const contactList = [
    {
        contactName: "Craig Hurdman",
        position: "Chorus President",
        phone: "(435) 574-9705",
        email: "craighurdman@ieee.org"
    },
    {
        contactName: "Tim Scott",
        position: "Membership VP",
        phone: "(435) 229-6906",
        email: "lellodrian@gmail.com"
    },
    {
        contactName: "Nate Holden",
        position: "Program VP",
        phone: "(435) 619-4212",
        email: "natenjan@msn.com"
    },
]

function showContacts(contacts) {
    const contactsDiv = document.getElementById('contacts');
    contactsDiv.innerHTML = "";
    contacts.forEach(contact => {
        const nameElement = document.createElement('h3')
        nameElement.innerText = contact.contactName;
        const positionElement = document.createElement('p')
        positionElement.innerText = 'Position: ' + contact.position;
        const phoneElement = document.createElement('p')
        phoneElement.innerText = 'Phone Number: ' + contact.phone;
        const emailElement = document.createElement('p')
        emailElement.innerText = 'Email Address: ' + contact.email;
        const cardElement = document.createElement('div');
        cardElement.setAttribute("class", "contact-card")
        cardElement.appendChild(nameElement);
        cardElement.appendChild(positionElement);
        cardElement.appendChild(phoneElement);
        cardElement.appendChild(emailElement);
        contactsDiv.appendChild(cardElement);
    });
};

showContacts(contactList);


