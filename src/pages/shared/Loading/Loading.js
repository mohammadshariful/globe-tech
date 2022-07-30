import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = ({ loading }) => {
  return (
    <div className="h-[60vh] flex justify-center items-center">
      <MoonLoader
        size={60}
        color={"#008bff"}
        loading={loading}
        speedMultiplier={1.5}
      />
    </div>
  );
};

export default Loading;
