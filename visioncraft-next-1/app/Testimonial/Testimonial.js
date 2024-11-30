// components/Testimonial.js
import React from 'react';
import Link from "next/link";

const Testimonial = () => (
  <section className="bg-yellow-100 text-gray-900 py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center">WHAT OUR CUSTOMERS SAY</h2>
      <div className="mt-12 flex flex-col items-center justify-center">
        <div className="max-w-md">
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
            <p className="text-xl italic">"Incredible service and product quality! I found everything I needed for my photography business."</p>
            <div className="flex items-center mt-4">
              <img
                src="/images/g.jpg"
                alt="Customer"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h4 className="text-lg font-bold">John Doe</h4>
                <p className="text-sm">Photographer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold">600+</h3>
          <p className="mt-2 text-sm">Satisfied Customers</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">9 of 10</h3>
          <p className="mt-2 text-sm">Rate Our Service as Excellent</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">97%</h3>
          <p className="mt-2 text-sm">Recommend Our Shop</p>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 h-[250px] w-full my-8"></div>
  </section>
);

export default Testimonial;
