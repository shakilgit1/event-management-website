import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const events = useLoaderData();
  const [singleItem, setSingleItem] = useState({});
  const { id } = useParams();
  const idInt = parseFloat(id);

  useEffect(() => {
    const findEvent = events.find((item) => item.id === idInt);
    setSingleItem(findEvent);
  }, [events, idInt]);

  return (
    <div className="mx-auto mt-20 flex justify-center">
      {/* <div>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-[1.05] duration-1000">
          <figure>
            <img
              className="h-[280px] w-full"
              src={singleItem.image_url}
              alt="Shoes"
            />
          </figure>
          <div className="card-body mx-auto">
            <h2 className="card-title font-bold text-center">
              {singleItem.title}
            </h2>
            <p className="text-center flex gap-4">
              Started on {singleItem.start_date}
              <span className="border-l-2 px-2">
                {singleItem.duration_months} months
              </span>
            </p>
            <div className="card-actions flex items-center text-center">
              <h2 className="text-4xl font-semibold text-cyan-400">
                {singleItem.price}
              </h2>
            </div>
          </div>
        </div>
      </div> */}

      <div className="hero w-[400px] min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <img
            src={singleItem.image_url}
            className=" rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold mb-4">{singleItem.title}</h1>
            <p className="text-center flex gap-4">
              Started on {singleItem.start_date}
              <span className="border-l-2 px-2">
                {singleItem.duration_months} months
              </span>
            </p>
            <p className="py-6">
            {singleItem.description}
            </p>
            <button className="btn btn-primary">{singleItem.price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
