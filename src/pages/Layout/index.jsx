import { useEffect, useState } from "react";
import UserRoutes, { AdminRoutes } from "../Routes";
import { isAuth } from "../../Hooks/Auth";

const Layout = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(localStorage.getItem("role"));
  }, [isAuth()]);

  return <>{isAdmin == "ADMIN" ? <AdminRoutes /> : <UserRoutes />}</>;
};

export default Layout;
