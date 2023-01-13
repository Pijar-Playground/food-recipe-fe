import React from "react";
import Navbar from "../components/organisms/Navbar";
import "../styles/profile.css";
import { useNavigate } from "react-router-dom";

function Profile(props) {
  const navigate = useNavigate();
  const checkProfile = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
  const [profile, setProfile] = React.useState(checkProfile);

  // check if already login
  React.useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    const token = localStorage.getItem("token");

    if (!isLogin && !token) {
      navigate("/login"); // navigate to home
    }
  }, []);

  return (
    <div id="profile_page">
      {/* <!-- Navbar --> */}
      <Navbar />
      {/* <!-- end of navbar --> */}

      <div className="container">
        <section className="header">
          <div>
            <div className="image-center">
              <img
                src={profile?.photo}
                className="profile-image"
                alt="profile"
              />
            </div>
            <h3 className="text-center">{profile?.name}</h3>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;
