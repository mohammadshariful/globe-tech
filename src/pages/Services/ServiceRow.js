import React from "react";

const ServiceRow = ({ service }) => {
  console.log(service);
  return (
    <div class="card  sm:w-96 bg-base-100 text-primary shadow-xl">
      <figure class="px-10 pt-10">
        <img src={service.picture} alt={service.name} class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{service.name}</h2>
        <p>{service.description}</p>
        <div class="card-actions">
          <button class="btn  rounded-full px-8">More</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceRow;
