import React from "react";
import PropTypes from "prop-types";

const Filter = ({value, onChange, onDelete}) => (
    <label>Пошук за ім'ям: 
        <input
            type="text" value={value}
            placeholder="введи ім'я"
            onChange={onChange}
        />
        <button type="button" onClick={onDelete}>Зітрись!</button>
    </label>
        )
export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}