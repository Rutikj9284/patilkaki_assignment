// src/components/ReviewsSection.jsx
import React from 'react';

const Reviews = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text">What Our Clients Say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
          {/* Add reviews as needed */}
          <div className="bg-white p-6 shadow-md rounded">
            <p className="text-lg">Samosa Party: "Crest helps us fulfill 95% of our customer demands, directly impacting our revenue readiness. The team at Crest has built a robust product with their extensive experience."</p>
            <h3 className="mt-4 text-xl font-semibold">-  Diksha Pande, Co-founder</h3>
          </div>
          <div className="bg-white p-6 shadow-md rounded">
            <p className="text-lg">"Crest's API integration worked exactly as we wanted, making real-time stock level updates seamless. Kudos to the amazing team for their quick solutions."</p>
            <h3 className="mt-4 text-xl font-semibold">- Kirti Goel, Co-founder</h3>
          </div>
          <div className="bg-white p-6 shadow-md rounded">
            <p className="text-lg">"It is the best platform I've used yet. Efficiently manages all of data. Make updation of data on real time, hence helps on real time data analysis"</p>
            <h3 className="mt-4 text-xl font-semibold">- S. K. Pandit, User</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
