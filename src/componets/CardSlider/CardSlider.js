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
import {useState} from "react";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper"; 
export default function CardSlider() {
  const [size, setsize] = useState (5);
  const resizefun = () =>{
    if(window.innerWidth > 700 ){
      setsize(5);
    }
    else{
      setsize(1);
    }
  }
 window.addEventListener("resize",resizefun)
  return (
    <>    
               <h1 className="blog-title">Our Latest Blog Posts</h1>

      <Swiper
        slidesPerView={size}
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
