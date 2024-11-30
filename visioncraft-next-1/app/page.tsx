import Navbar from "./Navbar/page";
import Hero from "./Hero/page";
import Services from "./Services/page";
import Footer from "./Footer/page";
import Testimonial from "./Testimonial/Testimonial";
import React from 'react';
import Specialpoint from './Specialpoint/page';
import Herosection from './Herosection/page';

export default function Home() {
  return (
    <div className="bg-yellow-100">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Special Points */}
      <Specialpoint />

      {/* Services Section */}
      <Services />

      {/* Hero Section */}
      <Herosection />

      {/* Testimonials Section */}
      <Testimonial />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
