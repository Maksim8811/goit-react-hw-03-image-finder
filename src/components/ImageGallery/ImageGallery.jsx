import axios from "axios"
import React, {Component} from "react"



class ImageGallery extends Component {

    state={
        search: null,
    }
    
     componentDidUpdate (prevProps, prevState) {
        if(prevProps !== this.props.searchName) {
          axios.get(`https://pixabay.com/api/?key=31290162-40f32dd3366e200868c1207df&q=${this.props.searchName}&image_type=photo&per_page=3`)
          .then(res => this.setState({search: res.data.hits}))
          .catch(() => {console.log('ERROR')})
       }
        }

    render() {
    return (
        <div>
            {this.state.search &&  <ul className="image"></ul>}
        </div>
       
    )
}}

export default ImageGallery