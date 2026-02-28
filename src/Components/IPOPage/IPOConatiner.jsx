import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import SpecificIpo from "./SpecificIpo";
import UseColorGenerator from "../../Custom Hooks/UseColorGenerator";
import SectionAnimation from "../SectionAnimation/SectionAnimation";

const IPOConatiner = ({ data, type }) => {
  const { random1, random2, random3 } = UseColorGenerator();
  const location = useLocation();

  // Create unique ID from type
  const sectionId = `${type}IPOs`;
  const sectionRef = useRef(null);

  useEffect(() => {
    if (location.hash === `#${sectionId}`) {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location.hash, sectionId]);

  return (
  <SectionAnimation>
    <div ref={sectionRef} id={sectionId} className="m-10">
      <h1 style={{ backgroundColor: `rgb(${random1},${random2},${random3})`}}className="font-bold text-2xl mb-10 px-4 py-2 rounded-xl text-white w-fit">Top {type} IPO's</h1>
      <SpecificIpo ipo={data} type={type} />
    </div>
  </SectionAnimation>
  );
};

export default IPOConatiner;
