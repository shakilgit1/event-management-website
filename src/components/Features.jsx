import img1 from '../assets/1.png'
import img2 from '../assets/2-4.jpg'
import { FaBusinessTime, FaFaceLaugh, FaPeopleRobbery, FaPeopleGroup } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Features = () => {

  useEffect(() => {
    AOS.init({duration:"1000", delay:"200"});
    // AOS.refresh();
  }, []);

    return (
        <div className='grid lg:grid-cols-2 gap-20 container mx-auto my-12 px-4'>
            <div data-aos="fade-right" className='flex'>
                <img   className=' w-48 md:w-80 hover:scale-[1.05] duration-1000' src={img1} alt="" />
                
                <img   className='w-48 md:w-80 hover:scale-[1.05] duration-1000' src={img2} alt="" />
                

            </div>
            <div  data-aos="fade-right">
          <h2 className="text-5xl"><span className='text-orange-600'>Dvents</span> - <span className='font-semibold'>Events That Lasts</span></h2>
          <p className='text-xl font-semibold my-6'>You should choose Dvents Services because we bring your <br /> guests closer to you & helps you to create a relationship <br /> that lasts long!</p>

          <p>Choose us for your event management needs because we bring your vision to life. With our expert team, meticulous planning, and unwavering dedication, we turn every event into a memorable and seamless experience. We thrive on creativity, attention to detail, and a commitment to exceeding your expectations. Your event is our canvas, and we paint it with excellence, making it an unforgettable masterpiece</p>

          <ul className='py-8 font-semibold'>
            <li className='flex items-center gap-2'><span><FaBusinessTime></FaBusinessTime></span> We bring creative ideas to make your event unique.</li>
            <li className='flex items-center gap-2'><span><FaBusinessTime></FaBusinessTime></span>Punctual and adherent to timelines.</li>
            <li className='flex items-center gap-2'><span><FaPeopleGroup></FaPeopleGroup></span>Our experienced pros handle every detail.</li>
            <li className='flex items-center gap-2'><span><FaFaceLaugh></FaFaceLaugh></span>We manage everything, so you can enjoy.</li>
            <li className='flex items-center gap-2'><span><FaPeopleRobbery></FaPeopleRobbery></span>Eco-friendly options to reduce impact.</li>
          </ul>
            </div>
        </div>
    );
};

export default Features;