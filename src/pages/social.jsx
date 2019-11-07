import React from "react";
import { Link } from "react-router-dom";

function Social() {
  return (
    <div className="box">
      <span>
        <Link to="https://www.facebook.com" target="_blank">{/*Me lleva al localhost:3000/https://www.facebook.com */}
          <img alt="FB" src="/public/facebook-app-symbol.svg">
            {/* {" "} */}
          </img>
          {/* Aqui se agrega el ícono  */}
        </Link>
      </span>
      <span>
        |
        <Link to="https://www.instagram.com" target="_blank">
          <img alt="INST" src="/public/instagram.svg">
            {/* {" "} */}
          </img>
          {/* Aqui se agrega el ícono  */}
        </Link>
      </span>
      <span>
        |
        <Link to="https://www.instagram.com" target="_blank">
          <img alt="TWIT" src="/public/twitter.svg">
            {/* {" "} */}
          </img>
          {/* Aqui se agrega el ícono  */}
        </Link>
      </span>
      <span>
        |
        <Link to="https://www.instagram.com" target="_blank">
          <img alt="Link" src="/public/linkedin-logo.svg">
            {/* {" "} */}
          </img>
          {/* Aqui se agrega el ícono  */}
        </Link>
      </span>
    </div>
  );
}

export default Social;
