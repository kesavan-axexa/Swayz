import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { FaIndustry } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const LeanoHomePage = () => {
  useEffect(() => {
    // GSAP scroll animation for each scroll-reveal element
    gsap.utils.toArray(".scroll-reveal").forEach((element) => {
      gsap.fromTo(
        element,
        {
          autoAlpha: 0, // Handles visibility as well as opacity
          y: 50,
          rotateX: 15, // Reduced rotation for smoother animation
        },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2, // Slightly longer duration for smoother transition
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="px-4 bg-gradient-to-r from-gray-100 via-purple-100 to-white lg:py-10 md:py-16 py-16 md:mt-0 mt-[450px] scroll-container">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit" // Adding exit state for when elements leave the viewport
        transition={{ staggerChildren: 0.1 }} // Increased stagger for smoother animation
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-6"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EnergySolutionsBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

// Reusable animated Block component
const Block = ({ className, children, ...rest }) => {
  return (
    <motion.div
      className={twMerge(
        "col-span-4 rounded-lg border bg-gradient-to-r from-gray-100 to-gray-200 p-6 shadow-lg scroll-reveal", // softer gradient colors
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

// Header section
const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 bg-gradient-to-r from-gray-100 via-purple-100 to-white text-black md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=Alex"
      alt="avatar"
      className="mb-4 size-14 rounded-full border-2 border-gray-200"
    />
    <h1 className="mb-8 text-4xl font-bold leading-tight">Leano Energy</h1>
    <p className="mb-4">
      Innovating energy solutions for a brighter and more sustainable future.
    </p>
    <a href="#" className="flex items-center gap-1 text-black hover:underline">
      Get in touch <FiPhone />
    </a>
  </Block>
);

// Social media and links section
const SocialsBlock = () => (
  <>
    <Block className="col-span-6 md:col-span-3 md:block hidden">
      <a
        href="#"
        className="flex h-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 text-4xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        <FiMapPin />
      </a>
    </Block>
    <Block className="col-span-6 md:col-span-3 md:block hidden">
      <a
        href="#"
        className="flex h-full items-center justify-center rounded-lg bg-gradient-to-r from-green-400 to-green-500 text-4xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        <FaIndustry />
      </a>
    </Block>
    <Block className="col-span-6 md:col-span-3 md:block hidden">
      <a
        href="#"
        className="flex h-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-400 to-purple-500 text-4xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        <LuFuel />
      </a>
    </Block>
    <Block className="col-span-6 md:col-span-3 md:block hidden">
      <a
        href="#"
        className="flex h-full items-center justify-center rounded-lg bg-gradient-to-r from-pink-400 to-pink-500 text-4xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        <FiMail />
      </a>
    </Block>
  </>
);

// About section - company information
const AboutBlock = () => (
  <Block className="col-span-12 text-lg leading-snug bg-gradient-to-br from-gray-300 via-purple-100 to-white text-black">
    <p>
      <strong>Leano Energy</strong> is revolutionizing the energy industry by
      delivering innovative and sustainable energy solutions to power the
      future. We serve a range of sectors including manufacturing, agriculture,
      and transport, ensuring our clients achieve maximum efficiency and cost
      savings.
    </p>
  </Block>
);

// Location section
const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 relative bg-gradient-to-r from-gray-300 via-purple-200 to-white text-black md:col-span-3">
    <div
      className="absolute top-0 left-0 z-10"
      style={{
        backgroundImage: 'url("/cleaningImages/vector2.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "80px 80px",
        width: "80px",
        height: "80px",
        opacity: 0.4,
      }}
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
      <FiMapPin className="text-3xl text-center" />
      <p className="text-lg text-center">Global Headquarters in South Africa</p>
    </div>
  </Block>
);

// Energy Solutions section
const EnergySolutionsBlock = () => (
  <Block
    className="col-span-12 md:col-span-9 relative bg-black bg-opacity-30"
    style={{
      backgroundImage:
        'url("/leanoEnergyProfile/ComparativeAdvantages_1.jpeg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div
      className="absolute inset-0 bg-black opacity-70 z-0"
      style={{ mixBlendMode: "multiply" }}
    ></div>
    <p className="text-lg relative z-10 text-white">
      Leano Energy provides cutting-edge energy solutions to meet the evolving
      needs of industries such as mining, agriculture, and logistics. Our focus
      is on sustainable energy, offering custom pricing and solutions to reduce
      carbon footprint and energy costs.
    </p>
  </Block>
);

// Logo component
const Logo = () => (
  <svg
    width="50"
    height="auto"
    viewBox="0 0 50 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto mb-12 fill-black"
  >
    <path
      d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
      stopColor="#FFFFFF"
    ></path>
    <path
      d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
      stopColor="#FFFFFF"
    ></path>
  </svg>
);

// Footer section
const Footer = () => (
  <footer className="mt-12 text-center">
    <p className="text-gray-600">
      Powered by <span className="text-black">Leano Energy</span>. Creating a
      sustainable future.
    </p>
  </footer>
);

export default LeanoHomePage;
