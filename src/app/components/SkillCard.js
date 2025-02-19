import Image from "next/image";
import React from "react";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={
        "flex flex-col md:flex-row items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group " +
        (classes || "")
      }
    >
      <figure className="bg-zinc-700/50 overflow-hidden md:w-12 w-full h-auto md:h-12 p-2 rounded-lg group-hover:bg-zinc-900 transition-colors">
        <Image src={imgSrc} alt={label} width={200} height={200} />
      </figure>
      <div>
        <h3 className="text-white font-medium md:text-base text-sm">{label}</h3>
        <p className="text-zinc-400 text-xs md:text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default SkillCard;
