import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaClipboardCheck, FaTools, FaClock, FaSmile } from "react-icons/fa";
import "./Accordian.css";

const Accordion = () => {
  const [height, setHeight] = useState("140vh"); // Default height for smaller screens

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
      accordion.addEventListener("click", () => {
        const text = accordion.querySelector(".description");
        const isOpen = text.style.maxHeight;

        closeAllAccordions();
        if (!isOpen) {
          text.style.opacity = "1";
        } else {
          text.style.opacity = "0";
        }
      });

      const handleResize = () => {
        const windowWidth = window.innerWidth;
      
        if (windowWidth <= 321) {
          // Very small mobile devices (up to 320px)
          setHeight("450vh");
        } else if (windowWidth > 320 && windowWidth <= 375) {
          // Small mobile devices (320px to 375px)
          setHeight("430vh");
        } else if (windowWidth > 375 && windowWidth <= 425) {
          // Medium mobile devices (375px to 425px)
          setHeight("460vh");
        } else if (windowWidth > 425 && windowWidth <= 480) {
          // Large mobile devices (426px to 480px)
          setHeight("430vh");
        } else if (windowWidth > 480 && windowWidth <= 768) {
          // Small tablets (481px to 768px)
          setHeight("320vh");
        } else if (windowWidth > 768 && windowWidth <= 1024) {
          // Tablets or small laptops (769px to 1024px)
          setHeight("260vh");
        } else if (windowWidth > 1024 && windowWidth <= 1440) {
          // Laptops and small desktops (1025px to 1440px)
          setHeight("325vh");
        } else if (windowWidth > 1440 && windowWidth <= 1920) {
          // Full HD screens (1441px to 1920px)
          setHeight("360vh");
        } else if (windowWidth > 1920 && windowWidth <= 2560) {
          // 2K resolution (1921px to 2560px)
          setHeight("150vh");
        } else if (windowWidth > 2560 && windowWidth <= 3840) {
          // 4K resolution (2561px to 3840px)
          setHeight("250vh");
        } else {
          // Anything beyond 4K (larger than 3840px)
          setHeight("100vh");
        }
      };
      
      

      // Set initial height based on the current window size
      handleResize();

      // Add event listener to update height on window resize
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    function closeAllAccordions() {
      accordions.forEach((accordion) => {
        const text = accordion.querySelector(".description");
        text.style.maxHeight = null;
        text.style.opacity = "0";
      });
    }

    const getMarginBottom = () => {
      const width = window.innerWidth;
      if (width <= 480) return -380;
      if (width <= 768) return -270;
      return -250;
    };

    // GSAP Animation Timeline
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".accordions",
          pin: true,
          start: "top 15%",
          scrub: 0.5,
        },
      })
      .to(".accordion", {
        marginBottom: getMarginBottom(),
        stagger: 0.5,
        ease: "power1.out",
      });

    return () => {
      accordions.forEach((accordion) => {
        accordion.removeEventListener("click", () => {});
      });
      ScrollTrigger.killAll();
    };
  }, []);

  const steps = [
    {
      title: "Initial Consultation",
      description:
        "We start with understanding your cleaning needs through a detailed consultation.",
      icon: <FaClipboardCheck />,
      url: "/cleaningImages/gif1.gif",
    },
    {
      title: "Customized Planning",
      description:
        "A tailored cleaning plan is developed to meet your specific requirements.",
      icon: <FaTools />,
      url: "/cleaningImages/gif3.gif",
    },
    {
      title: "Scheduled Service",
      description:
        "We organize our cleaning appointments at a time convenient only for you.",
      icon: <FaClock />,
      url: "/cleaningImages/gif1.gif",
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "Enjoy a clean space with our satisfaction guarantee, ensuring top-notch results.",
      icon: <FaSmile />,
      url: "/cleaningImages/gif3.gif",
    },
  ];

  return (
    <div style={{ height, padding: "10px 20px" }} className="md:block hidden">
      <div className="mx-auto max-w-3xl">
        <h2 className="md:text-4xl text-2xl font-bold text-center mb-6">
          How We Work
        </h2>
        <p className="text-customGrey md:text-lg text-base font-semibold text-center mb-10">
          Discover our step-by-step process to ensure your space is cleaned to
          perfection.
        </p>
        <div className="accordions py-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="accordion flex flex-col space-y-6 md:flex-row items-center border-b-2 py-6"
            >
              <div className="content-left md:w-1/2 p-4">
                <div className="text-white text-4xl flex flex-col">
                  {step.icon}
                </div>
                <div className="font-bold text-white md:text-4xl mt-8 text-xl">
                  {step.title}
                </div>
                <div className="description md:text-lg mt-8 text-sm text-white max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                  {step.description}
                </div>
              </div>
              <div className="content-right md:w-1/2 p-4 flex justify-center">
                <img
                  src={`${step.url}`}
                  alt={step.title}
                  className="w-48 h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
