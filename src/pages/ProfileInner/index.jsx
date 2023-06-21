import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProfileAside from "../../components/ProfileAside";

const ProfileInner = () => {
  return (
    <>
      <Header />
      <div className="main bg-white mt-0">
        <div className="aside flex justify-between">
          <ProfileAside/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileInner;