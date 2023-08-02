import { ProductCard, SingleCard } from "../../components/Cards";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Loading from "../../components/Loading";
import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from "../../redux/API";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper";
import Error from "../Error";
import Footer from "../../components/Footer";
import Intro from "../../components/Intro";
import SmallBanners from "../../components/SmallBanners";

const Home = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  // const { data: womenClothing } = useGetProductsByCategoryQuery(2);
  // const { data: menClothing } = useGetProductsByCategoryQuery(1);
  console.log(products);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <>
      <Header />
      <Hero />
      <Intro />

      <SmallBanners />

      <section className="all-products mt-4">
        <div className="container mx-auto  px-6 max-w-[1340px]">
          <h2 className="text-[24px] font-semibold leading-6 text-[#838383] mb-5">
            All products
          </h2>
          <Swiper
            className="cards grid items-center justify-between w-full grid-cols-5"
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            slidesPerView="auto"
            spaceBetween={30}
          >
            {products.body &&
              products.body.map((product) => {
                return (
                  <SwiperSlide key={product.id} className="ms-0 w-[260px]">
                    <ProductCard product={product} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>

      {/* <section className="women-products mt-6">
        <div className="container mx-auto px-6 max-w-[1340px]">
          <h2 className="text-[24px] font-semibold leading-6 text-[#838383] mb-5">
            Women&apos;s clothing
          </h2>
          <Swiper
            className="cards flex items-center w-full"
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            slidesPerView="auto"
            spaceBetween={20}
          >
            {womenClothing &&
              womenClothing.map((product) => {
                return (
                  <SwiperSlide key={product.id} className="w-[260px]">
                    <ProductCard product={product} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section> */}

      {/* <section className="women-products mt-6">
        <div className="container mx-auto px-6 max-w-[1340px]">
          <h2 className="text-[24px] font-semibold leading-6 text-[#838383] mb-5">
            Men&apos;s clothing
          </h2>
          <Swiper
            className="cards flex items-center w-full"
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            slidesPerView="auto"
            spaceBetween={20}
          >
            {menClothing &&
              menClothing.map((product) => {
                return (
                  <SwiperSlide key={product.id} className="w-[260px]">
                    <ProductCard product={product} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default Home;
