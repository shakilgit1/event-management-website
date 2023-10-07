import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import Services from "../../components/Services";
import Reviews from "../../components/Reviews/Reviews";
import Features from "../../components/Features";

const Home = () => {
  const events = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="mt-16 container mx-auto">
        <h1 className="text-5xl text-center font-bold mb-10"><span className="text-orange-600">Dvents</span> Services</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
