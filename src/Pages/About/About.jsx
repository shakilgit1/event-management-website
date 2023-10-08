import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        AOS.init({duration:"1000", delay:"500"});
       
      }, []);
    
    return (
        <div className="px-4">
            <div>
            <h2 data-aos="fade-up" className="text-5xl text-center mb-4 font-semibold  my-10">We <span className="text-orange-600">Create Events</span> That Lasts</h2>
            <p data-aos="fade-up" className="text-xl text-center">We make your events smart & impactful by personalised event management services</p>


            <div className="container mx-auto my-10 md:flex justify-between">
                <div data-aos="fade-right" className="space-y-8">
                    <h2 className="text-4xl font-semibold">Why Choose <span className="text-orange-600">Dvents</span></h2>
                    <h2 className="text-3xl font-semibold">
                    The Events Specialists
                    </h2 >
                    <h2 className="text-3xl font-semibold">
                    Dedicated Venues & Arrangements
                    </h2>
                    <h2 className="text-3xl font-semibold">
                    All Types of Events
                    </h2>

                    <p className="w-96">Choose us for your event management needs because we bring your vision to life. With our expert team, meticulous planning, and unwavering dedication, we turn every event into a memorable and seamless experience. We thrive on creativity, attention to detail, and a commitment to exceeding your expectations. Your event is our canvas, and we paint it with excellence, making it an unforgettable masterpiece.</p>
                   
                </div>
                <div>
                    <img data-aos="zoom-in" src="https://i.ibb.co/KLr8gQZ/Screenshot-1.png" alt="" />
                </div>
            </div>
           </div>

           <div className="mb-20 container mx-auto">
           <h2 data-aos="fade-up" className="text-5xl text-center mb-4 font-semibold my-10"><span className="text-orange-600">Dvents</span> Team Members</h2>
            <p data-aos="fade-up" className="text-xl text-center mb-8">We make your events smart & impactful by personalised event management services</p>


            <div className="grid md:grid-cols-2 justify-between ml-20 gap-4">
                <div data-aos="zoom-in-up">
                    <img src="https://i.ibb.co/19jqpQT/1-8.jpg" alt="" />
                    <h3 className="text-xl">Charles Hasman</h3>
                    <p>Founder & Director</p>
                </div>
                <div data-aos="zoom-in-up">
                    <img src="https://i.ibb.co/T8C42F0/2-5.jpg" alt="" />
                    <h3 className="text-xl">Ava Taylor</h3>
                    <p>Supervisor</p>
                </div>
                <div data-aos="zoom-in-up">
                    <img src="https://i.ibb.co/sQ56TLf/3-3.jpg" alt="" />
                    <h3 className="text-xl">Kethy Hilton</h3>
                    <p>Events Manager</p>
                </div>
                <div data-aos="zoom-in-up">
                    <img src="https://i.ibb.co/XVtdGjg/4-3.jpg" alt="" />
                    <h3 className="text-xl">Charles Hasman</h3>
                    <p>Events Manager</p>
                </div>
            </div>
           </div>
        </div>
        
    );
};

export default About;