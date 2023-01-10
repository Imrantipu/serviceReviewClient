import { useLoaderData } from "react-router-dom";
import ShowServices from "./ShowServices";


const Services = () => {
  const allServices = useLoaderData();
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {allServices.map((allService) => (
          <ShowServices
            key={allService._id}
            allService={allService}
          ></ShowServices>
        ))}
      </div>
    </div>
  );
};

export default Services;
