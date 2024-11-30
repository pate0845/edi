// components/OurCoreServices.js
import React from 'react';

const Core = () => {
  return (
    <section className="bg-yellow-100 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">OUR CORE SERVICES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Photography Workshops & Classes</h2>
            <ul className="list-disc list-inside text-gray-900 mb-4">
              <li>Beginner Courses: Get started with the fundamentals of photography.</li>
              <li>Advanced Techniques: Master lighting, composition, and editing.</li>
              <li>One-on-One Mentoring: Personalized guidance from professional photographers.</li>
            </ul>
            <img src="/path/to/workshop-image.jpg" alt="Photography Workshop" className="w-full rounded-lg mt-4" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Equipment Services</h2>
            <ul className="list-disc list-inside text-gray-900 mb-4">
              <li>Camera Maintenance & Cleaning: Routine checks and thorough cleaning to ensure camera functions flawlessly.</li>
              <li>Equipment Rental: Access a wide range of professional cameras, lenses, and accessories for projects.</li>
              <li>Firmware Updates & Upgrades: Stay current with the latest software enhancements and hardware upgrades.</li>
            </ul>
            <img src="/path/to/equipment-image.jpg" alt="Equipment Services" className="w-full rounded-lg mt-4" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Printing & Framing Services</h2>
            <ul className="list-disc list-inside text-gray-900 mb-4">
              <li>Canvas & Metal Prints: Unique ways to display photographs.</li>
              <li>Framing Services: Expert framing to complement images.</li>
              <li>Print Packages: Affordable options for all your printing needs.</li>
            </ul>
            <img src="/path/to/printing-image.jpg" alt="Printing and Framing" className="w-full rounded-lg mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Core;
