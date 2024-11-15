import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import productimg from '../Assets/images/product-2-2.jpg'
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import CartIncrement from './CartIncrement';


const Cart = () => {
    return (
        <div className='cart-div'>
            <Container>
                <Row>
                    <Col xl={8}>
                        <div className='d-flex align-items-end justify-content-between bread-div'>
                            <ul>
                                <div  >
                                    <li><a href="/listing">Home</a></li>
                                    <li><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  css-20bmp1-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIosOutlinedIcon"><path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path></svg></li><li>Shop</li><li><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  css-20bmp1-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIosOutlinedIcon"><path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path></svg></li>
                                    <li>Cart</li>
                                </div>
                                <h3>There are <span>3</span> products in your cart</h3>

                            </ul>
                            <Link to="#"><DeleteOutlinedIcon />Clear Cart</Link>
                        </div>

                        <div className='table-responsive'>
                            <table className='w-100'>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Unit Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                        <th>Remove</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                        <div className='d-flex align-items-center img-div'>
                                            <div className='prod-img'>
                                                <img src={productimg} />
                                            </div>
                                            <div className='description'>
                                                <Link to="">
                                                    Field Roast Chao Cheese Creamy Original</Link>
                                                <div className='star d-flex align-items-center'>
                                                    <div>
                                                        <StarPurple500OutlinedIcon />
                                                        <StarPurple500OutlinedIcon />
                                                        <StarPurple500OutlinedIcon />
                                                        <StarPurple500OutlinedIcon />
                                                        <StarHalfOutlinedIcon />
                                                    </div>


                                                    <p>(4.0)</p>
                                                </div>
                                            </div>
                                        </div>
                                        </td>
                                        <td>
                                            <h3 className='unit-price'>$2.51</h3>
                                        </td>
                                        <td>
                                            <CartIncrement/>
                                        </td>
                                        <td>
                                            <h3 className='sub-total'>	$2.51</h3>
                                        </td>
                                        <td>
                                            <DeleteOutlinedIcon className='delete-icon'/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className='d-flex align-items-center img-div'>
                                            <div className='prod-img'>
                                                <img src={productimg} />
                                            </div>
                                            <div className='description'>
                                                <Link to="">
                                                    Field Roast Chao Cheese Creamy Original</Link>
                                                <div className='star d-flex align-items-center'>
                                                    <div>
                                                        <StarPurple500OutlinedIcon />
                                                        <StarPurple500OutlinedIcon />
                                                        <StarPurple500OutlinedIcon />
                                                        <StarPurple500OutlinedIcon />
                                                        <StarHalfOutlinedIcon />
                                                    </div>


                                                    <p>(4.0)</p>
                                                </div>
                                            </div>
                                        </div>
                                        </td>
                                        <td>
                                            <h3 className='unit-price'>$2.51</h3>
                                        </td>
                                        <td>
                                            <CartIncrement/>
                                        </td>
                                        <td>
                                            <h3 className='sub-total'>	$2.51</h3>
                                        </td>
                                        <td>
                                            <DeleteOutlinedIcon className='delete-icon'/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <div className='d-flex align-items-center img-div'>
                                            <div className='prod-img'>
                                                <img src={productimg} />
                                            </div>
                                            <div className='description'>
                                                <Link to="">
                                                    Field Roast Chao Cheese Creamy Original</Link>
                                                <div className='star d-flex align-items-center'>
                                                    <div>
                                                        <StarPurple500OutlinedIcon />
                                                        <StarPurple500OutlinedIcon />
                                                        <StarPurple500OutlinedIcon />
                                                        <StarPurple500OutlinedIcon />
                                                        <StarHalfOutlinedIcon />
                                                    </div>


                                                    <p>(4.0)</p>
                                                </div>
                                            </div>
                                        </div>
                                        </td>
                                        <td>
                                            <h3 className='unit-price'>$2.51</h3>
                                        </td>
                                        <td>
                                            <CartIncrement/>
                                        </td>
                                        <td>
                                            <h3 className='sub-total'>	$2.51</h3>
                                        </td>
                                        <td>
                                            <DeleteOutlinedIcon className='delete-icon'/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>

                    <Col xl={4}>
                        <div className='total-bill'>
                            <div className='d-flex align-items-end justify-content-between'>
                                <h6>Subtotal</h6>
                                <h4>$12.31</h4>
                            </div>
                            <div className='d-flex align-items-end justify-content-between'>
                                <h6>Shipping</h6>
                                <h4>Free</h4>
                            </div>
                            <div className='d-flex align-items-end justify-content-between'>
                                <h6>Estimate for</h6>
                                <h4>United Kingdom
                                </h4>
                            </div>
                            <div className='d-flex align-items-end justify-content-between'>
                                <h6>Total</h6>
                                <h4>$12.31
                                </h4>
                            </div>
                            <button>Proceed To Checkout</button>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cart