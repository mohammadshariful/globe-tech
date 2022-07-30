import { useEffect, useState } from "react";
import ServiceRow from "./ServiceRow";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("services.json")
      .then((res) => res.json())
      .then((res) => {
        setServices(res);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="text-center max-w-[90%] mx-auto">
      <h3 className="lg:text-2xl">SERVICES</h3>
      <h2 className="lg:text-3xl">We provides services to our clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-7 mt-10">
        {services.map((service) => (
          <ServiceRow key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
