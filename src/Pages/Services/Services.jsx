import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "aos/dist/aos.css";


const Services = () => {

    useEffect(() => {
        AOS.init({duration:"1000", delay:"500"});
        
      }, []);

    return (
        <div className="mx-auto container my-20 px-4">
            <h2 data-aos="fade-down" className="text-5xl text-center mb-4 font-semibold"><span className="text-orange-600">Dvents</span> Services</h2>
            <p data-aos="fade-down" className="text-xl text-center">We make your events smart & impactful by personalised event management services</p>

            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 mt-14">
                <div>
                <div className="w-96 space-y-4">
                    <img className="hover:scale-[1.05] duration-1000" src="https://i.ibb.co/8B4nxTB/7.jpg" alt="" />
                    <h2 className="text-2xl">Social Events</h2>
                    <p>Social events are gatherings designed to <br /> foster social interaction, strengthen <br /> relationships.</p>
                </div>
                <div className="w-96 space-y-4 mt-6">
                    <img className="hover:scale-[1.05] duration-1000" src="https://i.ibb.co/HD6n4XH/2.jpg" alt="" />
                    <h2 className="text-2xl">Social Events</h2>
                    <p>Social events are gatherings designed to <br /> foster social interaction, strengthen <br /> relationships.</p>
                </div>
                </div>

                <div>
                    <img className="hover:scale-[1.05] duration-1000" src="https://i.ibb.co/9qF2HBT/1.jpg" alt="" />
                    
                </div>

                <div>
                <div className="w-96 space-y-4">
                    <img className="hover:scale-[1.05] duration-1000" src="https://i.ibb.co/7XPtsrS/3.jpg" alt="" />
                    <h2 className="text-2xl">Wedding Events</h2>
                    <p>A wedding event is a momentous and deeply emotional occasion that marks the union <br /> of two people in love</p>
                </div>
                <div className="w-96 space-y-4 mt-6">
                    <img className="hover:scale-[1.05] duration-1000" src="https://i.ibb.co/zQGQR6L/4.jpg" alt="" />
                    <h2 className="text-2xl">Birthday Parties</h2>
                    <p>A birthday party event is a joyous and festive <br /> occasion held to celebrate the anniversary of a persons birth. </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Services;