import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Card = ({ title, description, customStyle }) => {
  return (
    <motion.div
      className={`relative bg-white shadow-lg rounded-lg p-5 ${customStyle}`}
    >
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const CardOverlap = () => {
  // Get the current scroll position
  const { scrollYProgress } = useViewportScroll();

  // Define the initial separated positions and overlapping transformations on scroll
  const card1Y = useTransform(scrollYProgress, [0, 0.5], [0, 150]); // Moves down
  const card2Y = useTransform(scrollYProgress, [0, 0.5], [100, 75]); // Moves to overlap with card 1
  const card3Y = useTransform(scrollYProgress, [0, 0.5], [200, 0]); // Moves to overlap with card 2

  return (
    <div className="h-[200vh] flex justify-center items-center">
      <div className="relative w-full max-w-md">
        {/* Card 1 */}
        <motion.div style={{ y: card1Y }} className="absolute z-30">
          <Card
            title="Explore the World"
            description="Discover amazing places around the globe and plan your next adventure."
            customStyle="transform translate-x-6"
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div style={{ y: card2Y }} className="absolute z-20">
          <Card
            title="Innovative Solutions"
            description="We offer creative and cutting-edge solutions for all your business needs."
            customStyle="transform translate-x-3"
          />
        </motion.div>

        {/* Card 3 */}
        <motion.div style={{ y: card3Y }} className="absolute z-10">
          <Card
            title="Join the Community"
            description="Connect with like-minded individuals and grow your professional network."
            customStyle=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CardOverlap;
