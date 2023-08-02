import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper";
import { Link } from "react-router-dom";
import Phone from "../../assets/phone.jpg";
import { useGetCategoriesQuery } from "../../redux/API";
const Intro = () => {
  const { data: categories } = useGetCategoriesQuery();

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
        <div className="container mx-auto  flex justify-between overflow-hidden  max-w-[1340px] ">
          <div className="xizmatlar  relative w-full px-6">
            <Swiper
              className="cards flex items-center  py-2 pl-0 px-8 w-full overflow-hidden"
              modules={[Autoplay]}
              autoplay={{ delay: 2000 }}
              slidesPerView="auto"
              spaceBetween={30}
            >
              {categories.body &&
                categories.body
                  .filter((e) => e.type == "PRODUCT_CATEGORY")
                  .map((category) => {
                    return (
                      <SwiperSlide
                        key={category.id}
                        className="w-[200px] md:w-[256px] mr-6"
                      >
                        <Link
                          // to={`/products/${category.id}`}
                          className="flex items-center gap-x-7 py-4 px-2 md:py-3 shadow-xl bg-white rounded-2xl"
                        >
                          <img
                            src={category.attach.url}
                            alt="Image"
                            className="w-14 md:w-20 h-14"
                          />
                          <h4 className="capitalize">{category.name}</h4>
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
