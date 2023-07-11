import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import Phone from "../../assets/phone.jpg";
const Intro = () => {
  const products = [
    "phones",
    "computers",
    "tablet",
    "electronics",
    "books",
    "appliance",
    "sports",
  ];
  return (
    <>
      <section className="hero mt-6 mb-[35px] lg:mb-11  relative">
        <div className="container mx-auto  flex justify-between max-w-[1340px] ">
          <div className="xizmatlar  relative ">
            <Swiper
              className="cards flex items-center max-w-[1340px] py-2 ml-0 px-8"
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 2000 }}
              navigation
              slidesPerView="auto"
              spaceBetween={30}
            >
              {products &&
                products.map((product) => {
                  return (
                    <SwiperSlide key={product.id} className=" w-[256px] mr-6">
                      <Link
                        to={product}
                        className="flex items-center gap-x-7 px-2 py-3 shadow-xl bg-white rounded-2xl"
                      >
                        <img src={Phone} alt="Image" className="w-20" />
                        <h4 className="capitalize">{product}</h4>
                      </Link>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
