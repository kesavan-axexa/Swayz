import React from 'react';
import backgroundImage from '../../assets/image1.jpg';

const Main2 = () => {
  return (
    <div>
      <div
        className="relative bg-cover h-[80vh] bg-center my-10 md:mx-20 lg:mx-26 mx-5 rounded-lg py-10 md:py-20 text-white flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay Div */}
        <div className="absolute inset-0 h-full bg-black opacity-80 rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10 flex justify-center flex-col text-center max-w-5xl px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
            Build Your Dream Projects with <span className='text-customGolden'>SWAYZ Construction</span> 
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
            Premium construction solutions tailored to your vision.
          </p>
          <div className="flex flex-wrap justify-center mt-8 gap-4 sm:gap-6">
            <div className="bg-white text-black rounded-full px-4 py-2 sm:px-6 shadow-md">
              <h3 className="text-sm sm:text-base md:text-xl font-bold">500+ Projects Completed</h3>
            </div>
            <div className="bg-white text-black rounded-full px-4 py-2 sm:px-6 shadow-md">
              <h3 className="text-sm sm:text-base md:text-xl font-bold">Sustainable Construction</h3>
            </div>
            <div className="bg-white text-black rounded-full px-4 py-2 sm:px-6 shadow-md">
              <h3 className="text-sm sm:text-base md:text-xl font-bold">Cost-Effective Solutions</h3>
            </div>
          </div>

          {/* Call to action button */}
          <div className="mt-6 sm:mt-8">
            <button className="bg-yellow-700 hover:bg-yellow-800  font-semibold text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-base sm:text-lg">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
