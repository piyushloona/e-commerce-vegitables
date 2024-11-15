import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ViewComfyAltIcon from '@mui/icons-material/ViewComfyAlt';
import { Link } from 'react-router-dom';
import headphone from '../../../src/Assets/images/icon-headphone.svg'


const Nav_Down = () => {
  return (
    <div className='nav-down'>
        <Row className='align-items-center'>
            <Col xl={3}>
                <div className='first-col-nav'>
                    <Button className='bg-success border-0'> <ViewComfyAltIcon/> Browse All Categories <KeyboardArrowDownIcon/> </Button>
                </div>
            </Col>
            <Col xl={6}>
                <div className='second-col-nav'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="#">Shop</Link></li>
                        <li><Link to="#">Vendors</Link></li>
                        <li><Link to="#">Mega Menu</Link></li>
                        <li><Link to="#">Blog</Link></li>
                        <li><Link to="/listing">Listing</Link></li>
                        
                        <li>
                            <Link to="#">Pages <KeyboardArrowDownIcon/> </Link>
                            
                            <div className='dropdown-menu-page'>
                                <ul>
                                    <li><Link to="#">About us</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                    <li><Link to="#">My Account</Link></li>
                                    <li><Link to="#">Login</Link></li>
                                    <li><Link to="#">Register</Link></li>
                                    <li><Link to="#">Forget Password</Link></li>
                                    <li><Link to="#">Reset Password</Link></li>
                                    <li><Link to="#">Purchase Guide</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="#">Terms of Services</Link></li>
                                    <li><Link to="#"> 404 Page</Link></li>



                                  
                                </ul>
                            </div>
                        </li>

                        <li><Link to="#">Contact</Link></li>



                    </ul>
                </div>
            </Col>
            <Col xl={3}>
                <div className='third-col-nav d-flex align-items-center justify-content-end'>
                    <img src={headphone}/>
                    <div>
                        <h3 className='mb-0'>1900 - 888</h3>
                        <p className='mb-0'>24/7 Support Center</p>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Nav_Down