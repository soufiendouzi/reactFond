import React from 'react'
import product from "./product"

import "../App.css"
const ImageUrl = () => {
  return (
    <div>
     <img  className="imgg"  src= {product.imageUrl} alt= " estanna chwy  " />
    </div>
  )
}

export default ImageUrl
