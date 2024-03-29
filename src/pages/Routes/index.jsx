import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Basket from "../Basket";
import Contacts from "../Contacts";
import Error from "../Error";
import Favorites from "../Favorites";
import Home from "../Home";
import Order from "../Ordering";
import Ordered from "../Ordered";
import Products from "../Products";
import ServiceRequirements from "../Service-requirements";
import SingleProduct from "../Single-product";
import Login from "../Register";
import Signup from "../../components/Signup";
import Forgot from "../../components/Emailcode";
import Profile from "../Profile";
import ProfileInner from "../ProfileInner";
import OrderService from "../Service-ordering";

const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contacts />} path="/contacts" />
        <Route element={<Order />} path="/ordering" />
        <Route element={<OrderService />} path="/service-ordering/:id" />
        <Route element={<Ordered />} path="/ordered" />
        <Route element={<Favorites />} path="/selected" />
        <Route element={<Products />} path="/products/:id" />
        <Route element={<ServiceRequirements />} path="/service-requirements" />
        <Route element={<Basket />} path="/basket" />
        <Route element={<SingleProduct />} path="/single-product/:id" />
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/register" />
        <Route element={<Forgot />} path="/forgot" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<ProfileInner />} path="/profile/:path" />
        <Route element={<Error />} path="*" />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default UserRoutes;
