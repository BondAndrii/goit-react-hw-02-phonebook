import React, {Component} from "react"; 

class App extends Component {
  state = {
  contacts: [],
  name: ''
  }
  render() {

    return (
      <form>
        <label>Інпут</label>
        <input type="text"/>
      </form>
    )
  }
};
export default App;