import React from "react";
import "./feature.css";
const Feature = (props) => {
  return (
    <div className="gpt3__features-container__feature">


      <div className="gpt3__features-container_feature-title">
        <div />
        <h1>{props.title}</h1>
      </div>


      <div className="gpt3__features-container_features-text">
        <p>{props.text}</p>
      </div>


    </div>
  );
};

export default Feature;
