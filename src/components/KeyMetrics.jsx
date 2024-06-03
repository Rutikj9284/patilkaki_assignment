// src/components/KeyMetricsSection.jsx
import React from 'react';
import { GiAutomaticSas } from "react-icons/gi";
import { FcIdea } from "react-icons/fc";
import { MdIntegrationInstructions } from "react-icons/md";
const KeyMetrics = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Crest?</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add metrics as needed */}
          <div className="p-6">
          <GiAutomaticSas size={30}/>
            <h3 className="text-xl font-semibold mt-4">Automation</h3>
            <p className="mt-2 text-lg">Crest automates crucial processes like demand forecasting, purchase planning, and order generation, reducing manual workload and errors​.</p>
          </div>
          <div className="p-6">
          <FcIdea size={30}/>
            <h3 className="text-xl font-semibold mt-4">Accuracy and Efficiency</h3>
            <p className="mt-2 text-lg">With accurate demand predictions and efficient inventory management, Crest helps businesses maintain optimal stock levels, minimizing costs associated with overstocking and stockouts​.</p>
          </div>
          <div className="p-6">
          <MdIntegrationInstructions size={30}/>
            <h3 className="text-xl font-semibold mt-4">Seamless Integration: </h3>
            <p className="mt-2 text-lg">Crest works smoothly with a wide range of platforms, providing comprehensive insights and enabling better decision-making through custom dashboards​ </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
