import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../redux/API";
import { useRef } from "react";

const Categories = (props) => {
  return (
    <>
      <div className="category-wrapper rounded-2xl grid grid-cols-2">
        <div className="category-first">
          <h2 className="font-semibold text-[18px] text-[#333]">
            {props?.title || "Category title"}
          </h2>
          <ul className="list-items">
            <li className="list-item">
              <Link to="#">First product</Link>
            </li>
            <li className="list-item">
              <Link to="#">second product</Link>
            </li>
            <li className="list-item">
              <Link to="#">third product</Link>
            </li>
          </ul>
        </div>
        <div className="category-second">
          <h2 className="font-semibold text-[18px] text-[#333]">
            {props?.title || "Category title"}
          </h2>
          <ul className="list-items">
            <li className="list-item">
              <Link to="#">First product</Link>
            </li>
            <li className="list-item">
              <Link to="#">second product</Link>
            </li>
            <li className="list-item">
              <Link to="#">third product</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  const { data: categories } = useGetCategoriesQuery();
  const listAside = useRef(null);

  const handleAside = (e) => {
    const id = e.target.getAttribute("class");
    listAside.current.innerHtml = <Categories title={id} />;
  };

  return (
    <section className="hero mt-6 mb-[35px] lg:mb-11  relative">
      <div className="container relative mx-auto px-6 flex justify-between max-w-[1340px]">
        <div className="categories bg-white rounded-md shadow-xl w-[300px] ">
          <h2 className="title text-lg p-3 border-b border-b-[#ccc]">
            Categories
          </h2>
          <ul className="categoryes flex flex-col gap-2 py-3">
            {categories?.length &&
              categories.map((category, index) => {
                return (
                  <li
                    key={index}
                    onMouseOver={handleAside}
                    className="transition-all hover:shadow-custom cursor-pointer py-2 px-6"
                  >
                    <Link to={`/products/${category}`}>{category}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div
          className="list-aside absolute right-0 w-[75.7%] h-[100%] bg-white"
          ref={listAside}
        ></div>
        <div className="banner">
          <div className="hero__inner rounded-2xl  w-[900px] h-[300px] bg-[url('https://picsum.photos/id/439/900/300')] bg-center  sm:px-8 pb-0 sm:py-5 lg:py-0 text-white shadow flex justify-between lg:justify-center lg:gap-x-16 items-center"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
