import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BasketImage from "../../assets/trash.svg";
// import MenuImage from "../../assets/burger.svg";
import FavoriteImage from "../../assets/favorite.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../../redux/API";
import "./main.css"
import Logo from "../../assets/logo.png";

const Header = () => {
	const { data: categories } = useGetCategoriesQuery();
	const { basketCartTotal } = useSelector((res) => res.basket);
	const { favoriteCartTotal } = useSelector((res) => res.favorite);

	const [sticky, setSticky] = React.useState("");

  React.useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

  const classes = `header-section mb-4 bg-white mx-auto d-none d-xl-block ${sticky}`;



	const [age, setAge] = React.useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<>
			<section className="header-top  bg-[#8f3985] border-b-2">
				<div className="container w-full py-2 px-3">
					<div className="nav__inner  border-b-slate-300 flex items-center justify-between">
						<div className="">
							<form action="#" className=" flex gap-6">
								<FormControl variant="standard" sx={{ mx: 1, minWidth: 50 }}>
									<Select
										labelId="demo-simple-select-standard-label"
										id="demo-simple-select-standard"
										value={age}
										onChange={handleChange}
										label="Age"
									>
										<MenuItem value={1}>Eng</MenuItem>
										<MenuItem value={2}>Uzb</MenuItem>
										<MenuItem value={3}>Ru</MenuItem>
									</Select>
								</FormControl>

								<FormControl  variant="standard" sx={{ mx: 1, minWidth: 50 }}>
									<Select
										labelId="demo-simple-select-standard-label"
										id="demo-simple-select-standard"
										value={age}
										onChange={handleChange}
										label="Currency"
									>
										<MenuItem  value={1}>Uzs</MenuItem>
										<MenuItem value={3}>Usd</MenuItem>
									</Select>
								</FormControl>
							</form>
						</div>
						<div className="right flex gap-6">
							<Link to="/login" className="login text-[#fff] hover:text-green-500 ">
								Tizimga kirish
							</Link>
							<a to="/register" className="signup text-[#fff] hover:text-green-500">
								Ro'yhatdan o'tish
							</a>
						</div>
					</div>
				</div>
			</section>
			<header className={classes}>
				<div className="container mx-auto px-5">
					<div className="header py-2">
						<div className="header__inner flex gap-10 justify-between items-center">
							<Link to="/" className="site-logo leading-loose text-3xl">
								<img src={Logo} alt="" className="" width={110} />
							</Link>
							<form className="w-3/5">
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
				<nav className="nav py-2 border-t flex justify-center">
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
