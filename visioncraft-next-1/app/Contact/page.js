'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = [
    {
      imgSrc: "/images/e.png",
      altText: "Email Icon",
      title: "Email Us",
      description: "We're ready to answer your questions.",
      link: { href: "mailto:support@email.com", text: "support@email.com" },
    },
    {
      imgSrc: "/images/s.png",
      altText: "Phone Icon",
      title: "Call Us",
      description: "Available Mon - Fri, 8am - 5pm.",
      details: "+1 (555) 123-4567",
    },
    {
      imgSrc: "/images/l.png",
      altText: "Location Icon",
      title: "Visit Us",
      description: "Stop by our office for a chat.",
      details: "123 Photo Street, SF, CA",
    },
  ];

  return (
    <div className="bg-yellow-100 min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-yellow-100 shadow-lg rounded-lg overflow-hidden max-w-3xl mx-auto p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Contact Info Section */}
            <div className="lg:w-1/2">
              <h2 className="text-lg font-semibold text-center lg:text-left mb-4">Contact Us</h2>
              <div className="space-y-2">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img src={info.imgSrc} alt={info.altText} className="w-6 h-6" />
                    <div>
                      <h3 className="font-semibold text-xs">{info.title}</h3>
                      <p className="text-xs">{info.description}</p>
                      {info.link ? (
                        <a href={info.link.href} className="text-blue-600 text-xs hover:underline">{info.link.text}</a>
                      ) : (
                        <p className="text-xs">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="lg:w-1/2">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative mb-4 lg:mb-0 md:w-1/2">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 text-xs text-gray-700 bg-yellow-100 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 hover:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label className="absolute text-xs text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3.5 origin-[0] bg-yellow-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                      First Name
                    </label>
                  </div>
                  <div className="relative mb-4 lg:mb-0 md:w-1/2">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full px-3 py-2 text-xs text-gray-700 bg-yellow-100 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 hover:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label className="absolute text-xs text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3.5 origin-[0] bg-yellow-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Last Name
                    </label>
                  </div>
                </div>

                <div className="relative mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 text-xs text-gray-700 bg-yellow-100 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 hover:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label className="absolute text-xs text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3.5 origin-[0] bg-yellow-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Email
                  </label>
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="block w-full px-3 py-2 text-xs text-gray-700 bg-yellow-100 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 hover:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label className="absolute text-xs text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3.5 origin-[0] bg-yellow-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Subject
                  </label>
                </div>

                <div className="relative mb-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="block w-full px-3 py-2 text-xs text-gray-700 bg-yellow-100 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 hover:border-blue-600 peer"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute text-xs text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 left-3.5 origin-[0] bg-yellow-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gray-900 text-yellow-100 py-2 px-4 rounded-md mt-4 hover:bg-gray-600 transition duration-300 ease-in-out text-xs"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
