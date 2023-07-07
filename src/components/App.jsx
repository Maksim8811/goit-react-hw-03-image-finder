import React, {Component} from "react"
import Searchbar from "./Searchbar/Searchbar"
import ImageGallery from "./ImageGallery/ImageGallery"
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem"
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

  addMasiveObj = masive => {
    this.setState({search: masive})
  }

  
    render () {
    return (
      <div className="App">
      <Searchbar onSubmit={this.onSubmitForm}/>
      <ImageGallery searchName={this.state.searchForm}/>
      <ImageGalleryItem />
      <ToastContainer/>
      </div>
      )
  }
}

export default App
