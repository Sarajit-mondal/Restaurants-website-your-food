import Title from "../../../title/Title";
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "../../../../assets/home/slide1.jpg";
import slide2 from "../../../../assets/home/slide2.jpg";
import slide3 from "../../../../assets/home/slide3.jpg";
import slide4 from "../../../../assets/home/slide4.jpg";
import slide5 from "../../../../assets/home/slide5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

function OrderOnline() {
  return (
    <div className="mb-10">
      <Title
        heading={"ORDER ONLINE"}
        subheading={"---From 11:00am to 10:00pm---"}
      ></Title>

      <Swiper
        slidesPerView={window.innerWidth < 600 ? 2 : 4}
        spaceBetween={40}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-white text-center -mt-16">SALADS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="text-white text-center -mt-16">SOUPS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="text-white text-center -mt-16">PIZZAS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="text-white text-center -mt-16"></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="text-white text-center -mt-16">VAGTABLE</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default OrderOnline;
