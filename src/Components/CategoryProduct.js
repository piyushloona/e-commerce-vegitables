import React from 'react'
import peach from '../Assets/images/cat-11.png'
const CategoryProduct = ( {style }) => {

  return (
    <div className='c-product' style={style}>
        <img src={peach}/>
        <h5>Peach</h5>
        <p>14 Items</p>
    </div>
  )
}

export default CategoryProduct