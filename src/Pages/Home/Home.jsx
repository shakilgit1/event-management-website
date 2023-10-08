import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import Services from "../../components/Services";
import Reviews from "../../components/Reviews/Reviews";
import Features from "../../components/Features";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Home = () => {
  const events = useLoaderData();

  useEffect(() => {
    AOS.init({duration:"1000", delay:"500"});
    // AOS.refresh();
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="mt-16 container mx-auto">
        <h1  data-aos="fade-up" className="text-5xl text-center font-bold mb-10"><span className="text-orange-600">Dvents</span> Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {events.map((course) => (
            <Services key={course.id} course={course}></Services>
          ))}
        </div>
      </div>

     
      <div className="">
        <Reviews></Reviews>
        <Features></Features>

      </div>
    </div>
  );
};

export default Home;
