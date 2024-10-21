import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Construction = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      <div className="md:px-10 px-5 text-center text-customGolden md:text-3xl mt-10 text-xl font-bold">
        OUR CONSTRUCTIONS
        <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
      </div>
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl my-10">
        <motion.div
          className="relative w-full md:w-1/2 cursor-pointer md:mr-4" // Add margin right for spacing
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/leano-profile">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/6/OS/HP/KF/147380420/independent-house-construction-service-500x500.jpg"
              alt="Large"
              className="w-full h-64 md:h-96 object-cover border-2 border-customGolden hover:border-none duration-500" // Set h-64 for small screens
            />
            <div className="absolute left-0 text-white p-2">
              <div className="font-bold md:text-xl hover:text-customGolden duration-300">
                SWAYZ CONSTRUCTION
              </div>
              <div className="font-thin">Chennai</div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="relative w-full md:w-1/2 cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link to="/leano-profile">
            <img
              src="https://www.aroundthehouse.co.za/wp-content/uploads/2024/07/house-construction-kolkata-bimg2.jpg"
              alt="Small"
              className="w-full h-64 md:h-96 object-cover border-2 border-customGolden hover:border-none duration-300" // Set h-64 for small screens
            />
            <div className="absolute left-0 text-white p-2">
              <div className="font-bold md:text-xl hover:text-customGolden duration-300">
                SWAYZ CONSTRUCTION
              </div>
              <div className="font-thin">Chennai</div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl my-10">
        <motion.div
          className="relative w-full md:w-1/2 cursor-pointer md:mr-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/leano-profile">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLaOFKRejvCwdKz0AVt9lWHjoAbkVU2Aeycg_6qBkspsU-bM5LfAz_VQJN18FpmoOhvk&usqp=CAU"
              alt="Large"
              className="w-full h-64 md:h-96 object-cover border-2 border-customGolden hover:border-none duration-300" // Set h-64 for small screens
            />
            <div className="absolute left-0 text-white p-2">
              <div className="font-bold md:text-xl hover:text-customGolden duration-300">
                SWAYZ CONSTRUCTION
              </div>
              <div className="font-thin">Chennai</div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="relative w-full md:w-1/2 cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link to="/leano-profile">
            <img
              src="https://content.jdmagicbox.com/v2/comp/pune/b8/020pxx20.xx20.240801131112.h6b8/catalogue/indrayani-construction-and-developers-chinchwad-pune-builders-dld5sfbs4m.jpg"
              alt="Small"
              className="w-full h-64 md:h-96 object-cover border-2 border-customGolden hover:border-none duration-300" // Set h-64 for small screens
            />
            <div className="absolute left-0 text-white p-2">
              <div className="font-bold md:text-xl hover:text-customGolden duration-300">
                SWAYZ CONSTRUCTION
              </div>
              <div className="font-thin">Chennai</div>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl mt-10 mb-20">
        <motion.div
          className="relative w-full md:w-1/2 cursor-pointer md:mr-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/leano-profile">
            <img
              src="https://www.ashiaestates.com/blog/wp-content/uploads/2021/10/new.jpg"
              alt="Large"
              className="w-full h-64 md:h-96 object-cover border-2 border-customGolden hover:border-none duration-300" // Set h-64 for small screens
            />
            <div className="absolute left-0 text-white p-2">
              <div className="font-bold md:text-xl hover:text-customGolden duration-300">
                SWAYZ CONSTRUCTION
              </div>
              <div className="font-thin">Chennai</div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="relative w-full md:w-1/2 cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link to="/leano-profile">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2021/2/OU/ZY/OK/9558471/house-building-construction-contractor-500x500.jpeg"
              alt="Small"
              className="w-full h-64 md:h-96 object-cover border-2 border-customGolden hover:border-none duration-300" // Set h-64 for small screens
            />
            <div className="absolute left-0 text-white p-2">
              <div className="font-bold md:text-xl hover:text-customGolden duration-300">
                SWAYZ CONSTRUCTION
              </div>
              <div className="font-thin">Chennai</div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Construction;
