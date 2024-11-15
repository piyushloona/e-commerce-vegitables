import React, { useState } from 'react'
import Banner from './Banner'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import iconplane from '../Assets/images/icon-plane.png'
import 'swiper/css/effect-fade';
import { Navigation, Autoplay} from 'swiper/modules';
import CategoryProduct from './CategoryProduct';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Onion from '../Assets/images/onion2.png'
import Onion3 from '../Assets/images/onion3.png'
import Onion4 from '../Assets/images/onion4.png'
import Product from './Product';
import SellingProduct from './SellingProduct';





const   Home = () => {

  const divStyle =  [
      '#edffec',
      '#fdf0ea',
      '#fff3eb',
      '#fff3ff',

    ];

    
  return (
    <div>
      <Banner />


      <Container>
        <div className='categories d-flex justify-content-between'>
          <h2>Featured Categories</h2>
          <ul>
            <li><Link to="#">Cake & Milk</Link></li>
            <li><Link to="#">Coffee & Teas</Link></li>
            <li><Link to="#">Pet Foods</Link></li>
            <li><Link to="#">Vegetables</Link></li>
          </ul>
        </div>

        <Swiper spaceBetween={30}
          effect={'fade'}
           slidesPerView={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper">
          <SwiperSlide>
            <CategoryProduct style={{ backgroundColor: divStyle[0] }} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProduct  style={{ backgroundColor: divStyle[1] }}/>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProduct  style={{ backgroundColor: divStyle[2] }}/>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProduct  style={{ backgroundColor: divStyle[3] }}/>
          </SwiperSlide>
         
          <SwiperSlide>
            <CategoryProduct style={{ backgroundColor: divStyle[0] }} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProduct  style={{ backgroundColor: divStyle[1] }}/>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProduct  style={{ backgroundColor: divStyle[2] }}/>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProduct  style={{ backgroundColor: divStyle[3] }}/>
          </SwiperSlide>
         
          <SwiperSlide>
            <CategoryProduct style={{ backgroundColor: divStyle[0] }} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProduct  style={{ backgroundColor: divStyle[1] }}/>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProduct  style={{ backgroundColor: divStyle[2] }}/>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryProduct  style={{ backgroundColor: divStyle[3] }}/>
          </SwiperSlide>
         
        </Swiper>
      </Container>

      <br/>


      <Container>
        <Row>
          <Col xl={4}>
            <div className='first-onion'>
              <img src={Onion}/>
            </div>
          </Col>
          <Col xl={4}>
            <div className='first-onion'>
              <img src={Onion3}/>
            </div>
          </Col> <Col xl={4}>
            <div className='first-onion'>
              <img src={Onion4}/>
            </div>
          </Col>
        </Row>
      </Container>

      <br/>   
      
      
      <Container>
        <div className='categories d-flex justify-content-between'>
          <h2>Popular Products</h2>
          <ul>
            <li><Link to="#">All</Link></li>
            <li><Link to="#">Milks & Dairies</Link></li>
            <li><Link to="#">Coffees & Teas</Link></li>
            <li><Link to="#">Vegetables</Link></li>
            <li><Link to="#">Pet Foods</Link></li>
            <li><Link to="#">Meats</Link></li>
            <li><Link to="#">Fruits</Link></li>

          </ul>
        </div>
        <br/>  
      

        <div className='product-section'>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>

        </div>

        <div className='product-section'>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>

        </div>

        </Container>
      



      <br/>


      <div className='Selling'>
          <Container>
            <Row>
              <Col xl={3}>
                <SellingProduct title={"Top Selling"}/>
              </Col>
              <Col xl={3}>
                <SellingProduct title={"Trending Products"}/>
              </Col>
              <Col xl={3}>
                <SellingProduct title={"Recently added"}/>
              </Col>
              <Col xl={3}>
                <SellingProduct title={"Top Rated"}/>
              </Col>
            </Row>
            
          </Container>

      </div>
      
      
      
         <br/>
      <br/>


    



    </div>
  )
}

export default Home