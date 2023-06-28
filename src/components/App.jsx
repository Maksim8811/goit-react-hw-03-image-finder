import React, {Component} from "react";
import Searchbar from "./Searchbar/Searchbar"
import "./App.css"

class App extends Component {

  onSubmitForm = () => {
    
    console.log('onSubmitForm')
  }

  render () {
    return (
      <div className="App">
      <Searchbar onSubmit={this.onSubmitForm}/>
      </div>
      )
  }
}

export default App
