const YogaHero = () => {
    return (
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/hero_home.png')" }}
      >
        <div className="absolute inset-0 bg-blue-950 bg-opacity-60 flex items-center justify-center px-6">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Join our next yoga workshop and unlock your full potential.
            </h1>
            <p className="text-lg mb-6">
              We are here to provide you with most professional yoga experts.
              You can book sessions even for home classes. We are just a call away.
            </p>
{/*             <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-blue-950 transition">
              Discover more
            </button> */}
          </div>
        </div>
      </div>
    );
  };
  
  export default YogaHero;
  
