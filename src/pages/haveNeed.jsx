import React from "react";

function haveNeed() {
  return (
    <div>
      <h2 className="titles-have-need"> TENGO </h2>
      {/* {profile.tengo.map(tengo => ( */}
      <div
      // key={profile.id}
      >
        <ul id="bullet-check">
          {/* <li>{{tengo}}</li> */}
          <li>Un equipo confirmado</li>
          <li>Un equipo confirmado</li>
        </ul>
      </div>
      {/* ))} */}
      <hr className="border-top: dashed 1px lightgrey" />
      <h2 className="titles-have-need"> NECESITA </h2>
      {/* {profile.necesito.map(necesito => ( */}
      <div
      // key={profile.id}
      >
        <ul id="bullet-cancel">
          {/* <li>{{necesito}}</li> */}
          <li>un experto en marketing</li>
          <li>un experto en marketing</li>
        </ul>
      </div>
      {/* ))} */}
      <div className="button-div">
        <a href="https://www.google.com" target="_blank">
          <button className="connect-button" type="button">
            Conectar +
          </button>
        </a>
      </div>
    </div>
  );
}

export default haveNeed;
