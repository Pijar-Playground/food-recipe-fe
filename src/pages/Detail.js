import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  let { id } = useParams();
  return (
    <div>
      <h1>Ini halaman detail recipe {id}</h1>
    </div>
  );
}

export default Detail;
