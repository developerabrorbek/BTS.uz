import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProfileAside from "../../components/ProfileAside";
import Orders from "../../components/Orders";
import UsedServices from "../../components/UsedServices";
import Payments from "../../components/Payments";

const Body = () => {
  const { path } = useParams();
  switch (path) {
    case "orders":
      return <Orders />;
    case "used-services":
      return <UsedServices />;
    case "payments":
      return <Payments />;
    default:
      return <h1>Page not found</h1>;
  }
};

const ProfileInner = () => {
  return (
    <>
      <Header />
      <div className="main bg-white mt-0 md:flex md:justify-between">
        <div className="aside hidden md:block">
          <ProfileAside />
        </div>
        <Body />
      </div>
      <Footer />
    </>
  );
};

export default ProfileInner;
