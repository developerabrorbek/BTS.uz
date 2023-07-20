// import { Button } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProfileAside from "../../components/ProfileAside";
import ProfileDatum from "../../components/ProfileDatum";
// import { useNavigate } from "react-router-dom";

const Profile = () => {
  // const isUser = Boolean(JSON.parse(localStorage.getItem("user")));
  // const navigate = useNavigate();

  return (
    <>
      <Header />
      {/* {isUser ? (
        <>
          <div className="main bg-white mt-0 flex justify-between">
            <div className="aside">
              <ProfileAside />
            </div>
            <ProfileDatum />
          </div>
        </>
      ) : (
        <>
          <div className="main flex flex-col items-center justify-center h-[40vh]">
            <h2 className="text-center mb-4 text-[24px] font-semibold">
              You have not entered your profile yet!👇
            </h2>
            <Button onClick={() => navigate("/login")} variant="contained">
              Login
            </Button>
          </div>
        </>
      )} */}
      <>
        <div className="main  bg-white mt-0 ">
          <div className="container mx-auto flex justify-center md:justify-between">
            <div className="aside hidden md:block">
              <ProfileAside />
            </div>
            <ProfileDatum />
          </div>
        </div>
      </>
      <Footer />
    </>
  );
};

export default Profile;
