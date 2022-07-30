import React from "react";

const ServiceRow = ({ service }) => {
  return (
    <div className="card  sm:w-96 bg-base-100 text-primary shadow-xl">
      <figure className="px-10 pt-10">
        <img src={service.picture} alt={service.name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-center text-xl font-semibold text-primary">
          {service.name}
        </h2>
        <p className="text-black font-normal tracking-widest">
          {service.description}
        </p>

        <button className="bg-primary border border-primary text-white py-2  rounded-full px-14 uppercase font-bold">
          More
        </button>
      </div>
    </div>
  );
};

export default ServiceRow;
