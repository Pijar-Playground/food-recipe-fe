import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const checkProfile = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
  const [isLogin, setIsLogin] = React.useState(localStorage.getItem("isLogin"));
  const [profile, setProfile] = React.useState(checkProfile);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        document.querySelector(".navbar").classList.add("navbar-background");
      } else {
        document.querySelector(".navbar").classList.remove("navbar-background");
      }
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-5">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/add-recipe">
                Add Recipe
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>
        {isLogin ? (
          <div className="dropdown">
            <img
              src={profile.photo}
              width="40px"
              style={{ borderRadius: "50%" }}
              alt="profile"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />

            <ul
              className="dropdown-menu dropdown-menu-lg-end"
              style={{ paddingLeft: "10px" }}
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="col-lg-2 col-xs-5">
            <Link to="/login">
              <button type="button" className="btn btn-warning shadow-sm">
                Log In
              </button>
            </Link>
            <Link to="/register">
              <button type="button" className="btn btn-light shadow-sm">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
