import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../redux/API";
import { useEffect, useState } from "react";
import HeroBanner from "./banner";

import axios from "../../configs/axios.config";
import Toaster from "../Toaster";

const getCategory = async (id, setCategory) => {
  axios
    .get(`category/get/all-tree`)
    .then((data) => {
      const foundedCategory = data.data.body.find((e) => e.id == id);
      setCategory(foundedCategory);
    })
    .catch((err) => Toaster.notify(404, err.message));
};

const Categories = (props) => {
  const [category, setCategory] = useState(null);
  const id = props.id;
  useEffect(() => {
    getCategory(id, setCategory);
  }, []);

  console.log(category);
  return (
    <>
      <div className="category-wrapper relative z-50 bg-white rounded-xl overflow-hidden grid grid-cols-3 gap-x-11 p-8">
        {category?.children &&
          category.children.map((c) => {
            return (
              <>
                <div className="category-first inline-block ">
                  <h2 className="font-semibold text-[18px] p-1 text-[#333] border-b">
                    {c.name}
                  </h2>
                  <ul className="list-items flex flex-col gap-y-2 mt-2 transition-all delay-500">
                    {c?.children.length ? (
                      c.children.map((child) => {
                        return (
                          <li className="list-item hover:underline">
                            <Link to={`/service-ordering/${child.id}`}>
                              {child.name}
                            </Link>
                          </li>
                        );
                      })
                    ) : (
                      <>
                        <li className="list-item hover:underline">
                          <Link to={`/service-ordering/${c.id}`}>{c.name}</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

const Hero = () => {
  const { data: categories } = useGetCategoriesQuery();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  const handleAside = (e, id) => {
    setId(id);
    setOpen(true);
  };

  return (
    <section className="hero mt-6 mb-[35px] lg:mb-11  relative">
      <div className="container relative mx-auto px-6 flex justify-center lg:justify-between max-w-[1340px]">
        <div className="categories hidden lg:block  bg-white rounded-md shadow-xl self-start w-[300px]">
          <h2 className="title text-lg p-3 border-b border-b-[#ccc]">
            Categories
          </h2>
          <ul className="categories flex flex-col gap-2 py-3">
            {categories?.body?.length &&
              categories.body
                .filter((c) => c.type == "SERVICE_CATEGORY")
                .map((category, index) => {
                  return (
                    <li
                      key={category.id}
                      onMouseOver={(e) => handleAside(e, category.id)}
                      onMouseLeave={() => setOpen(false)}
                      className="category transition-all hover:shadow-custom cursor-pointer py-2 px-6"
                    >
                      <p>{category.name}</p>
                    </li>
                  );
                })}
          </ul>
        </div>
        {open ? (
          <div
            onMouseOver={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="list-aside absolute right-0 w-[75.8%] h-[100%] bg-white z-50 rounded-xl  overflow-hidden rounded-tl-none"
          >
            <Categories id={id} />
          </div>
        ) : (
          ""
        )}
        <div className="hero-banner w-full lg:ml-4  lg:w-[940px] rounded-xl overflow-hidden">
          <HeroBanner />
        </div>
      </div>
    </section>
  );
};

export default Hero;
