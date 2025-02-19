import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { getAllProject } from "../../../src/services";

const Projects = async () => {
  const data = await getAllProject();
  return (
    <div
      className="px-4 container mx-auto scroll-mt-[75px] md:scroll-mt-[100px] mt-20 lg:mt-36 mb-16"
      id="project"
    >
      <h2 className="headline-2 mx-auto text-center">
        My portfolio highlights
      </h2>
      <p className="text-zinc-400 max-w-[50ch] text-center mx-auto mt-3 mb-8">
        Driven by innovation and new technologies, I aim to create impactful
        solutions that shape a better, more sustainable future.
      </p>
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.data?.map((project) => (
          <div key={project?._id}>
            <div className="rounded-lg cursor-pointer">
              <Link href={`/project/${project?._id}`}>
                <Image
                  width={600}
                  height={700}
                  src={project?.image}
                  className="w-full object-cover h-[240px]"
                  alt="project"
                />
              </Link>
            </div>
            <div className="p-4 rounded-bl-md rounded-br-md bg-zinc-800 hover:bg-zinc-700/50 ring-1 ring-inset ring-zinc-50/5 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <h1 className="text-xl text-nowrap text-white font-semibold">
                  {project?.title}
                </h1>
                <span className="border border-gray-700 w-full"></span>
                <Link
                  href={project?.githubLink}
                  className="cursor-pointer text-gray-300 hover:text-white"
                >
                  <FaGithub size={23} />
                </Link>
                <Link
                  href={project?.liveLink}
                  className="cursor-pointer text-gray-300 hover:text-white"
                >
                  <FiExternalLink size={23} />
                </Link>
              </div>
              <div className="mb-3">
                {Array.isArray(project?.technology) &&
                project?.technology.length > 0 ? (
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {project.technology.map((tech, index) => (
                      <span
                        key={index}
                        className="px-1.5 md:px-2 md:py-1 py-1 bg-indigo-600 text-white rounded-full text-[9px] md:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p>No technologies listed</p>
                )}
              </div>
              <p className="text-zinc-300 text-sm md:text-base">
                {project?.description?.slice(0, 145)}...
                <Link
                  href={`/project/${project?._id}`}
                  className="text-purple-600 hover:underline"
                >
                  View Details
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
