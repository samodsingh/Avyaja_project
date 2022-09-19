import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Cardimg1 from "../../images/cardimg1.jpg";
import Cardimg2 from "../../images/cardimg2.jpg";
import Cardimg3 from "../../images/cardimg3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CardSlider.css";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";

export default function CardSlider() {
  return (
    <>
               <h1 className="blog-title">Our Latest Blog Posts</h1>

      <Swiper
        slidesPerView={window.innerWidth > 600 ? 4 : 1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay,Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper" id="blogs"
      >

        <SwiperSlide>
                <div className="card">
                    <img src={Cardimg1} alt="card images" />
                </div>                     
        </SwiperSlide>
        <SwiperSlide>
                <div className="card">
                    <img src={Cardimg2} alt="card images" />
                </div>                     
        </SwiperSlide>
        <SwiperSlide>
                <div className="card">
                    <img src={Cardimg1} alt="card images" />
                </div>                     
        </SwiperSlide>
        <SwiperSlide>
                <div className="card">
                    <img src={Cardimg3} alt="card images" />
                </div>                     
        </SwiperSlide>
        <SwiperSlide>
                <div className="card">
                    <img src={Cardimg1} alt="card images" />

                </div>                     
        </SwiperSlide>
        <SwiperSlide>
                <div className="card">
                    <img src={Cardimg2} alt="card images" />
                </div>                     
        </SwiperSlide>
        <SwiperSlide>
                <div className="card">
                    <img src={Cardimg1} alt="card images" />
                </div>                     
        </SwiperSlide>
        <SwiperSlide>
                <div className="card">
                    <img src={Cardimg3} alt="card images" />
                </div>                     
        </SwiperSlide>
         
    
    
      </Swiper>
    </>
  );
}
