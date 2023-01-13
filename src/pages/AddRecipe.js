import React from "react";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const navigate = useNavigate();

  // check if already login
  React.useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    const token = localStorage.getItem("token");

    if (!isLogin && !token) {
      navigate("/login"); // navigate to home
    }
  }, []);

  return (
    <div>
      <h1>Ini halaman add recipe pages</h1>
    </div>
  );
}

export default AddRecipe;
