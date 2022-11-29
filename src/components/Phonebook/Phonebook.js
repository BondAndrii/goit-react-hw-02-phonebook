import React from "react";

const PhoneBook = ({ contacts }) => (
    <ul>
        {contacts.map((contact) => <li key={contact.id} id={contact.id}>{contact.name}: {contact.number} </li>
        )}
    </ul>
);

export default PhoneBook;