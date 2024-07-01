import React from 'react'
import  LoaderImage from '../../images/loader.svg'
import "./loader.css"

 const Loader = ( ) => {
  return (

<div className='loader flex flex-c'> 
    <img src={LoaderImage} alt="Loading" />
</div>

  )
} 
export default Loader