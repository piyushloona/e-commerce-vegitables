import React from 'react'
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import thumbnail from '../Assets/images/thumbnail-1.jpg'
const SellingProduct = (props) => {
    return (
        <div className='sale-product'>
            <h2 className='sale-title'>{props.title}</h2>
            <br/>          

            <div className='top-selling d-flex '>
                <img src={thumbnail } />
                <div className='description'>
                    <h5 className='seeds'>Seeds of Change Organic <br />  Quinoa ,Brown, & Red Rice</h5>

                    <div className='star d-flex'>
                        <div>
                            <StarPurple500OutlinedIcon  />
                            <StarPurple500OutlinedIcon />
                            <StarPurple500OutlinedIcon />
                            <StarPurple500OutlinedIcon />
                            <StarHalfOutlinedIcon />
                        </div>


                        <p>(4.0)</p>
                    </div>

                     <div className='price d-flex justify-content-between align-items-center'>
                        <div className='dollar d-flex align-items-center'>
                            <h6>$28.85 </h6>
                            <p>$32.8</p>
                        </div>

                     </div>
                </div>
            </div>
        </div>
    )
}

export default SellingProduct