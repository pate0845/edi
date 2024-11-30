import React from 'react';

const Specialpoint = () => (
  <section className="bg-yellow-100 py-12 text-center">
    <div className="max-w-7xl mx-auto px-6">
      {/* Box container */}
      <div className="bg-yellow-100 p-8 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold">10,000+ Cameras Repaired</h2>
            <p>Expert camera repair services</p>
            <p>Join thousands of satisfied customers</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold">5,000+ Workshops Conducted</h2>
            <p>Inspiring photography workshops</p>
            <p>Enhance your skills with our experts</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold">15,000+ Prints Delivered</h2>
            <p>High-quality printing services</p>
            <p>Bring your photos to life</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold">8,000+ Happy Customers</h2>
            <p>Trusted by photography enthusiasts</p>
            <p>Experience our exceptional service</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 h-[250px] w-full my-8"></div>
    </div>
  </section>
);

export default Specialpoint;
