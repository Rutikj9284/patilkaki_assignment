// src/components/HeroSection.jsx
import React from 'react';
import { CgMenuRight } from 'react-icons/cg';
import Animation from './Animation';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-4 px-4">
          <div className="flex items-center">
            <img src='/logo.jpg' alt='logo' height='40px' width='40px' className='mr-3' />
            <h1 className="text-4xl md:text-5xl font-bold g-txt">CleverBooks</h1>
          </div>
          <CgMenuRight size={40} />
        </div>
        <div className="text-center mt-10">
          <h2 className="text-4xl md:text-5xl font-bold">Innovate Your Inventory Management with Crest</h2>
          <div className='mt-4'>
            <Animation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
