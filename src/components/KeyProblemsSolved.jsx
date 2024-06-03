import React from 'react';

const KeyProblemsSolved = () => {
  return (
    <section className="py-20 bg-gray-900 text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Key Problems Solved by Crest</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add problems as needed */}
          <div className="bg-white p-6 shadow-md rounded">
            <h3 className="text-xl font-semibold">Stockouts and Overstocks</h3>
            <p className="mt-4 text-lg">Crest helps businesses avoid stockouts and overstocks by providing accurate demand forecasting and inventory planning, ensuring that products are available when needed and minimizing excess inventory.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded">
            <h3 className="text-xl font-semibold">Supply Chain Inefficiencies</h3>
            <p className="mt-4 text-lg">By automating purchase and replenishment planning, Crest reduces last-mile delivery times and optimizes stock allocation across the entire supply network, leading to more efficient supply chain operations.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded">
            <h3 className="text-xl font-semibold">Manual Planning Challenges</h3>
            <p className="mt-4 text-lg">Crest eliminates the need for manual inventory planning by automating workflows, allowing businesses to focus on growth rather than spreadsheet management.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyProblemsSolved;
