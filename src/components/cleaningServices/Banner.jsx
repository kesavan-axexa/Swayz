import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import logo from "/cleaningImages/CleaningLogo.jpg"; // Update this path to your logo
import cleaningBanner from "/cleaningImages/CleaningBanner.jpg"; // Update this to your new banner image

const Banner = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl={cleaningBanner} // Use the new banner image
        subheading="Swayz Cleaning Services"
      ></TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <img src={logo} alt="Company Logo" className="mb-4 h-24 w-auto" />
      <p className="mb-2 text-customGolden ext-center font-bold uppercase text-xl md:mb-4 md:text-4xl">
        {subheading}
      </p>
      <p className="text-center text-lg font-bold md:text-2xl">
        Swayz Cleaning Services is a division of the Swayz Group, committed to
        providing top-notch cleaning solutions for commercial and residential
        properties. With a dedication to excellence and a passion for
        cleanliness, <span className="text-customGolden">we deliver tailored cleaning services that exceed
        expectations.</span>  Our comprehensive range of services ensures that every
        client receives customized solutions to meet their unique needs.
      </p>
    </motion.div>
  );
};

export default Banner;
