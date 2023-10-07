import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {FaCheckCircle } from "react-icons/fa";


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
    <div className="mx-auto mt-8 md:flex justify-center lg:gap-20">
     

     <div className="hover:scale-[1.05] duration-1000 bg-base-100 shadow-xl p-4">
        <figure>
          <img className="h-[280px] w-full"
            src={singleItem.image_url}
            alt="Shoes"
          />
        </figure>
        <div className=" mx-auto">
          <h2 className="card-title font-bold text-center">{singleItem.title}</h2>
         
          <div className="card-actions flex items-center text-center">

          </div>
         <p className="w-96">
          {singleItem.description}
         </p>
        </div>
      </div>

    <div className="mt-4">
        
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{singleItem.title}</h5>
        <div className="flex items-baseline text-gray-900 dark:text-white mb-4">
            
            <span className="text-5xl font-extrabold tracking-tight">{singleItem.price}</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"></span>
        </div>
        <p className="text-center flex gap-4 font-semibold">Started on {singleItem.start_date} <span className="border-l-2 px-2"></span></p>
        <ul role="list" className="space-y-5 my-7">

            
            <li className='flex items-center gap-2'><span className="text-blue-600"><FaCheckCircle></FaCheckCircle></span> We bring creative ideas to make your event unique.</li>
            <li className='flex items-center gap-2'><span className="text-blue-600"><FaCheckCircle></FaCheckCircle></span>Punctual and adherent to timelines.</li>
            <li className='flex items-center gap-2'><span className="text-blue-600"><FaCheckCircle></FaCheckCircle></span>Our experienced pros handle every detail.</li>
            <li className='flex items-center gap-2'><span className="text-blue-600"><FaCheckCircle></FaCheckCircle></span>We manage everything, so you can enjoy.</li>
            <li className='flex items-center gap-2'><span className="text-blue-600"><FaCheckCircle></FaCheckCircle></span>Eco-friendly options to reduce impact.</li>
          
        </ul>
        <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
    </div>

      </div>


    
    </div>
  );
};

export default Details;
