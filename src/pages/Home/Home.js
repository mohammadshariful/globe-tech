import React, { useState } from "react";
import img1 from "../../assets/Group 1.png";
import img2 from "../../assets/group2.png";
const Home = () => {
  const [img, setImg] = useState(img1);
  const changleImg = () => {
    setImg(img2);
  };
  return (
    <div class="h-screen flex flex-col sm:flex-row justify-between items-center gap-y-4">
      <div className="w-full sm:w-1/2">
        <h1 className="text-xl lg:text-6xl sm:mb-4">
          Welcome to <br /> <span className="text-warning">GlobeTech</span>
        </h1>
        <p>
          We are committed to deliver <span>best IT services</span>. Our
          Consultants have experience in working with clients. We have extensive
          experience in the software application space and also offer a broad
          range and depth of technology.
        </p>
        <div className="flex  items-center flex-col lg:flex-row gap-2  md:gap-4 mt-3">
          <button className="btn btn-sm btn-warning sm:btn-md">
            Support us
          </button>
          <button className="btn btn-sm btn-outline btn-accent sm:btn-md">
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
