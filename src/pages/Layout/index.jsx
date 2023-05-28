// import {  useState } from "react";
// import { isAuth } from "../../Hooks/Auth";
// import Login from "../Register";
import UserRoutes from "../Routes";

const Layout = () => {
    // const [access="true", setAccess] = useState(isAuth())
    // useMemo(()=>{
    //     setAccess(isAuth())
    // },[isAuth()]) 
    // console.log(access);
    
    return (
        <>
           {/* {access ? <UserRoutes/> : <Login/>}  */}
           <UserRoutes/>
        </>
    );
};

export default Layout;