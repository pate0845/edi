import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-yellow-100 py-16 px-4 md:px-8">
      {/* About Section Header */}
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <div className="container mx-auto">
        {/* First Content Block */}
        <div className="bg-yellow-150 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2">
              <h3 className="text-gray-900 text-xl leading-relaxed mb-8">
                Founded with a love for capturing moments, our photography shop has evolved into a vibrant community hub for enthusiasts and professionals alike. We are dedicated to providing high-quality products and services while fostering a passion for photography in every customer.
              </h3>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/images/b4.jpg"
                alt="Photography shop with vintage cameras and photographs"
                className="rounded-lg shadow-lg w-full md:w-2/3 h-auto"
              />
            </div>
          </div>
        </div>

        {/* Second Content Block */}
        <div className="bg-yellow-150 p-8 rounded-lg shadow-lg mt-8">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Passion for Photography Since Day One</h1>
              <p className="text-gray-900 text-xl leading-relaxed mb-8">
                Founded with a love for capturing moments, our photography shop has evolved into a vibrant community hub for enthusiasts and professionals alike. We are dedicated to providing high-quality products and services while fostering a passion for photography in every customer.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/images/g.jpg"
                alt="Photography shop with vintage cameras and photographs"
                className="rounded-lg shadow-lg w-full md:w-2/3 h-auto"
              />
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="bg-yellow-100 h-[50px] w-full my-8"></div>

        {/* Meet the Team Section */}
        <div>
          <h1 className="text-4xl font-bold text-center mb-8">WHO WE ARE</h1>
          <p className="text-lg text-center mb-12">Meet the talented individuals behind our business.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src="/images/lady.jpg" alt="John Smith" className="w-full h-56 object-cover rounded-t-lg" />
              <h2 className="text-xl font-bold mt-4">John Smith</h2>
              <p className="text-gray-700">Founder & CEO</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src="/images/lady2.jpg" alt="Kendrica Johnson" className="w-full h-56 object-cover rounded-t-lg" />
              <h2 className="text-xl font-bold mt-4">Kendrica Johnson</h2>
              <p className="text-gray-700">Camera Technician</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src="/images/t4.jpg" alt="Mathew Douglas" className="w-full h-56 object-cover rounded-t-lg" />
              <h2 className="text-xl font-bold mt-4">Mathew Douglas</h2>
              <p className="text-gray-700">Chief Operating Officer</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img src="/images/b3.jpg" alt="Kristen Borman" className="w-full h-56 object-cover rounded-t-lg" />
              <h2 className="text-xl font-bold mt-4">Kristen Borman</h2>
              <p className="text-gray-700">Head of Marketing</p>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="bg-yellow-100 h-[50px] w-full my-8"></div>

        {/* Connect with Us Section */}
        <div>
          <h1 className="text-4xl font-bold text-center mb-8">CONNECT WITH US</h1>
          <p className="text-lg text-center mb-12">Our dedicated team is here to assist you.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/images/e.png"
                alt="Email Icon"
                className="mx-auto mb-4"
                style={{ width: "50px", height: "50px" }}
              />
              <h2 className="text-xl font-bold text-center">Email Us</h2>
              <p className="text-center">We're ready to answer your questions.</p>
              <p className="text-center">
                <a href="mailto:support@email.com" className="text-blue-600">support@email.com</a>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/images/s.png"
                alt="Phone Icon"
                className="mx-auto mb-4"
                style={{ width: "50px", height: "50px" }}
              />
              <h2 className="text-xl font-bold text-center">Call Us</h2>
              <p className="text-center">Available Mon - Fri, 8am - 5pm.</p>
              <p className="text-center">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/images/l.png"
                alt="Location Icon"
                className="mx-auto mb-4"
                style={{ width: "50px", height: "50px" }}
              />
              <h2 className="text-xl font-bold text-center">Visit Us</h2>
              <p className="text-center">Stop by our office for a chat.</p>
              <p className="text-center">123 Photo Street, SF, CA</p>
            </div>
          </div>

          {/* Map Image */}
          <div className="mt-12">
            <img
              src="/images/M.jpg"
              alt="Map showing location in Portland, Oregon"
              className="w-full lg:w-[600px] h-auto rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
