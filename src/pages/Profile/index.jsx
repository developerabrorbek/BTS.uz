

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProfileAside from "../../components/ProfileAside";
import ProfileDatum from "../../components/ProfileDatum";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="main bg-white mt-0">
        <div className="aside flex justify-between">
          <ProfileAside/>
          <ProfileDatum/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
