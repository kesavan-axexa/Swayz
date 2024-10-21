import React, { useEffect, useRef, useState } from "react";

const StickySections = () => {
  const section1Ref = useRef(null);
  const layerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);

  useEffect(() => {
    const etalonTop = section1Ref.current.getBoundingClientRect().top;
    const etalonBottom = section1Ref.current.getBoundingClientRect().bottom;
    const etalonHeight = section1Ref.current.offsetHeight;

    const toggleStickyBehavior = () => {
      const scrollPosition = window.scrollY;
      const isScrollUp = currentPos > scrollPosition;

      const getDownDistance = () => {
        return (
          etalonBottom * (currentIndex + 1) -
          etalonTop * (currentIndex + 1) +
          etalonTop
        );
      };

      const getUpDistance = () => {
        return (
          etalonBottom * currentIndex + etalonTop * (currentIndex + 1) - etalonTop
        );
      };

      if (!isScrollUp && scrollPosition >= getDownDistance()) {
        if (currentIndex < layerRefs.current.length - 1) {
          layerRefs.current[currentIndex].classList.add("fixed");
          setCurrentIndex(currentIndex + 1);
        }
      }

      if (isScrollUp && scrollPosition < getUpDistance() && currentIndex > 0) {
        layerRefs.current[currentIndex - 1].classList.remove("fixed");
        setCurrentIndex(currentIndex - 1);
      }

      setCurrentPos(scrollPosition);
    };

    window.addEventListener("scroll", toggleStickyBehavior);

    return () => {
      window.removeEventListener("scroll", toggleStickyBehavior);
    };
  }, [currentIndex, currentPos]);

  return (
    <div className="wrapper">
      <section id="section1" ref={section1Ref} className="section fixed">
        Section 1
      </section>
      {[...Array(5)].map((_, i) => (
        <section
          key={`section${i + 2}`}
          id={`section${i + 2}`}
          ref={(el) => (layerRefs.current[i] = el)}
          className="section layer"
        >
          Section {i + 2}
        </section>
      ))}
    </div>
  );
};

export default StickySections;
