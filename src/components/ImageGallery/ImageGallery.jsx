import axios from "axios"
import React, {Component} from "react"
import "./ImageGallery.css"
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"


class ImageGallery extends Component {

    state={
        search: null,
    }

    // masObj = () => {
    // this.props.state.search
    // }
    
     componentDidUpdate (prevProps, prevState) {
        if(prevProps !== this.props.searchName) {
          axios.get(`https://pixabay.com/api/?key=31290162-40f32dd3366e200868c1207df&q=${this.props.searchName}&image_type=photo&per_page=3`)
          .then(res => this.setState({search: res.data.hits})
          )
          .catch(() => {console.log('ERROR')})
       }
       
    }
            

    render() {
        const {search} = this.state
    return (
        <div>
            {search &&  <ul className="ImageGallery">
                {search.map (image =>{
                    return(
                        <ImageGalleryItem
                        key={image.id}
                        image={image}
                        />
                    //     <li key={image.id}>
                    //     <img 
                    //     src={image.webformatURL} 
                    //     alt={image.tags} />  
                    //     <h2>{image.id}</h2>  
                    // </li>
                    )
                })}
               
                </ul>}
        </div>
       
    )
}}

export default ImageGallery