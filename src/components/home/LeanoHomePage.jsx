import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiPhone, FiGlobe, FiMapPin } from "react-icons/fi";
import { FaIndustry } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const LeanoHomePage = () => {
  useEffect(() => {
    // GSAP scroll animation
    gsap.to(".scroll-reveal", {
      opacity: 1,
      y: 0,
      rotateX: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate About section
    gsap.from(".about-section", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-yellow-50 px-4 py-12 text-zinc-50 scroll-container">
      {/* Main content with animated blocks */}
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
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
const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 45 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        type: "spring",
        mass: 2,
        stiffness: 150,
        damping: 25,
      }}
      whileHover={{ scale: 1.05, rotate: 0.5 }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6 shadow-lg scroll-reveal",
        className
      )}
      {...rest}
    />
  );
};

// Header section
const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, welcome to Leano Energy.
    </h1>
    <a
      href="#"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact us <FiPhone />
    </a>
  </Block>
);

// Social media and links section
const SocialsBlock = () => (
  <>
    <Block className="col-span-6 bg-red-500 md:col-span-3">
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FiGlobe />
      </a>
    </Block>
    <Block className="col-span-6 bg-green-600 md:col-span-3">
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FaIndustry />
      </a>
    </Block>
    <Block className="col-span-6 bg-zinc-50 md:col-span-3">
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <LuFuel />
      </a>
    </Block>
    <Block className="col-span-6 bg-blue-500 md:col-span-3">
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <FiMapPin />
      </a>
    </Block>
  </>
);

// About section - company information
const AboutBlock = () => (
  <Block className="col-span-12 text-lg leading-snug">
    <p>
      <strong>About Leano Energy</strong> <br />
      It is believed that a country’s future is in the hands of its youth. Leano
      Energy opens doors to broaden that horizon. We bring innovative thinking
      to the industry. Leano Energy is a LEVEL 1 BBBEE contributor, 100% black
      youth-owned. We distribute bulk fuels and energy products across various
      provinces, providing solutions to industries like mining, agriculture, and
      logistics. Our goal is to offer tailored fuel management services to cut
      costs while maintaining product quality.
    </p>
  </Block>
);

// Location section
const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Based in South Africa</p>
  </Block>
);

// New block for Energy Solutions
const EnergySolutionsBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="text-lg">
      We provide energy solutions across sectors like agriculture, logistics,
      and mining. With tailored pricing and fuel management systems, we help
      clients manage energy usage efficiently.
    </p>
  </Block>
);

// Logo
const Logo = () => {
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

// Footer section
const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">Made with ❤ by Leano Energy</p>
    </footer>
  );
};

export default LeanoHomePage;
