import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getSingleProject } from "../../../services";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import Content from "../../components/content/Content";

const page = async ({ params }) => {
  const { data } = await getSingleProject(params?.id);
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-2 mt-24">
        <div className="mt-4 min-h-screen mb-16">
          <Image
            className="w-full h-full object-cover rounded-xl"
            src={data?.image}
            alt="banner"
            width={500}
            height={500}
          />
          <h1 className="text-3xl font-bold mt-5 text-white">{data?.title}</h1>
          <p className="max-w-2xl mt-1 text-gray-300">{data?.description}</p>

          {/* Buttons for GitHub and Live Link */}
          <div className="flex gap-4 mt-3">
            {/* GitHub Button */}
            <Link href={data?.githubLink} target="_blank">
              <button className="flex items-center gap-2 bg-zinc-50 hover:bg-zinc-100 text-black font-semibold py-2 px-4 rounded text-sm md:text-base transition-transform duration-200 hover:scale-105">
                <FaGithub className="text-sm md:text-base" />
                GitHub
              </button>
            </Link>
            <Link href={data?.liveLink} target="_blank">
              <button className="flex items-center gap-2 bg-zinc-50 hover:bg-zinc-100 text-black font-semibold py-2 px-4 text-sm md:text-base rounded transition-transform duration-200 hover:scale-105">
                <FiExternalLink className="text-sm md:text-base" />
                Live Site
              </button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold mt-10 text-white">
            Project Overview
          </h1>
          <div className="w-full border-b border-gray-800 pb-4 mb-2"></div>
          <Content overview={data?.overview} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
