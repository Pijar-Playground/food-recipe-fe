/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

// single page application

function Home() {
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
    <div>
      {/* <!-- Display for laptop --> */}
      {/* <!-- Navbar --> */}
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">
                  Add Recipe
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
            </ul>
          </div>
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
        </div>
      </nav>
      {/* <!-- end of navbar --> */}

      {/* <!-- header --> */}
      <section id="header">
        {/* <!-- background yellow --> */}
        <div className="overlay-background"></div>

        {/* <!-- content --> */}
        <div className="container content">
          <div className="row align-items-center">
            {/* <!-- side left --> */}
            <div className="col-lg-5 col-xs-12 order-1 order-lg-0">
              <h1>Discover Recipe & Delicious Food</h1>
              <div className="mt-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="form-search"
                  placeholder="search recipe..."
                />
              </div>
            </div>
            {/* <!-- side right --> */}
            <div className="col-lg-6 col-xs-12 offset-lg-1 background-grid order-0 order-lg-1">
              <img
                src="./images/home/header-1.png"
                className="main-background"
                width="600px"
                alt="placeholder"
              />
              {/* <!-- background header --> */}
              <img
                src="./images/home/background-header-1.png"
                className="background-1"
                width="500px"
                alt="placeholder"
              />
              <img
                src="./images/home/background-header-2.png"
                className="background-2"
                width="500px"
                alt="placeholder"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of header --> */}

      {/* <!-- new recipe --> */}
      <section id="new-recipe">
        {/* <!-- title --> */}
        <div className="container">
          <h2 className="title">New Recipe</h2>
        </div>

        {/* <!-- background --> */}
        <div className="background-overlay"></div>
        {/* <!-- content --> */}
        <div className="container">
          <div className="row align-items-center">
            {/* <!-- side left --> */}
            <div className="col-lg-6 col-xs-12">
              <img
                src="./images/home/new-recipe.jpg"
                width="100%"
                height="500px"
                className="main-image"
                alt="placeholder"
              />
            </div>
            {/* <!-- side right --> */}
            <div className="col-lg-5 offset-lg-1 col-xs-12 mt-xs-5">
              <h2>
                Healthy Bone Broth Ramen <br />
                (Quick & Easy)
              </h2>

              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <Link to="/detail">
                <button type="button" className="btn btn-warning">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of new recipe --> */}

      {/* <!-- popular recipe --> */}
      <section id="popular-recipe">
        <div className="container">
          {/* <!-- title --> */}
          <div className="container">
            <h2 className="title">Popular Recipe</h2>
          </div>

          {/* <!-- recipe list --> */}
          <div className="row">
            <div className="col-lg-4 col-6">
              <Link to="/detail">
                <div className="clickable-image mb-4">
                  <img
                    src="./images/home/recipe-1.jpg"
                    height="100%"
                    width="100%"
                    alt="placeholder"
                  />
                  <h2 className="image-title">
                    Chiken Kare with spice sauce and shrimp Chiken Kare with
                    spice sauce and shrimp
                  </h2>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-6">
              <Link to="/detail">
                <div className="clickable-image mb-4">
                  <img
                    src="./images/home/recipe-1.jpg"
                    height="100%"
                    width="100%"
                    alt="placeholder"
                  />
                  <h2 className="image-title">
                    Chiken Kare with spice sauce and shrimp Chiken Kare with
                    spice sauce and shrimp
                  </h2>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-6">
              <Link to="/detail">
                <div className="clickable-image mb-4">
                  <img
                    src="./images/home/recipe-1.jpg"
                    height="100%"
                    width="100%"
                    alt="placeholder"
                  />
                  <h2 className="image-title">
                    Chiken Kare with spice sauce and shrimp Chiken Kare with
                    spice sauce and shrimp
                  </h2>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-6">
              <Link to="/detail">
                <div className="clickable-image mb-4">
                  <img
                    src="./images/home/recipe-1.jpg"
                    height="100%"
                    width="100%"
                    alt="placeholder"
                  />
                  <h2 className="image-title">
                    Chiken Kare with spice sauce and shrimp Chiken Kare with
                    spice sauce and shrimp
                  </h2>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-6">
              <Link to="/detail">
                <div className="clickable-image mb-4">
                  <img
                    src="./images/home/recipe-1.jpg"
                    height="100%"
                    width="100%"
                    alt="placeholder"
                  />
                  <h2 className="image-title">
                    Chiken Kare with spice sauce and shrimp Chiken Kare with
                    spice sauce and shrimp
                  </h2>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-6">
              <Link to="/detail">
                <div className="clickable-image mb-4">
                  <img
                    src="./images/home/recipe-1.jpg"
                    height="100%"
                    width="100%"
                    alt="placeholder"
                  />
                  <h2 className="image-title">
                    Chiken Kare with spice sauce and shrimp Chiken Kare with
                    spice sauce and shrimp
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of popular recipe --> */}

      {/* <!-- footer --> */}
      <footer>
        <div>
          <h2>Eat, Cook, Repeat</h2>
          <p>Share your best recipe by uploading here !</p>

          <div className="footer-link">
            <p>Copyright 2022 by Bilkis Ismail. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
      {/* <!-- end of footer --> */}
    </div>
  );
}

export default Home;
