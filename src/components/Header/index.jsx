import BasketImage from "../../assets/trash.svg";
import MenuImage from "../../assets/burger.svg";
import FavoriteImage from "../../assets/favorite.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { basketCartTotal } = useSelector((res) => res.basket);
  const { favoriteCartTotal } = useSelector((res) => res.favorite);

  return (
    <>
      <section className="top-header border-b-2 bg-white mx-auto">
        <nav className="nav p-3">
          <div className="nav__inner   border-b-slate-300 flex justify-between">
            <div className="left ">
              <form action="#" className=" flex gap-6">
                <select name="language" id="lang">
                  <option value="uz">Uz</option>
                  <option value="eng">Eng</option>
                  <option value="ru">Ru</option>
                </select>

                <select name="language" id="money">
                  <option value="uz">UZS</option>
                  <option value="us">USD</option>
                  <option value="ru">RBL</option>
                </select>
              </form>
            </div>
            <div className="right flex gap-6">
              <a href="#" className="login hover:text-green-500 ">
                Tizimga kirish
              </a>
              <a href="#" className="signup hover:text-green-500">
                Ro'yhatdan o'tish
              </a>
            </div>
          </div>
        </nav>
      </section>
      <header className="header bg-white">
        <div className="container mx-auto px-5">
          <div className="header py-1">
            <div className="header__inner flex gap-10 justify-between items-center mb-2">
              <Link to="/" className="site-logo leading-loose text-3xl">
                BTService
              </Link>
              <form className="w-1/3">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only "
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 "
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
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full focus:outline-none p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                  >
                    Search
                  </button>
                </div>
              </form>

              <ul className="links flex gap-x-12 items-center">
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
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
