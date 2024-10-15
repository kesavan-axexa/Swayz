import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaAward,
  FaCheckCircle,
  FaHandshake,
  FaLightbulb,
  FaPeopleCarry,
  FaRecycle,
  FaRocket,
  FaShieldAlt,
  FaUserShield,
} from "react-icons/fa";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CoreValues = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP animation for the core values cards
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 }, // Start state
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play none none reverse",
              once: false,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  // Array for each core value with image, title, and description
  const coreValuesData = [
    {
      icon: <FaAward className="" />, // Icon

      image: "/cleaningImages/SCard1.jpg", // Replace with actual image paths
      title: "Excellence",
      description:
        "We are dedicated to delivering exceptional service and exceeding expectations in everything we do. We strive for excellence in quality, and customer satisfaction.",
    },
    {
      icon: <FaShieldAlt className="" />, // Icon

      image: "/cleaningImages/SCard1.jpg", // Replace with actual image paths
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and ethical behavior. Integrity is at the heart of our interactions with clients, employees, and partners.",
    },
    {
      icon: <FaPeopleCarry className="" />, // Icon

      image: "/cleaningImages/SCard1.jpg", // Replace with actual image paths
      title: "Teamwork",
      description:
        "We foster a collaborative and supportive work environment where every team member is valued, empowered, and respected.",
    },
    {
      icon: <FaCheckCircle className="" />, // Icon

      image: "/cleaningImages/SCard1.jpg", // Replace with actual image paths
      title: "Customer Focus",
      description:
        "We prioritize the needs and satisfaction of our clients above all else. By listening attentively, understanding their requirements, and delivering personalized solutions.",
    },
    {
      icon: <FaRocket className="" />, // Icon (My Idea)
      image: "/cleaningImages/SCard1.jpg", // Replace with actual image paths
      title: "Continuous Growth",
      description:
        "We believe in constant learning and development, encouraging innovation and personal growth at every level. This drives us forward and helps us adapt to a changing world.",
    },
    {
      icon: <FaHandshake className="" />, // Icon

      image: "/cleaningImages/SCard1.jpg", // Replace with actual image paths
      title: "Professionalism",
      description:
        "We maintain the highest standards of professionalism in our conduct, appearance, and communication. Our team members are knowledgeable, courteous, and respectful at all times.",
    },
    {
      icon: <FaLightbulb className="" />, // Icon

      image: "/cleaningImages/SCard1.jpg", // Replace with actual image paths
      title: "Innovation",
      description:
        "We embrace innovation and continuous improvement in our processes, technologies, and services.",
    },
    {
      icon: <FaRecycle className="" />, // Icon
      image: "/cleaningImages/SCard1.jpg", // Replace with actual image paths
      title: "Sustainability",
      description:
        "We are committed to environmental sustainability and responsible stewardship of natural resources.",
    },
    {
      icon: <FaUserShield className="" />, // Icon
      image: "/cleaningImages/SCard1.jpg", // Replace with actual image paths
      title: "Safety",
      description:
        "We prioritize the safety and well-being of our employees, clients, and communities.",
    },
  ];

  return (
    <div className="relative py-10 md:mt-20 mt-10 bg-yellow-50 bg-opacity-50">
      <div className="relative z-10">
        <div className="md:px-10 px-5 text-center text-customGolden md:text-3xl text-xl font-bold my-5">
          OUR CORE VALUES
          <div className="mx-auto mt-2 w-[120px] h-[2px] bg-customGolden rounded-full"></div>
        </div>
        <p className=" text-customGrey font-semibold text-md text-center">
            These core values guide our decisions, actions, and relationships, shaping the culture and identity of Swayz Cleaning Services.
          </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-6 py-10 md:px-10 px-5">
          {coreValuesData.map((value, index) => (
            <div
              key={index}
              className="bg-white border rounded-3xl relative overflow-hidden"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              {/* Image at the top */}
              <img
                src={value.image}
                alt={value.title}
                className="w-full h-80 object-cover rounded-3xl"
              />
              {/* Title */}
              <div className="my-10">
                <h3 className="font-bold mx-10  text-customBlack mt-5 mb-3 text-xl">
                  {value.title}
                </h3>
                {/* Description */}
                <p className="text-sm mx-10  font-semibold text-customGrey mb-4">
                  {value.description}
                </p>
                {/* Action Button */}
                <button className="bg-orange-50 border mx-10 text-4xl  text-orange-700 rounded-md p-3">
                  <span className="text-2xl ">{value.icon}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
