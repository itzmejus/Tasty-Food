import React from "react";
import "../styles/NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <nav class="nav" style={{ justifyContent: "center" }}>
        <h2 class="nav__h2">404 Not Found</h2>
      </nav>
      <section class="section">
        <div class="section__image">
          <img
            class="image__img"
            src="https://i.postimg.cc/8Pwq7YjY/Scarecrow.png"
            alt="404 Not Found Image"
          />
        </div>
        <div class="section__text" >
          <h1 class="text__h1">I Have Bad News For You</h1>
          <p class="text__p">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <Link to="/" >
            <button class="text__btn" type="button" >
              Back to homepage
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
