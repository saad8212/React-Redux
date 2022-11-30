import React from 'react'
import '../styles/product_card.css'
import Product from './ProductCard'

function Home(props) {
     
  return (
    <>
        <div className='carts mt-2'><h1><i className='fa fa-shopping-cart'></i></h1></div>
        <div className='home'>
            <i className='fa fa-cart'></i>
            <div className="container">
                <div className='row'>
                    <div className ="col-4">
                        <Product addToCart = {props.addToCart}/>
                    </div>
                </div>
            </div>
             
        </div>
    </>
  )
}

export default Home
 