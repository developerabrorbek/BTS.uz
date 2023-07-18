import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import BurgerIcon from "../../assets/burger.svg";
import BasketImage from "../../assets/trash.svg";
import FavoriteImage from "../../assets/favorite.svg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useSelector } from "react-redux";

export default function BurgerOffCanvas() {
  const [state, setState] = React.useState({
    right: false,
  });

  const { basketCartTotal } = useSelector((res) => res.basket);
  const { favoriteCartTotal } = useSelector((res) => res.favorite);

  const anchor = "right";

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "330px", padding: "38px 12px", position: "relative" }}
      role="presentation"
    >
      <div className="close-icon" onClick={toggleDrawer(anchor, false)}>
        <CloseIcon className="absolute top-1 right-2" />
      </div>
      <List sx={{ display: "grid", rowGap: "24px" }}>
        <ListItem disablePadding>
          <form className="w-full">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div className="relative">
              <button
                htmlFor="default-search"
                className="absolute inset-y-0 right-0 flex items-center rounded-r overflow-hidden px-3 bg-green-500 pointer-events-none"
              >
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
        </ListItem>
        <ListItem disablePadding>
          <Link
            to="/selected"
            className="favorites-wrapper relative flex gap-x-4"
          >
            <img src={FavoriteImage} alt="Favorites" />
            <div className=" absolute -top-3 left-4 z-10 bg-red-400 rounded-full flex items-center justify-center  w-6">
              <p className="text text-white">{favoriteCartTotal}</p>
            </div>
            <p>Favorites</p>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to="/basket" className="basket-wrapper relative flex gap-x-5">
            <img src={BasketImage} alt="Basket" />
            <div className="amount  absolute -top-3 left-4 z-10 bg-[#FFA542] rounded-full flex items-center justify-center  w-6">
              <p className="text text-white ">{basketCartTotal}</p>
            </div>
            <p>Basket</p>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to="/profile" className="flex gap-x-3 items-center">
            <AccountCircleOutlinedIcon fontSize="large" color="secondary" />
            <p className="text-[#6c6969]">Profile</p>
          </Link>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <Link to="/login" className="login text-black hover:text-green-500 ">
            Tizimga kirish
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            to="/register"
            className="signup text-black hover:text-green-500"
          >
            Ro&apos;yhatdan o&apos;tish
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <React.Fragment key={anchor}>
        <img
          src={BurgerIcon}
          alt="burger"
          onClick={toggleDrawer(anchor, true)}
        />
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </>
  );
}
