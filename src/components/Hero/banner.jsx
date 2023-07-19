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
        <div className="hero__inner relative">
          <div className="slider__next swiper-button"></div>
          <div className="slider__prev swiper-button"></div>
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
            navigation={{
              nextEl: ".slider__next",
              prevEl: ".slider__prev",
              disabledClass: "swiper-button-disabled",
            }}
            className="mySwiper w-full md:h-[400px]"
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
