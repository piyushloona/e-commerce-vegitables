import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../Assets/images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Badge from 'react-bootstrap/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Select from '../Select';
import { Link } from 'react-router-dom';
import Nav_Down from './Nav_Down';

 
const Header = () => {
    const optionsArray = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
    const location = ['India', 'Australia', 'NewZealand', 'UK', 'Canada'];


    return (

        <>
            <div>
                <Container>
                <Navbar expand="lg" className="">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img src={Logo} alt="Logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                              <div className='selector-div'>
                                <Select options={optionsArray}/>
                                <div className='input-icon'>
                                <input type='text' placeholder='Search Categories'/>
                                <SearchIcon/>
                                </div>
                              </div>
                            </Nav>
                            <div className='links'>
                                <ul>
                                <Select options={location}/>

                                    <li>
                                        <Link  to='#'>
                                        <RestartAltIcon className='refersh-icon'/>
                                        <Badge bg="success" className='rounded-circle badge-show'>3</Badge>
                                        <span>Compare</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link  to='#'>
                                        <FavoriteBorderIcon className='refersh-icon'/>
                                        <Badge bg="success" className='rounded-circle badge-show'>3</Badge>
                                        <span>Wishlist</span>
                                        </Link>
                                    </li>
                                    <li>
                                    <Link  to='/cart'>
                                        <ShoppingCartIcon className='refersh-icon'/>
                                        <Badge bg="success" className='rounded-circle badge-show'>3</Badge>
                                        <span>Cart</span>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                          
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Nav_Down/>
                </Container>
            </div>
        </>
    )
}

export default Header