import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  React.useState(() => {
    setTimeout(() => {
      localStorage.clear();
      navigate("/login");

      //   localStorage.removeItem("token");
      //   localStorage.removeItem("isLogin");
      //   localStorage.removeItem("profile");
    }, 1500);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            class="spinner-border"
            style={{ width: "50px", height: "50px" }}
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <h1>Wait for logout</h1>
      </div>
    </div>
  );
}

export default Logout;
