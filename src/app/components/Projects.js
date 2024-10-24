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
      className="mt-14 min-h-screen scroll-mt-[15px] md:scroll-mt-[75px] mb-16"
      id="project"
    >
      <h1 className="text-3xl md:text-5xl text-white text-center font-bold">
        Featured Projects
      </h1>
      <p className="mt-3 text-sm md:text-base text-white text-center max-w-5xl mx-auto">
        As I look to the future, I&apos;m committed to pushing the boundaries of
        what&apos;s possible, embracing new technologies, and driving
        innovation. My journey forward is fueled by a passion for creating
        impactful solutions and a vision to shape a better tomorrow.
      </p>
      <div className="max-w-5xl mx-auto px-2 mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {data?.data?.map((project) => (
          <div key={project?._id}>
            <div className="rounded cursor-pointer bg-[#191919] px-2.5 py-2.5 md:px-4 md:py-4">
              <Link href={`/project/${project?._id}`}>
                <Image
                  width={300}
                  height={300}
                  src={project?.image}
                  className="w-full object-cover rounded"
                  alt="project"
                />
              </Link>
            </div>
            <div className="flex items-center gap-2 my-3">
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
            <div className="text-indigo-600 mb-3">
              {Array.isArray(project?.technology) &&
              project?.technology.length > 0 ? (
                <div className="flex flex-wrap gap-1">
                  {project.technology.map((tech, index) => (
                    <React.Fragment key={index}>
                      {index !== 0 && <span>-</span>}
                      <p>{tech}</p>
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <p>No technologies listed</p>
              )}
            </div>
            <p className="text-gray-400">
              {project?.description?.slice(0, 145)}...
              <Link
                href={`/project/${project?._id}`}
                className="text-purple-600 hover:underline"
              >
                View Details
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
