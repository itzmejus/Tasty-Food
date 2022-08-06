import React from "react";
import '../styles/Loader.css'

function Loader() {
  return (
    <div class="loader-bg">
      <h3>Loading...</h3>
      <div class="loader">
        <span></span>
      </div>
    </div>
  );
}

export default Loader;
