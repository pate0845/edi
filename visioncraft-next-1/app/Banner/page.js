import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/g.jpg')" }}>
      {/* Overlay for darkened effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content Container */}
      <div className="relative z-10 text-center text-white py-32 px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          DISCOVER OUR PHOTOGRAPHY SERVICES
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
          We are passionate about capturing life’s precious moments. Our team of skilled photographers and state-of-the-art equipment ensure that every shot is a masterpiece. Explore our range of services designed to meet all your photography needs.
        </p>
      </div>
    </div>
  );
};

export default Banner;
