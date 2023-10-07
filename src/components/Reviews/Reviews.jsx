import { FaMap } from "react-icons/fa";

const Reviews = () => {
  return (
    <div>
      <div className="my-20">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/yXX5Jg0/4-parties.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-80 bg-black"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-lg">
              <p className="font-bold mb-10"></p>
              <h1 className="mb-5 text-5xl font-bold"><span className="text-orange-600">Dvents</span> Upcoming Events</h1>

              <p className="font-semibold text-lg">We make your events smart & impactful by personalised event management services.</p>


              <div className="md:flex gap-4 mt-4">
                <div className="hover:scale-[1.05] duration-1000">
                  <img src="https://i.ibb.co/W6nvyjx/262x390-1.jpg" alt="" />
                  <p className="font-bold">
                  Dance Event</p>
                  <p className="ml-8 flex items-center gap-2 text-gray-400 font-semibold "><span><FaMap></FaMap></span> 32-B,California, CA</p>
                </div>
                <div className="text-center hover:scale-[1.05] duration-1000">
                  <img src="https://i.ibb.co/35bhS2p/262x390-3.jpg" alt="" />
                  <p className="font-bold">Engagement Event</p>
                  <p className="ml-8 flex items-center gap-2 text-gray-400 font-semibold "><span><FaMap></FaMap></span> 2A,New York City, FA</p>
                </div>
                <div className="hover:scale-[1.05] duration-1000">
                  <img src="https://i.ibb.co/0KSvYj8/262x390-2-1.jpg" alt="" />
                  <p className="font-bold">Social Event</p>
                  <p className="ml-8 flex items-center gap-2 text-gray-400 font-semibold "><span><FaMap></FaMap></span> 32-B,California, CA</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
