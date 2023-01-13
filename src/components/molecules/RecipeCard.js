import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as recipeReducer from "../../store/recipes";
import { useNavigate } from "react-router-dom";

function RecipeCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { image, name, url } = props;

  return (
    <div
      className="clickable-image mb-4"
      onClick={() => {
        axios
          .get(`${process.env.REACT_APP_URL_BACKEND}/recipe/${url}`)
          .then(({ data }) => {
            dispatch(
              recipeReducer.setDetail({
                data: data?.data?.[0],
                slug: url,
              })
            );
            navigate(`/detail/${url}`);
          });
      }}
    >
      <img
        src={image || "./images/home/recipe-1.jpg"}
        height="100%"
        width="100%"
        alt="placeholder"
      />
      <h2 className="image-title" style={{ color: "white" }}>
        {name || "Unknown"}
      </h2>
    </div>
  );
}

export default RecipeCard;
