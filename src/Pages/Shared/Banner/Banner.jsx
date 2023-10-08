import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {

  useEffect(() => {
    AOS.init({duration:"1000", delay:"500"});
   
  }, []);

  return (
    <div>

      <div 
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Dfxv6T2/bg-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80 bg-black"></div>
        <div  className="hero-content text-center text-neutral-content">
          <div data-aos="fade-up" className="w-auto">
            <h1  className="mb-5 text-6xl font-bold capitalize"><span className="text-4xl">CELEBRATE YOUR EVENTS </span> <br /><span className="uppercase text-7xl">THAT LASTS LONGER</span></h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
