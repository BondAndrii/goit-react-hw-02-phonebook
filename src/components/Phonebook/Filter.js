import React from "react";

const Filter = ({value, onChange, onDelete}) => (
    <label>Пошук за ім'ям: 
        <input type="text" value={value} onChange={onChange} />
        <button type="button" onClick={onDelete}>Зітрись!</button>
    </label>
        )
export default Filter;