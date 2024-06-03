// src/components/CtaSection.jsx
import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Grow Faster Than You Think</h2>
        <p className="mt-4">Join us today and take your inventory management to the next level.</p>
        <a href='https://www.getcrest.ai'>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded">Get Started</button>
        </a>
      </div>
    </section>
  );
};

export default CTA;
