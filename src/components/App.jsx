import React, { Component } from "react"; 
import Form from "./Phonebook/Form";

class App extends Component {
  state = {
  contacts: [],
  name: '',
  }
  // handleContactChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({contacts: event.currentTarget.value})
  //   console.log("state", this.state.contacts);
  //   this.setState({name:event.currentTarget.name})
  //   console.log(this.state.name);
  // }  
  formSubmitHandler = data => {
    console.log("in App", data);
    console.log("state before", this.state.contacts)
    this.setState(({ contacts }) => ({
     contacts: [...contacts, data],     
   }));    
  }

  render() {  
    return (
      <div>
        <h1>Phonebook</h1>
        <Form priSubmit={this.formSubmitHandler} />
        {/* <Form priSubmit={this.formSubmitHandler} /> */}
        <div>
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map((contact, index) => <li id={contact.id}>{contact.name}: {contact.number} </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
};
export default App;