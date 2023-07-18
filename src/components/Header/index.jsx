import * as React from "react";
import BasketImage from "../../assets/trash.svg";
import MenuImage from "../../assets/burger.svg";
import FavoriteImage from "../../assets/favorite.svg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../../redux/API";
import "./main.css";
import Logo from "../../assets/logo.png";
import BurgerOffCanvas from "../Offcanvas";

const Header = () => {
  const { data: categories } = useGetCategoriesQuery();
  const { basketCartTotal } = useSelector((res) => res.basket);
  const { favoriteCartTotal } = useSelector((res) => res.favorite);

  const [sticky, setSticky] = React.useState("");

  React.useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
  };

  const classes = `header-section mb-4 bg-white mx-auto d-none d-xl-block ${sticky}`;

  return (
    <>
      <section className="header-top w-full flex justify-center bg-[#8f3985] border-b-2">
        <div className="max-w-[1400px] w-full py-2 px-3">
          <div className="header-top__inner w-full border-b-slate-300 flex items-center justify-between">
            <div className="left-actions">
              <form action="#" className=" flex gap-x-6">
                <select
                  id="countries"
                  className="bg-[#8f3985] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-0 "
                >
                  <option selected>Uzb</option>
                  <option value="US">Rus</option>
                  <option value="CA">Eng</option>
                </select>

                <select
                  id="countries"
                  className="bg-[#8f3985] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-0 "
                >
                  <option selected>Uzs</option>
                  <option value="US">Usd</option>
                </select>
              </form>
            </div>
            <div className="right-links md:flex gap-x-6 hidden">
              <Link
                to="/login"
                className="login text-[#fff] hover:text-green-500 "
              >
                Tizimga kirish
              </Link>
              <Link
                to="/register"
                className="signup text-[#fff] hover:text-green-500"
              >
                Ro&apos;yhatdan o&apos;tish
              </Link>
            </div>
          </div>
        </div>
      </section>
      <header className={classes}>
        <div className="container mx-auto max-w-[1400px] px-5">
          <div className="header py-2">
            <div className="header__inner flex gap-10 justify-between items-center">
              <Link to="/" className="site-logo leading-loose text-3xl">
                <img src={Logo} alt="" className="" width={110} />
              </Link>
              <div className="burger md:hidden">
                <BurgerOffCanvas />
              </div>
              <form className="w-3/5 hidden md:block">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only "
                >
                  Search
                </label>
                <div className="relative">
                  <button className="absolute inset-y-0 right-0 flex items-center rounded-r overflow-hidden px-3 bg-green-500 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full focus:outline-none px-4 py-3 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Search anything"
                    required
                  />
                </div>
              </form>
              <ul className="links md:flex gap-x-12 items-center hidden">
                <Link
                  to="/selected"
                  className="favorites-wrapper relative hidden md:block"
                >
                  <img src={FavoriteImage} alt="Favorites" />
                  <div className=" absolute -top-3 -right-4 z-10 bg-red-400 rounded-full flex items-center justify-center  w-6">
                    <p className="text text-white">{favoriteCartTotal}</p>
                  </div>
                </Link>
                <Link to="/basket" className="basket-wrapper relative">
                  <img src={BasketImage} alt="Basket" />
                  <div className="amount  absolute -top-3 -right-4 z-10 bg-[#FFA542] rounded-full flex items-center justify-center  w-6">
                    <p className="text text-white ">{basketCartTotal}</p>
                  </div>
                </Link>
                <Link to="/profile" className="flex flex-col items-center">
                  <AccountCircleOutlinedIcon
                    fontSize="large"
                    color="secondary"
                  />
                  <p className="text-[#6c6969]">Profile</p>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <nav className="nav py-2 border-t hidden md:flex justify-center">
          <ul className="nav-list flex gap-x-6 items-center">
            {categories?.length &&
              categories.map((category, index) => {
                return (
                  <li className="nav-list__item" key={index}>
                    <Link
                      to={`/products/${category}`}
                      className="nav-list__item--link"
                    >
                      <p className="capitalize font-sans text-[#888787] ">
                        {category}
                      </p>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
