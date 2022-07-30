import React from "react";

const ServiceRow = ({ service }) => {
  return (
    <div className="card  sm:w-96 bg-base-100 text-primary shadow-xl">
      <figure className="px-10 pt-10">
        <img src={service.picture} alt={service.name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.description}</p>
        <div className="card-actions">
          <button className="btn  rounded-full px-8">More</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceRow;
