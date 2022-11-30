import React from "react";
import PropTypes from "prop-types";

const PhoneBook = ({ contacts, onDelete }) => (
    <ul>
        {contacts.map((contact) => <li key={contact.id} id={contact.id}>
            <p>{contact.name}: {contact.number}</p>
            <button type="button" onClick={()=> onDelete(contact.id)}>Видали!</button>
        </li>
        )}
    </ul>
);

export default PhoneBook;

PhoneBook.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    }))
}