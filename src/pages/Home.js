/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/home.css";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import RecipeCard from "../components/molecules/RecipeCard";
import SpinerGroup from "../components/molecules/SpinerGroup";
// single page application

// redux = ngumpulin semua data jadi satu

function Home(props) {
  let [keyword, setKeyword] = React.useState("Discovery Recipe");
  let [menu, setMenu] = React.useState([]);
  let [isLoading, setIsLoading] = React.useState(true);

  // fase 1 = did mount
  // fase 2 = did update
  // fase 3 = will unmount

  // untuk storing data
  // DID MOUNT
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setMenu([
        {
          name: "Nasi Jinggo",
          image:
            "https://travelspromo.com/wp-content/uploads/2021/04/Nasi-Jinggo-x-Juna-Daily-Box-1024x1024.jpg",
        },
        {
          name: "Wagyu Blackpaper",
          image:
            "https://travelspromo.com/wp-content/uploads/2021/04/Wagyu-Blackpepper-Daily-Box-1024x1024.jpg",
        },
        {
          name: "Ayam geprek sambel matah",
          image:
            "https://travelspromo.com/wp-content/uploads/2021/04/Ayam-Geprek-Sambal-Matah-Daily-Box-1-1024x1024.jpg",
        },
      ]);
    }, 3000);
  }, []);

  // Did update
  React.useEffect(() => {
    console.log("Loading berubah");
  }, [isLoading, keyword]);

  return (
    <div id="home_page">
      {/* <!-- Navbar --> */}
      <Navbar />
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
              <h1>{keyword}</h1>
              <div className="mt-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="form-search"
                  placeholder="search recipe..."
                  onChange={(event) => {
                    setKeyword(event.target.value);
                  }}
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

          {isLoading ? <SpinerGroup /> : null}

          {menu.length === 0 && !isLoading ? <h2>Recipe not found</h2> : null}

          {/* <!-- recipe list --> */}
          <div className="row">
            {menu.map((item) => (
              <div className="col-lg-4 col-6">
                <RecipeCard
                  image={item?.image}
                  name={item?.name}
                  url={item?.name?.toLocaleLowerCase()?.split(" ").join("-")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- end of popular recipe --> */}

      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- end of footer --> */}
    </div>
  );
}

export default Home;
