import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = ({course}) => {
    const {id, title, image_url, price, start_date} = course || {}

    useEffect(() => {
      AOS.init({duration:"000", delay:"00"});
      // AOS.refresh();
    }, []);

  return (
    <div>
      <div  data-aos="fade-up" className="card  bg-base-100 shadow-xl hover:scale-[1.05] duration-1000">
        <figure>
          <img className="h-[280px] w-full"
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
          <div>
          <h2 className="card-title font-bold text-center">{title}</h2>
          <p className="text-center flex gap-4">Started on {start_date}</p>
          </div>
          <div className="card-actions flex items-center text-center">
            <h2 className="text-4xl font-semibold text-cyan-400">{price}</h2>
          
          </div>
          </div>
          <Link to={`event/${id}`}><button className="w-full btn btn-error mt-2 text-white">See Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

Services.propTypes = {
  course: PropTypes.object
}