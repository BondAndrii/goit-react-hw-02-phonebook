import React, { Component } from "react"; 
import Form from "./Phonebook/Form";
import Filter from './Phonebook/Filter'
import PhoneBook from "./Phonebook/Phonebook";

class App extends Component {
  state = {
  contacts: [],
  name: '',
  number: '',
  filter:'',
  }
  // handleContactChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({contacts: event.currentTarget.value})
  //   console.log("state", this.state.contacts);
  //   this.setState({name:event.currentTarget.name})
  //   console.log(this.state.name);
  // }  
  formSubmitHandler = data => {
    // console.log("in App", data);
    // console.log("state before", this.state.contacts)
    this.setState(({ name, number, contacts }) => ({
      contacts: [...contacts, data],
      name: [...name, data.name],
      number: [...number, data.number]
      
    })); 
   console.log(this.state.name, this.state.number) 
  }
  doFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
    console.log(this.state);
    
  }
  toFoundAbonent = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(abon => abon.name.toLocaleLowerCase().includes(normalizedFilter));
  }  
  render() {
    const { filter} = this.state;
    const foundAbonent = this.toFoundAbonent();
    return (
    <div>
      <h1>Phonebook</h1>
      <Form priSubmit={this.formSubmitHandler} />      
      <div>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.doFilter} />
        <PhoneBook contacts={foundAbonent}/>
      </div>
    </div>
  );
};
};
export default App;