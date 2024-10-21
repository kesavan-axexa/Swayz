import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBrush,
  faTools,
  faSprayCan,
  faCheckCircle,
  faBriefcase,
  faLeaf,
  faCouch,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

const HorizontalScroll = () => {
  return (
    <div className="relative">
      <HorizontalScrollServices />
    </div>
  );
};

const HorizontalScrollServices = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const transformPercentage = window.innerWidth >= 768 ? "-66%" : "-91%";

  // Move the content horizontally based on the scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["0%", transformPercentage]);

  return (
    <section ref={targetRef} className="relative md:my-20 my-10 h-[200vh]">
      {/* Fixed background image for this section only */}
      <div className="absolute bg-gradient-to-r from-gray-100 via-purple-100 to-white inset-0 bg-cover bg-center" />
      {/* Optional black overlay to adjust visibility */}

      <div className="sticky top-[12.5vh] flex h-[75vh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 px-10">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <ServiceCard
                service={service}
                icon={icons[index]}
                index={index}
              />
              {index < services.length - 1 && (
                <div className="h-72 w-[1px] bg-gray-300 mx-4 self-center" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, icon, index }) => {
  return (
    <div className="group relative h-72 flex justify-center items-center sm:w-96 w-72 overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105 bg-white">
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 flex pt-7  justify-center items-center">
        <span className="text-[160px] font-bold text-gray-400 opacity-20">
          {index + 1}
        </span>
      </div>
      <div className="absolute top-8 left-1/2 pt-2.5 transform -translate-x-1/2 z-10">
        <FontAwesomeIcon icon={icon} size="3x" className="text-gray-700" />
      </div>
      <div className="absolute flex flex-col pt-10 justify-center items-center w-full h-full text-center z-10">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">
          {service.title}
        </h3>
        <p className="text-gray-600 px-3 md:text-lg text-base mt-2">
          {service.description}
        </p>
      </div>
    </div>
  );
};

// Updated services data
const services = [
  {
    title: "Residential Cleaning",
    description:
      "Expert cleaning for homes with a focus on detailed attention to every corner.",
  },
  {
    title: "Office & Workspace Cleaning",
    description:
      "Efficient cleaning services tailored to maintain a healthy work environment.",
  },
  {
    title: "Eco-Friendly Cleaning",
    description:
      "Green cleaning services using eco-safe products for a sustainable environment.",
  },
  {
    title: "Carpet and Upholstery Services",
    description:
      "Specialized care to keep your carpets and upholstery fresh and spotless.",
  },
  {
    title: "Event Cleanup Services",
    description:
      "Post-event cleaning services to restore venues quickly and effectively.",
  },
  {
    title: "Floor Treatment & Care",
    description:
      "Professional floor cleaning and treatment to extend the life of your surfaces.",
  },
  {
    title: "Custom Cleaning Solutions",
    description:
      "Personalized cleaning packages designed to meet your specific needs.",
  },
  // New work explanation cards
  {
    title: "Our Commitment to Quality",
    description:
      "We prioritize quality in every service we offer, ensuring customer satisfaction.",
  },
  {
    title: "Tailored Cleaning Strategies",
    description:
      "We work closely with clients to develop cleaning strategies that fit their unique needs.",
  },
];
const icons = [
  faHome,
  faBriefcase,
  faLeaf,
  faCouch,
  faSprayCan,
  faTools,
  faBrush,
  faMedal,
  faCheckCircle,
];

export default HorizontalScroll;
