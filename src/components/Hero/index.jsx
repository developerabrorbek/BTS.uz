import { Link } from "react-router-dom";
import HeroImage from "../../assets/hero-example.png";
import { useGetCategoriesQuery } from "../../redux/API";
const Hero = () => {
  const { data: categories } = useGetCategoriesQuery();
  return (
    <section className="hero mt-6 mb-[35px] lg:mb-11  relative">
      <div className="container mx-auto px-6 flex justify-between max-w-[1340px]">
        <div className="categories bg-white rounded-md shadow-xl w-[300px] ">
          <h2 className="title text-lg p-3 border-b border-b-[#ccc]">
            Categories
          </h2>
          <ul className="categoryes flex flex-col gap-2 py-3">
            {categories?.length &&
              categories.map((category, index) => {
                return (
                  <li key={index} className="hover:shadow-2xl cursor-pointer py-2 px-6">
                    <Link to={`/products/${category}`}>{category}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="banner">
          <div className="hero__inner rounded-2xl  w-[900px] h-[300px] bg-[url('https://picsum.photos/id/432/900/300')] bg-center  sm:px-8 pb-0 sm:py-5 lg:py-0 text-white shadow flex justify-between lg:justify-center lg:gap-x-16 items-center">
            {/* <h1 className="hero-title font-semibold text-[20px] sm:text-[24px] leading-6 sm:leading-8 w-2/3 md:w-1/2 lg:w-1/3 lg:text-center">
              Shopping products
            </h1>
            <a href="#">
              <img
                src=""
                alt="Image"
                className="sm:w-[300px] sm:scale-125"
              />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
