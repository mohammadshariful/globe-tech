import React from "react";
import flyImg from "../../../assets/Vector.png";
import "./FlyingMode.css";
const FlyingMode = () => {
  return (
    <div className="flyingMode">
      <img className="w-16 sm:w-28 my-4" src={flyImg} alt="" />
    </div>
  );
};

export default FlyingMode;
