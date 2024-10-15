import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const OurMisson = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // Animation for each div
        gsap.utils.toArray(".animated").forEach((element) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
              },
            }
          );
        });
      }, []);
    
  return (
    <div className="w-full bg-yellow-50 p-8"> {/* Change here: Use w-full */}
      <div className="animated md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold mb-4">
        OUR MISSION
        <div className="mx-auto mt-2 w-[120px] h-[2.5px] bg-customGolden rounded-full"></div>
      </div>

      {/* Description */}
      <p className="text-customBlack font-bold text-md text-center my-5 lg:mx-56 mx-5 animated">
        At Swayz Security Services our mission is to strive towards perfection
        and be recognized as the leader in providing comprehensive security
        solutions.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center rounded-md animated">
          <img
            src="/timeline1.jpg"
            alt="Supply Chain & Distribution"
            className="w-full h-auto lg:p-10 border-none my-3"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 lg:p-10 flex justify-center items-center">
          <div className="text-center">
            <p className="text-customGrey animated font-semibold pt-2 text-justify text-md md:text-sm lg:text-lg">
              Our Mission is driven by a deep commitment to protecting our
              clients, their assets, and their peace of mind. We understand the
              importance of maintaining a safe and secure environment, whether
              it's for individuals, businesses, or communities. In order to
              fulfill our mission, we focus on several key aspects. We
              prioritize staying up-to-date with the latest security
              technologies and solutions.
            </p>
            <p className="text-customGrey animated font-semibold pt-2 text-justify text-md md:text-sm lg:text-lg">
              Finally, we are committed to continuous training and improvement
              in order to enhance the professionalism and knowledge of our
              security personnel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMisson;
