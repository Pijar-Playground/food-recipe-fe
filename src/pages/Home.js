/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/home.css";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import RecipeCard from "../components/molecules/RecipeCard";
import SpinerGroup from "../components/molecules/SpinerGroup";
import axios from "axios";
// single page application

// redux = ngumpulin semua data jadi satu

function Home(props) {
  let [keyword, setKeyword] = React.useState("Discovery Recipe");
  let [menu, setMenu] = React.useState([]);
  let [isLoading, setIsLoading] = React.useState(true);
  let [currentPage, setCurrentPage] = React.useState(1);
  let [totalPage, setTotalPage] = React.useState(1);

  // fase 1 = did mount
  // fase 2 = did update
  // fase 3 = will unmount

  // untuk storing data
  // DID MOUNT
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/recipe?limit=6&page=1`)
      .then(({ data }) => {
        let countPagination = parseInt(data?.pagination_all?.[0]?.count) / 6;
        setMenu(data?.data);
        setTotalPage(countPagination);
      })
      .catch(() => setMenu([]))
      .finally(() => setIsLoading(false));
  }, []);

  const fetchPagination = (pageParam) => {
    setIsLoading(true);
    setMenu([]);
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/recipe?limit=6&page=${pageParam}`
      )
      .then(({ data }) => {
        let countPagination = parseInt(data?.pagination_all?.[0]?.count) / 6;
        setMenu(data?.data);
        setTotalPage(countPagination);
        setCurrentPage(pageParam);
      })
      .catch(() => setMenu([]))
      .finally(() => setIsLoading(false));
  };

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
            {!isLoading &&
              menu.map((item, key) => (
                <div className="col-lg-4 col-6" key={key}>
                  <RecipeCard
                    image={item?.photo}
                    name={item?.name}
                    url={item?.slug}
                  />
                </div>
              ))}
          </div>
        </div>

        {!isLoading && (
          <div className="container">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a
                    className={`page-link ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                    onClick={() => {
                      if (currentPage > 1) fetchPagination(currentPage - 1);
                    }}
                  >
                    Previous
                  </a>
                </li>
                {[...new Array(totalPage)].map((item, key) => {
                  let position = ++key;
                  return (
                    <li className="page-item" key={key}>
                      <a
                        className={`page-link ${
                          currentPage === position ? "active" : ""
                        }`}
                        onClick={() => {
                          fetchPagination(position);
                        }}
                      >
                        {position}
                      </a>
                    </li>
                  );
                })}
                <li class="page-item">
                  <a
                    class={`page-link ${
                      currentPage === totalPage ? "disabled" : ""
                    }`}
                    onClick={() => {
                      if (currentPage < totalPage)
                        fetchPagination(currentPage + 1);
                    }}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </section>
      {/* <!-- end of popular recipe --> */}

      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- end of footer --> */}
    </div>
  );
}

export default Home;
