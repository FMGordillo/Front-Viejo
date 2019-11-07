import React from "react";

export default ({ list = [], title }) => (
  <div>
    <h2 className="listTitle">{title || "List Title"}</h2>

    {list.map((item, key) => (
      <div key={key++} className="gridPhoto">
        <div className="roundedPhoto colorTrial" />
        {/*Aca iria item.picture */}
        <div className="textList">
          <h3>{item}</h3>{/*Procurar que el item sea un objeto para poder entrar a cada
          uno de sus atributos */}

        </div>
      </div>
    ))}
  </div>
);
