// components/Herosection.js
import React from 'react';

const Herosection = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-yellow-100">
          WE VALUE UNIQUE QUALITY
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-yellow-100">
          At Photography Shop, we believe in capturing moments with a unique touch. Our curated selection of equipment and services helps you express your creativity and style.
        </p>
        <a
          href="#"
          className="inline-block bg-yellow-100 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        >
          SHOP NOW
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <img src="/images/pc.jpg" alt="Photography Image 1" className="w-full h-56 object-cover rounded-lg shadow-lg" />
          <img src="/images/t1.jpg" alt="Photography Image 2" className="w-full h-56 object-cover rounded-lg shadow-lg" />
          <img src="/images/t5.jpg" alt="Photography Image 3" className="w-full h-56 object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
