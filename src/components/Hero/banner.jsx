import Banner from "../../assets/login-bg.jpg";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroBanner = () => {
  return (
    <>
      <div className="banner">
        <div className="hero__inner ">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper w-full lg:ml-4 md:h-[400px] lg:w-[940px] rounded-xl overflow-hidden"
          >
            {[1, 2, 3, 4].map((item) => {
              return (
                <>
                  <SwiperSlide key={item}>
                    <img
                      src={Banner}
                      alt="banner"
                      className="rounded-xl overflow-hidden"
                    />
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
