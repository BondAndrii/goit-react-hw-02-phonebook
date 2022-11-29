import React from "react";

const PhoneBook = ({ contacts, onDelete }) => (
    <ul>
        {contacts.map((contact) => <li key={contact.id} id={contact.id}>
            <p>{contact.name}: {contact.number}</p>
            <button type="button" onClick={()=> onDelete(contact.id)}>Видалити</button>
        </li>
        )}
    </ul>
);

export default PhoneBook;