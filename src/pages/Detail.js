import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import "../styles/detail.css";

function Detail() {
  const navigate = useNavigate();
  const { recipe } = useSelector((state) => state);

  console.log(recipe);
  React.useEffect(() => {
    if (!recipe?.data) {
      navigate("/");
    }
  }, []);

  return (
    <div id="detail_page">
      {/* <!-- Navbar --> */}
      <Navbar />
      {/* <!-- end of navbar --> */}

      <h1 className="text-center">{recipe?.data?.name}</h1>

      <div className="container mb-5">
        <div className="row justify-content-md-center">
          <div className="col-lg-8">
            {/* Image Header */}
            <div style={{ position: "relative", marginBottom: "60px" }}>
              <img
                src={recipe?.data?.photo}
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
            <p
              dangerouslySetInnerHTML={{ __html: recipe?.data?.ingredients }}
            ></p>
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
