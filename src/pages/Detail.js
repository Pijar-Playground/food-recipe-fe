import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import "../styles/detail.css";

function Detail() {
  let { id } = useParams();
  return (
    <div id="detail_page">
      {/* <!-- Navbar --> */}
      <Navbar />
      {/* <!-- end of navbar --> */}

      <h1 className="text-center">Loream Sandwich</h1>

      <div className="container mb-5">
        <div className="row justify-content-md-center">
          <div className="col-lg-8">
            {/* Image Header */}
            <div style={{ position: "relative", marginBottom: "60px" }}>
              <img
                src="https://travelspromo.com/wp-content/uploads/2021/04/Nasi-Jinggo-x-Juna-Daily-Box-1024x1024.jpg"
                alt="recipe"
                className="recipe_image shadow-lg"
              />

              <div className="bottom_action_image">
                <div className="button_bookmark shadow-sm">
                  <img src="/images/bookmark.svg" width="25px" />
                </div>
                <div className="button_like shadow-sm">
                  <img src="/images/like.svg" width="25px" />
                </div>
              </div>
            </div>

            {/* Content */}

            <h3>Ingredients</h3>
            <p>
              - 2 eggs <br /> - 2 tbsp mayonnaise
              <br /> - 3 slices bread <br />- a little butter <br /> - ⅓ carton
              of cress
              <br /> - 2-3 slices of tomato or a lettuce leaf and a slice of ham
              or cheese
              <br /> - crisps , to serve
            </p>
          </div>
        </div>
      </div>

      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- end of footer --> */}
    </div>
  );
}

export default Detail;
