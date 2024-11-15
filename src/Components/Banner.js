import React from 'react'
import Container from 'react-bootstrap/Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import iconplane from '../Assets/images/icon-plane.png'
import 'swiper/css/effect-fade';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';


const Banner = () => {
  return (
    <div className='banner-section'>
       <Container>
       <Swiper  spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper">
        <SwiperSlide>
            <div className='first-slide'>
                 <div className='upper-content'>
                    <h1>Fresh Vegetables <br/> Big discount</h1>
                    <p>Sign up for the daily newsletter</p>
                    <div className='input-field'>
                        <img src={iconplane}/>
                        <input type='text' placeholder='Enter Email'/>
                        <button>Suscribe</button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='first-slide second-slide'>
                 <div className='upper-content'>
                    <h1>Fresh Vegetables <br/> Big discount</h1>
                    <p>Sign up for the daily newsletter</p>
                    <div className='input-field'>
                         <input type='text' placeholder='Enter Email'/>
                        <button>Suscribe</button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
       </Container>
    </div>
  )
}

export default Banner