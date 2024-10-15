import React, { useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const About = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(/objective_image.jpg)`, // Corrected this line
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 "></div>

      <div className="relative z-10">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-white md:pt-20 pt-10">
        ABOUT SWAYZ SECURITY SERVICES
        <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-white rounded-full"></div>

        </h2>
        <HorizontalScrollObjectives />
      </div>
    </div>
  );
};

const HorizontalScrollObjectives = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [displayCount, setDisplayCount] = useState(2); // Initial display count

  // Update display count based on scroll progress
  React.useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.1 && displayCount < objectives.length) {
        setDisplayCount(objectives.length); // Show all cards
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [scrollYProgress, displayCount]);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Adjust transform for two cards

  return (
    <section ref={targetRef} className="relative h-[200vh] -mt-10">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 px-10">
          {objectives.slice(0, displayCount).map((objective, index) => (
            <ObjectiveCard key={index} objective={objective} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ObjectiveCard = ({ objective }) => {
  return (
    <div className="group relative h-96 sm:w-[calc(45vw-30px)] w-[calc(45vw-30px)] p-6 overflow-hidden rounded-lg bg-cover bg-center transition-transform duration-300 transform hover:scale-105"
       >
      <div className="absolute inset-0 bg-[#272727] opacity-95 rounded-lg" />
      <div className="absolute flex flex-col justify-center items-center h-full text-center p-4 ">
        <p className="text-base sm:text-lg font-bold text-white text-justify">
          {objective} {/* Display full text with justification */}
        </p>
      </div>
    </div>
  );
};



const objectives = [
  "We offer a wide range of services to meet the diverse needs of our clients. In addition to providing comprehensive security services, we also specialize in professional research and security analysis. This allows us to assess and identify potential risks and vulnerabilities, enabling us to develop tailored security strategies for our clients.",
  "We understand that each client has unique security requirements, and we take the time to conduct thorough assessments to determine the most effective solutions. Furthermore, we offer a selection of cutting-edge detection equipment and expert advice on security systems such as alarms, safes, and other safety materials.",
  "In a world where safety and security are of utmost importance, we are dedicated to providing top-notch protection for various sectors including shopping centres, mining complexes, and more. With our expertise and experience, we understand the unique challenges that each industry faces when it comes to security. Shopping centres, in particular, require comprehensive surveillance and security measures due to their size and the potential for large crowds.",
  "Additionally, we provide VIP services and close protection for high-profile individuals or groups. Safety is our top priority, which is why we also offer transportation and protection services for tourists or tourist groups visiting our country. At Swayz Security Services we recognize that the sources of imperilment for the security of individuals, assets, and businesses are diverse. That's why we specialize in addressing common crime, crimes against the state, and business/industrial crime.",
];



export default About;
