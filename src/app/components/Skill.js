import { getSkills } from "../../../src/services";
import Image from "next/image";

const Skill = async () => {
  const data = await getSkills();
  return (
    <div
      id="skill"
      className="container mx-auto px-4 scroll-mt-[15px] md:scroll-mt-[75px] max-w-5xl mt-14"
    >
      <h1 className="text-3xl text-white md:text-5xl text-center font-bold">
        Years of gaining my skills.
      </h1>
      <p className="mt-3 text-sm text-white md:text-base text-center max-w-5xl mx-auto">
        I&apos;ve always been passionate about learning, with a deep curiosity
        for how things work. My skills have been shaped through hands-on
        experience, exploration, and a relentless drive to improve.
      </p>
      <div className="grid gap-5 grid-cols-3 md:grid-cols-5 lg:grid-cols-6 mt-10">
        {data?.data?.map((item, index) => (
          <div key={index} className="bg-[#191919] rounded-xl">
            <div className="flex flex-col items-center w-full justify-center text-center space-y-1 px-4 py-4">
              <Image
                width={40}
                height={40}
                src={item?.image}
                alt={"skill"}
                className="w-full h-full object-cover flex items-center justify-center"
              />
              <p className="text-[11px] md:text-base text-center font-medium dark:text-zinc-400">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
