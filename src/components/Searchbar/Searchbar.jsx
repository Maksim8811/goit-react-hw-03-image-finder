import React, {Component} from "react";
import "./Searchbar.css"
import  {toast}  from 'react-toastify';


class Searchbar extends Component {

    state = {
        searchForm: "",
    }

    handleChange = evt => {
        this.setState({searchForm: evt.currentTarget.value.toLowerCase()})
    }

    handleSubmit = evt => {
        evt.preventDefault()
        if(this.state.searchForm.trim() === "") {
            toast.error("Enter your search!")
            return
        }
        this.props.onSubmit(this.state.searchForm)
    }

    render() {
        return(
            <div className="Searchbar">
            <header className="searchbar">
            <form onSubmit={this.handleSubmit} className="form">
            <button type="submit" className="button">
            <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
    />
  </form>
</header>
</div>
        )
        
    }
}

export default Searchbar