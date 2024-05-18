import Title from "../../../title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

function TextiMonials() {
  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    axios.get("reviews.json").then((res) => setreviews(res.data));
  }, []);
  console.log(reviews);
  return (
    <div className="my-10">
      <Title
        subheading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      ></Title>
      {/* slider rating*/}
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper text-center"
        >
          {reviews &&
            reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <p> Rating : {review.rating} </p>
                <span className="text-6xl font-bold">qute</span>
                <p className=" p-5 md:w-2/4 mx-auto">{review.details}</p>
                <h3 className="font-bold text-2xl text-gold-500">
                  {review.name}
                </h3>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TextiMonials;
