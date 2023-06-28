import React, {Component} from "react";
import "./Searchbar.css"

class Searchbar extends Component {

    Red = e => {
        e.preventDefault()
        console.log(e.target.value)
    }

    render() {
        return(
            <div className="Searchbar">
    <header class="searchbar">
            <form class="form" onSubmit={this.Red}>
            <button type="submit" class="button">
            <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
</div>
        )
        
    }
}

export default Searchbar