import React, {Component} from "react"
import Searchbar from "./Searchbar/Searchbar"
import ImageGallery from "./ImageGallery/ImageGallery"
import "./App.css"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class App extends Component {

  state = {
    search: [],
    searchForm: "",
  }

  onSubmitForm = nameSearch => {
    this.setState({searchForm: `${nameSearch}`})
  }

  
    render () {
    return (
      <div className="App">
      <Searchbar onSubmit={this.onSubmitForm}/>
      <ImageGallery searchName={this.state.searchForm}/>
      <ToastContainer/>
      </div>
      )
  }
}

export default App
