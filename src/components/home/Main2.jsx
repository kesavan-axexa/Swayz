import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import backgroundImage from '../../assets/image1.jpg';

const Main2 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  // Trigger animation when the element is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Animation variants for pop-up effect
  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 }, // Start below the position, slightly smaller
    visible: {
      opacity: 1,
      y: 0,
      scale: 1, // Animate to normal position and size
      transition: {
        duration: 1, // Slower animation for smoothness
        ease: 'easeOut', // Smooth easing
        when: 'beforeChildren',
        staggerChildren: 0.2, // Slight delay between each child element for cascading effect
      },
    },
  };

  return (
    <div>
      <div
        className="relative bg-cover h-[80vh] bg-center my-10 md:mx-20 lg:mx-26 mx-5 rounded-lg py-10 md:py-20 text-white flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        ref={ref}
      >
        {/* Overlay Div */}
        <div className="absolute inset-0 h-full bg-black opacity-80 rounded-lg"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex justify-center flex-col text-center max-w-5xl px-4"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold"
            variants={variants}
          >
            Build Your Dream Projects with <span className='text-customGolden'>SWAYZ Construction</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl"
            variants={variants}
          >
            Premium construction solutions tailored to your vision.
          </motion.p>

          {/* Animate the statistics */}
          <motion.div
            className="flex flex-wrap justify-center mt-8 gap-4 sm:gap-6"
            variants={variants}
          >
            <motion.div
              className="bg-white text-black rounded-full px-4 py-2 sm:px-6 shadow-md"
              variants={variants}
            >
              <h3 className="text-sm sm:text-base md:text-xl font-bold">500+ Projects Completed</h3>
            </motion.div>
            <motion.div
              className="bg-white text-black rounded-full px-4 py-2 sm:px-6 shadow-md"
              variants={variants}
            >
              <h3 className="text-sm sm:text-base md:text-xl font-bold">Sustainable Construction</h3>
            </motion.div>
            <motion.div
              className="bg-white text-black rounded-full px-4 py-2 sm:px-6 shadow-md"
              variants={variants}
            >
              <h3 className="text-sm sm:text-base md:text-xl font-bold">Cost-Effective Solutions</h3>
            </motion.div>
          </motion.div>

          {/* Animate the Call to Action button */}
          <motion.div
            className="mt-6 sm:mt-8"
            variants={variants}
          >
            <button className="bg-yellow-700 hover:bg-yellow-800 font-semibold text-white px-4 py-2 sm:px-6  sm:py-3 rounded-lg text-base sm:text-lg">
              Explore More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Main2;
