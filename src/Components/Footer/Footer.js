import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import icon1 from '../../Assets/images/icon-1.svg'
import logo from '../../Assets/images/logo.svg'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <div className='best-price'>
          <div className='delivery d-flex'>
            <img src={icon1}/>
            <div className='price-heading'>
              <h4>Best prices & offers</h4>
              <p>Orders $50 or more</p>
            </div>
          </div>
          <div className='delivery d-flex'>
            <img src={icon1}/>
            <div className='price-heading'>
              <h4>Best prices & offers</h4>
              <p>Orders $50 or more</p>
            </div>
          </div>
          <div className='delivery d-flex'>
            <img src={icon1}/>
            <div className='price-heading'>
              <h4>Best prices & offers</h4>
              <p>Orders $50 or more</p>
            </div>
          </div>
          <div className='delivery d-flex'>
            <img src={icon1}/>
            <div className='price-heading'>
              <h4>Best prices & offers</h4>
              <p>Orders $50 or more</p>
            </div>
          </div>
          <div className='delivery d-flex'>
            <img src={icon1}/>
            <div className='price-heading'>
              <h4>Best prices & offers</h4>
              <p>Orders $50 or more</p>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div className='down-footer'>
          <Row>
            <Col xl={3}>
              <div className='address-footer'>
                <img src={logo}/>

                <p className='awesome'>Awesome grocery store website template</p>
                <div className='location'>

                  <p><LocationOnOutlinedIcon/><strong>Address : </strong>5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                  <p><HeadphonesOutlinedIcon/><strong>Call Us : </strong>(+91) - 540-025-124553</p>
                  <p><SendOutlinedIcon className='email'/><strong>Email : </strong>sale@Nest.com</p>
                  <p><WatchLaterOutlinedIcon/><strong>Hours : </strong>10:00 - 18:00, Mon - Sat</p>

                </div>
              </div>
            </Col>
            <Col xl={9}>
            <Row>
              <Col xl={3}>
              <div className='list-items'>
                <ul>
                  <h2>Company</h2>
                  <li><Link to="#">About us</Link></li>
                  <li><Link to="#">Delivery Information</Link></li>
                  <li><Link to="#">Privacy Policy</Link></li>
                  <li><Link to="#">Terms & Conditions</Link></li>
                  <li><Link to="#">Contact us</Link></li>
                  <li><Link to="#">Support Center</Link></li>
                  <li><Link to="#">Careers</Link></li>
                  
                  
                </ul>
              </div>  
              </Col>
              <Col xl={3}>
              <div className='list-items'>
                <ul>
                  <h2>Account</h2>
                  <li><Link to="#">About us</Link></li>
                  <li><Link to="#">Delivery Information</Link></li>
                  <li><Link to="#">Privacy Policy</Link></li>
                  <li><Link to="#">Terms & Conditions</Link></li>
                  <li><Link to="#">Contact us</Link></li>
                  <li><Link to="#">Support Center</Link></li>
                  <li><Link to="#">Careers</Link></li>
                  
                  
                </ul>
              </div>  
              </Col>
              <Col xl={3}>
              <div className='list-items'>
                <ul>
                  <h2>Corporate</h2>
                  <li><Link to="#">About us</Link></li>
                  <li><Link to="#">Delivery Information</Link></li>
                  <li><Link to="#">Privacy Policy</Link></li>
                  <li><Link to="#">Terms & Conditions</Link></li>
                  <li><Link to="#">Contact us</Link></li>
                  <li><Link to="#">Support Center</Link></li>
                  <li><Link to="#">Careers</Link></li>
                  
                  
                </ul>
              </div>  
              </Col>
              <Col xl={3}>
              <div className='list-items'>
                <ul>
                  <h2>Popular</h2>
                  <li><Link to="#">About us</Link></li>
                  <li><Link to="#">Delivery Information</Link></li>
                  <li><Link to="#">Privacy Policy</Link></li>
                  <li><Link to="#">Terms & Conditions</Link></li>
                  <li><Link to="#">Contact us</Link></li>
                  <li><Link to="#">Support Center</Link></li>
                  <li><Link to="#">Careers</Link></li>
                  
                  
                </ul>
              </div>  
              </Col>


            </Row>
              
            </Col>
            <Col xl={3}>
            
            </Col>
          </Row>
        </div>


        <br/>
      </Container>
    </div>
  )
}

export default Footer