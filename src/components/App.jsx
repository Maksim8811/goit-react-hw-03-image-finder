import React, {Component} from "react"
import Searchbar from "./Searchbar/Searchbar"
import "./App.css"
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const KEY = "https://pixabay.com/api/?key=31290162-40f32dd3366e200868c1207df&q=flowers&image_type=photo"

class App extends Component {

  state = {
    search: [],
    searchForm: "",
  }

  onSubmitForm = nameSearch => {
    this.setState({searchForm: `${nameSearch}`})
  }

   componentDidMount () {
    axios.get(KEY).then((res) => {
      console.log(res.data.hits)
    }).catch(() => {console.log('ERROR')})
   }

  render () {
    return (
      <div className="App">
      <Searchbar onSubmit={this.onSubmitForm}/>
      <ToastContainer/>
      </div>
      )
  }
}

export default App
