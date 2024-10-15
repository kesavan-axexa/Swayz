import React from 'react';
import { FaLink } from 'react-icons/fa';

const LeanoEnergyContactInfo = () => {
  return (
    <div className="bg-gray-100  flex items-center justify-center">
      <div className="bg-[#191919] p-8 rounded-lg shadow-md w-full mx-auto md:max-w-none md:w-full lg:w-3/4 xl:w-2/3">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-10 text-white text-center">Contact Us</h2>
        <p className="text-lg text-gray-300 mb-6 text-center">For further information, reach out to us:</p>
        
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-400">Email:</label>
              <p className="mt-1 p-2 w-full text-lg text-white border border-gray-500 rounded">{`info@leanoenergy.com`}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Website:</label>
              <p className="mt-1 p-2 w-full text-lg text-white border flex items-center gap-3 border-gray-500 rounded">{`www.leanoenergy.com`} <a target='blank' href="https://leanoenergy.com/"><FaLink />
              </a></p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-400">Phone:</label>
              <p className="mt-1 p-2 w-full text-lg text-white border border-gray-500 rounded">010 006 5983</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Mobile:</label>
              <p className="mt-1 p-2 w-full text-lg text-white border border-gray-500 rounded">061 427 6602</p>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400">Address:</label>
            <p className="mt-1 p-2 w-full text-lg text-white border border-gray-500 rounded">120 11th Street, Parkmore, Sandton, 2196</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeanoEnergyContactInfo;
