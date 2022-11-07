import React, {Component} from "react"; 

class App extends Component {
  state = {
  contacts: "",
  name: ''
  }
  handleContactChange = event => {
    console.log(event.currentTarget.value);
    this.setState({contacts: event.currentTarget.value})
    console.log("state", this.state.contacts);
    this.setState({name:event.currentTarget.name})
    // console.log(this.state.name);
  }
  handleSubmit = event => {
    event.preventDefault();
    // this.state.contacts.push(event.currentTarget.value);
    console.log("sibmit", this.state.contacts);
   

  }
  render() {

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name:
            <input
            type="text"
            name="name"
            value={this.state.contacts}
            onChange={this.handleContactChange}
            placeholder="Enter your name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
          </label>
          
          <button type="submit">Add contact</button>
        </form>
        <div>
            <h2>Contacts</h2>
        </div>
      </div>
    )
  }
};
export default App;