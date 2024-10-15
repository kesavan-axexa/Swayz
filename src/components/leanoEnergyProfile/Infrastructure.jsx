import React from "react";
import { motion } from "framer-motion";
import infrastructure_1 from '/leanoEnergyProfile/infrastructure_1.jpeg';

const Infrastructure = () => {
  return (
    <motion.div
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <img
        src={infrastructure_1}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        style={{ objectPosition: "center 30%" }} 
      />
      <div className="absolute inset-0 bg-black opacity-70 -z-10"></div>
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl">
            INFRASTRUCTURE
          </h2>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Part of the services offered at Leano Energy is installation of new
            and reconditioned diesel storage tanks and bowsers on our clients
            premises for their convenience. We install above ground tanks in all
            sizes, we cater to any specification that our clients require. All
            our diesel tanks are coupled with pump sets.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Infrastructure;
