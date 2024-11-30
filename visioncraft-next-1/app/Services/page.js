import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-yellow-100">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* Service 1 */}
        <div className="border p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4">Camera Repair</h3>
          <p className="text-gray-600 mb-4">Get your camera back in action with our expert repair services.</p>
          <Link href="/services" className="text-blue-600 hover:underline">Learn More</Link>
        </div>

        {/* Service 2 */}
        <div className="border p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4">Film Development</h3>
          <p className="text-gray-600 mb-4">Preserve your memories with professional film development and digitization.</p>
          <Link href="/services" className="text-blue-600 hover:underline">Learn More</Link>
        </div>

        {/* Service 3 */}
        <div className="border p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4">Photography Workshops</h3>
          <p className="text-gray-600 mb-4">Enhance your skills with our hands-on workshops for all levels.</p>
          <Link href="/services" className="text-blue-600 hover:underline">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
