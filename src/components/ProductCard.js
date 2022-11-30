import React from 'react'

function Product(props) {
  return (
    <div className='text-center'>
        <div class="product-card">
            <header>
                 <img src={"https://lh5.googleusercontent.com/-VHdWIPazZwY/TYQdSpMyD1I/AAAAAAAAArI/o_z7MmAo5G8/s400/Screen%252Bshot%252B2010-09-01%252Bat%252B8.40.34%252BPM-1.png"} alt = "product img"/> 
                <h1>Bicycle</h1>
                <h2>Enjoy life</h2>
            </header>
            <div class="product-bio">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ligula vitae lorem tempus maximus.</p>
                <button>Wishlist</button>
                <button class="cart" onClick={()=>props.addToCart({price:3000, name: "bicycle"})}>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product
 