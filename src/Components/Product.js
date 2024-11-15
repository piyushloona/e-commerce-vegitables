import React from 'react'
import ProductImg from '../Assets/images/product-2-2.jpg'
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


const Product = () => {
  return (
    <div className='product'>
        <div className='image-product'>
            <img src={ProductImg}/>
            <div className='wishlist-icon'>
                <FavoriteBorderOutlinedIcon className='heart-icon'/>
                <CompareArrowsOutlinedIcon  className='compare-icon'/>
                <RemoveRedEyeOutlinedIcon className='remove'/>
            </div>
        </div>
        <p className='snack'>Snack</p>
        <h5 className='seeds'>Seeds of Change Organic <br/>  Quinoa ,Brown, & Red Rice</h5>

        <div className='star d-flex align-items-center'>
            <div>
            <StarPurple500OutlinedIcon/>
            <StarPurple500OutlinedIcon/>
            <StarPurple500OutlinedIcon/>
            <StarPurple500OutlinedIcon/>
            <StarHalfOutlinedIcon/>
            </div>
            
            
            <p>(4.0)</p>
        </div>

        <p className='nest'>By <span>NestFood</span></p>
        <div className='price d-flex justify-content-between align-items-center'>
            <div className='dollar d-flex align-items-center'>
                <h6>$28.85 </h6>
                <p>$32.8</p>
            </div>

            <button  className='add-btn'><ShoppingCartOutlinedIcon/>Add</button>
        </div>
    </div>
  )
}

export default Product