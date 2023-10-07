const Banner = () => {
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
        <div className="hero-content text-center text-neutral-content">
          <div className="w-auto">
            <h1 className="mb-5 text-6xl font-bold capitalize"><span className="text-4xl">CELEBRATE YOUR EVENTS </span> <br /><span className="uppercase text-7xl">THAT LASTS LONGER</span></h1>
            <button className="btn btn-error text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
