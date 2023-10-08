import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "500" });
  }, []);

  return (
    <div className="mx-auto container my-20 px-6">
      <h2
        data-aos="fade-down"
        className="text-5xl text-center mb-4 font-semibold"
      >
        The <span className="text-orange-600">Event Management </span>
         Specialists
      </h2>
      <p data-aos="fade-down" className="text-lg text-center">
        From Wedding Functions to Birthday Parties or Corporate <br /> Events to
        Musical Functions, We offer full <br /> range of Events Management
        Services that scale to your needs & budget.
      </p>

      <div
        data-aos="fade-up"
        className="md:flex justify-around mx-auto gap-4 mt-14"
      >
        <div>
          <div className="space-y-4">
            <img className="hover:scale-[1.05] duration-1000" src="" alt="" />
            <h2 className="text-2xl">Anniversaries</h2>
            <p>
              A wedding event is a momentous <br /> and deeply emotional occasion <br /> that
              marks the union of two <br /> people in love
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <img className="hover:scale-[1.05] duration-1000" src="" alt="" />
            <h2 className="text-2xl">Holiday Parties</h2>
            <p>
              A party event is a joyous <br /> and festive occasion held to <br />
              celebrate the anniversary <br /> of a persons birth.
            </p>
          </div>
        </div>

        <div>
          <div className=" space-y-4">
            <img className="hover:scale-[1.05] duration-1000" src="" alt="" />
            <h2 className="text-2xl">Fashion Concerts</h2>
            <p>
              Social events are gatherings  <br /> designed to foster social
              interaction,  <br /> strengthen relationships.
            </p>
          </div>
          <div className=" space-y-4 mt-6">
            <img className="hover:scale-[1.05] duration-1000" src="" alt="" />
            <h2 className="text-2xl">Conference Planning</h2>
            <p>
              Social events are gatherings <br /> designed to foster social
              interaction, <br /> strengthen  relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
