import SkillCard from "./SkillCard";
import Image from "next/image";

// ✅ Correctly import images
import figma from "../../assets/images/figma.svg";
import css3 from "../../assets/images/css3.svg";
import javascript from "../../assets/images/javascript.svg";
import nodejs from "../../assets/images/nodejs.svg";
import expressjs from "../../assets/images/expressjs.svg";
import mongodb from "../../assets/images/mongodb.svg";
import react from "../../assets/images/react.svg";
import tailwindcss from "../../assets/images/tailwindcss.svg";
import typescript from "../../assets/images/file-type-typescript-official.svg";
import redux from "../../assets/images/redux.svg";

const Skill = () => {
  const skillItem = [
    { imgSrc: figma, label: "Figma", desc: "Design tool" },
    { imgSrc: css3, label: "CSS", desc: "User Interface" },
    { imgSrc: javascript, label: "JavaScript", desc: "Interaction" },
    { imgSrc: nodejs, label: "NodeJS", desc: "Web Server" },
    { imgSrc: expressjs, label: "ExpressJS", desc: "Node Framework" },
    { imgSrc: mongodb, label: "MongoDB", desc: "Database" },
    { imgSrc: react, label: "React", desc: "Framework" },
    { imgSrc: tailwindcss, label: "Tailwind", desc: "User Interface" },
    { imgSrc: typescript, label: "TypeScript", desc: "Typed JavaScript" },
    { imgSrc: redux, label: "Redux", desc: "State Management" },
  ];

  return (
    <section
      id="skill"
      className="pt-16 lg:pt-28 scroll-mt-[15px] md:scroll-mt-[60px]"
    >
      <div className="container mx-auto px-4">
        <h2 className="headline-2 mx-auto text-center">
          Essential Tools I use
        </h2>
        <p className="text-zinc-400 max-w-[50ch] mx-auto text-center mt-3 mb-8">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
