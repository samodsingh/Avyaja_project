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
import { Pagination, Navigation } from "swiper";

export default function CardSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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
