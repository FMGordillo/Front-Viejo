import React from "react";

const Interest = ({ interest = [] }) => (
  <div>
    {interest.map((item, key) => (
      <div key={key}>
        <p className="intereses">Intereses varios</p>
      </div>
    ))}
  </div>
);

const Interests = () => (
  <div>
    <h3>Intereses</h3>
    {Interest}
  </div>
);

export default Interests;
