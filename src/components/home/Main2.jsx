import React from 'react';
import backgroundImage from '../../assets/image1.jpg';

const Main2 = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center my-10 mx-10 rounded-lg py-20 text-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay Div */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

        <div className="relative z-10 text-center"> {/* Ensure text is above the overlay */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Build Your Dream Projects with SWAYZ Construction
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Premium construction solutions tailored to your vision.
          </p>
          <div className="flex flex-wrap justify-center mt-10 gap-6">
            <div className="bg-white text-black rounded-full px-6 py-2 shadow-md">
              <h3 className="text-xl font-bold">500+ Projects Completed</h3>
            </div>
            <div className="bg-white text-black rounded-full px-6 py-2 shadow-md">
              <h3 className="text-xl font-bold">Sustainable Construction</h3>
            </div>
            <div className="bg-white text-black rounded-full px-6 py-2 shadow-md">
              <h3 className="text-xl font-bold">Cost-Effective Solutions</h3>
            </div>
          </div>

          {/* Call to action button */}
          <div className="mt-8">
            <button className="bg-yellow-500 hover:bg-yellow-600 font-semibold text-white text-black px-6 py-2 rounded-lg text-lg">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;
