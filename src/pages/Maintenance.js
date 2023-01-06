import React from "react";

function Maintenance() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "100vh",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="/images/maintenance.svg" width="300px" />
        </div>
        <h1>Page undermaintenace</h1>
      </div>
    </div>
  );
}

export default Maintenance;
