import SiteLogo from "../../assets/logo.png";
import BasketImage from "../../assets/trash.svg";
// import MenuImage from "../../assets/burger.";
import FavoriteImage from "../../assets/favorite.svg";
import { useGetCategoriesQuery } from "../../redux/API.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
	function SelectChanger(e) {
		let value = e.target.value;
		if (value) navigate(`/products/${value}`);
	}

	const { basketCartTotal } = useSelector((res) => res.basket);
	const { favoriteCartTotal } = useSelector((res) => res.favorite);

	const { data: categories } = useGetCategoriesQuery();

	return (
		// <header className="lg:mb-5">
		//   <div className="container mx-auto px-6 max-w-[1110px]">
		//     <nav className="nav flex justify-between items-center  py-5">
		//       <a href="/" className="site-logo leading-loose text-3xl">BTService
		//         {/* <img src={SiteLogo} alt="site-logo" /> */}
		//       </a>
		//       <form action="#" className="hidden md:block">
		//         <select
		//         onChange={(e)=>SelectChanger(e)}
		//           name="category"
		//           id="categories"
		//           className="bg-gray-50 border select pe-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
		//         >
		//           <option value="0" hidden>
		//             Select products by category
		//           </option>
		//           {categories &&
		//             categories.map((category, index) => {
		//               return <option key={index}>{category}</option>;
		//             })}
		//         </select>
		//       </form>
		//       <div className="header-actions flex gap-x-12 items-center">
		//         <Link to="/selected" className="favorites-wrapper relative hidden md:block">
		//           <img src={FavoriteImage} alt="Favorites" />
		//           <div className=" absolute -top-3 -right-4 -z-10 bg-red-400 rounded-full flex items-center justify-center  w-6"><p className="text text-white">{favoriteCartTotal}</p></div>
		//         </Link>
		//         <Link to="/basket" className="basket-wrapper relative">
		//           <img src={BasketImage} alt="Basket" />
		//           <div className="amount  absolute -top-3 -right-4 -z-10 bg-[#FFA542] rounded-full flex items-center justify-center  w-6"><p className="text text-white ">{basketCartTotal}</p></div>
		//         </Link>
		//         <div className="menu md:hidden">
		//           <img src={MenuImage} alt="Burger image" />
		//         </div>
		//       </div>
		//     </nav>
		//   </div>
		// </header>
		<>
			<header className="header bg-white">
				<div className="container mx-auto px-5 max-w-[1340px]">
					<nav className="nav py-5 ">
						<div className="nav__inner border-b-2 border-b-slate-300 flex justify-between">
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
					<div className="header-main">
						<div className="header__inner flex gap-10 justify-between items-center mb-8 pb-5">
							<a href="/" className="site-logo leading-loose text-3xl hover:tracking-wide hover:text-[#12ff]">
								<img src={SiteLogo} alt="logo" className="logo" width={110} height={110}/>
							</a>
							<form action="#" className="flex items-center justify-center ">
								<input type="search" name="search" placeholder="Search..." className=" min-w-[500px] py-2 px-3 bg-[#9ca5a822] rounded-xl focus: border focus:border-none" />
							</form>
							<ul className="links flex gap-x-12 items-center">
								<Link to="/selected" className="favorites-wrapper relative hidden md:block">
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
