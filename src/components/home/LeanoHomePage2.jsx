import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import { useDropPhotoAnimated, useHeroLeftAnimated } from "../../hooks/gsap";

const LeanoHomePage2 = () => {
  const heroInfoRef = useRef(null);
  const heroLeftRef = useRef(null);
  const buttonRef = useRef(null);

  const photo1 = useRef(null);
  const photo2 = useRef(null);
  const photo3 = useRef(null);
  const photo4 = useRef(null);
  const photo5 = useRef(null);
  const photo6 = useRef(null);

  const photoArr = [photo1, photo2, photo3, photo4, photo5, photo6];

  // useHeroLeftAnimated(heroLeftRef, heroInfoRef);
  // useDropPhotoAnimated(photoArr, heroInfoRef);

  return (
    <section className="hero" ref={heroInfoRef}>
      <div className="hero-info py-5">
        <div className="text-base font-semibold text-customGrey  md:px-10 px-5  hero-left" ref={heroLeftRef}>
          <h2 className="font-semibold md:text-3xl text-base text-black">Innovative Energy  Solutions for a Sustainable Future</h2>
          <p className="mt-3 text-justify">
            Leano Energy, a 100% black youth-owned company and LEVEL 1 BBBEE 
            contributor, specializes in providing comprehensive energy solutions. 
            We supply bulk fuels, diesel, paraffin, oils, and lubricants to 
            industries across Gauteng, Mpumalanga, Limpopo, and the North West. 
            Our innovative approach not only reduces costs but also ensures 
            operational efficiency with our tailored fuel management services.
          </p>
          <p>
            Our solutions serve sectors such as mining, agriculture, logistics, 
            airports, and municipalities, helping businesses manage fuel 
            consumption and streamline their operations.
          </p>
        </div>
        <div className="hero-right photos">
          <div className="photo one" style={{ backgroundImage: 'url("https://images.pexels.com/photos/28964677/pexels-photo-28964677/free-photo-of-silhouetted-construction-workers-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }} ref={photo1}></div>
          <div className="photo two" style={{ backgroundImage: 'url("https://images.pexels.com/photos/6195131/pexels-photo-6195131.jpeg?auto=compress&cs=tinysrgb&w=600")' }} ref={photo2}></div>
          <div className="photo three" style={{ backgroundImage: 'url("https://images.pexels.com/photos/21811094/pexels-photo-21811094/free-photo-of-gas-pump-nozzle-in-the-cars-filler-neck.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }} ref={photo3}></div>
          <div className="photo four" style={{ backgroundImage: 'url("https://images.pexels.com/photos/5244002/pexels-photo-5244002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }} ref={photo4}></div>
          <div className="photo five" style={{ backgroundImage: 'url("https://images.pexels.com/photos/12689699/pexels-photo-12689699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }} ref={photo5}></div>
          <div className="photo six" style={{ backgroundImage: 'url("https://images.pexels.com/photos/12233662/pexels-photo-12233662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")' }} ref={photo6}></div>
        </div>
      </div>
    </section>
  );
};

export default LeanoHomePage2;
