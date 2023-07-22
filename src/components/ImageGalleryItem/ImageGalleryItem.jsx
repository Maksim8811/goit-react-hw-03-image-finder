import React from "react";

 const ImageGalleryItem = ({image}) => {

        return (
    
                    <li>
                        <img 
                        src={image.webformatURL} 
                        alt={image.tags} />  
                        <h2>{image.id}</h2>  
                    </li>
                    
        
            
        )
    }

export default ImageGalleryItem