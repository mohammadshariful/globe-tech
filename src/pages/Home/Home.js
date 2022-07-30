import React, { useState } from "react";
import img1 from "../../assets/Group 1.png";
import img2 from "../../assets/group2.png";
import FlyingMode from "../shared/FlyingMode/FlyingMode";
const Home = () => {
  const [img, setImg] = useState(img1);
  const changleImg = () => {
    setImg(img2);
  };
  return (
    <div className="h-screen max-w-[90%] mx-auto flex flex-col sm:flex-row justify-between items-center gap-y-4">
      <div className="w-full sm:w-1/2">
        <FlyingMode />
        <h1 className="text-xl text-primary lg:font-bold lg:text-6xl sm:mb-4">
          Welcome to <br /> <span className="text-secondary">GlobeTech</span>
        </h1>
        <p className="text-lg font-medium text-primary">
          We are committed to deliver
          <span className="text-secondary ml-2">best IT services</span>. Our
          Consultants have experience in working with clients. We have extensive
          experience in the software application space and also offer a broad
          range and depth of technology.
        </p>
        <div className="flex  items-center flex-col lg:flex-row gap-2  md:gap-4 mt-3">
          <button className="bg-secondary text-black font-semibold text-lg rounded-lg px-4 py-2">
            Support us
          </button>
          <button className="border-primary border text-primary font-semibold text-lg rounded-lg px-4 py-2">
            Our Mission
          </button>
        </div>
      </div>
      <div className="w-full sm:w-1/2 hidden lg:block">
        <img
          onMouseOver={changleImg}
          className="w-32 lg:w-96 mx-auto"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
