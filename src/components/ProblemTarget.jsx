import React from 'react';


// Accurate Demand Forecasting: Predict future demand with unmatched accuracy.
// Automated Purchase Planning: Automate your purchase order generation.
// Custom Dashboards: Visualize data in a way that suits your business needs.
// Easy Integration: Works with various store, fulfillment, and analytics platforms.
// Improved Inventory Management: Ensures optimal stock levels by anticipating demand and monitoring stock in real-time​ 
const ProblemTarget = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Features of Crest</h2>
        <div className="mt-10">
          {/* Add tabs and content as needed */}
          <div className="flex justify-center space-x-4 text-black">
            <button className="bg-gray-200 p-2 rounded text-lg"><span className='font-bold'>Accurate Demand Forecasting:</span> Predict future demand with unmatched accuracy.</button>
            <button className="bg-gray-200 p-2 rounded text-lg"><span className='font-bold'>Automated Purchase Planning:</span> Automate your purchase order generation.</button>
            <button className="bg-gray-200 p-2 rounded text-lg"> <span className='font-bold'>Custom Dashboards: </span>Visualize data in a way that suits your business needs.
Easy Integration: Works with various store, fulfillment, and analytics platform</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemTarget;
