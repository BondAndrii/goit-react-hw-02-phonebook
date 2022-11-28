import React, { Component } from "react";
import { nanoid } from "nanoid";
class Form extends Component {
    state = {
        name: '',
        number:'',
        id:'',
    }
    nameId = nanoid();
    // numberId = nanoid();
    handleChange = e => {
        const { name, id, value } = e.currentTarget;
        this.setState({
            [name]: value,
            id: id,
        });        
        console.log(this.state);
        // console.log(this.state.id);
    }
    handleSubmit = e => {
    e.preventDefault();
        console.log("in form before", this.state);
        this.props.priSubmit(this.state);        
        console.log("in form after", this.state);
        this.reset();
        
        
    // this.state.contacts.push(event.currentTarget.value);
    // console.log("sibmit", this.state.contacts);  
    }
    reset = () => {
        this.setState({ name: '', number:'', id:''});
    };
    render() {
        return (
            
            <form  onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameId}>Name:
                    <input
                        type="text"
                        name="name"
                        id={this.nameId}
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="Enter your name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label htmlFor={this.numberId}>Number:
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        id={this.nameId}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                
                <button type="submit">Add contact</button>
            </form>
            
                
        );
    }
}
export default Form;