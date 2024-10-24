import Image from "next/image";
import React from "react";
import profile from "../../assets/1702381178290-01.jpeg";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen md:min-h-[calc(100vh-92px)] flex items-center justify-center container px-2 mx-auto">
      <div className="flex flex-col items-center mt-14 md:mt-0">
        <Image
          src={profile}
          width={150}
          height={150}
          alt="profile"
          className="rounded-full border-2 w-[120px] h-[120px] border-white object-cover"
        />
        <p className="mt-1 text-white">Hi , I am Saiyed Mohammad Imtiaj 👋</p>
        <h1 className="text-3xl md:text-5xl text-white font-bold mt-1 text-center">
          I am a Full-Stack Web Developer
        </h1>
        <p className="max-w-5xl text-center mt-1 text-sm text-gray-600">
          Hello there! It&apos;s great to meet you. I&apos;m Saiyed Mohammad
          Imtiaj, a passionate full-stack web developer with solid knowledge of
          Backend. I possess an impressive arsenal of skills in HTML, CSS,
          JavaScript, React, Tailwind, Next.js, Redux, TypeScript, Firebase,
          Node JS, Express JS, MongoDB. My journey in the world of web
          development has been an exciting adventure, where I&apos;ve honed my
          skills to craft dynamic and user-friendly digital experiences.
        </p>
        <div className="mt-4 flex items-center gap-4">
          <a
            href="/resume.pdf"
            download="resume.pdf"
            className="bg-[#6366F1] font-semibold text-white px-5 py-2.5 rounded-md"
          >
            Download CV
          </a>
          <Link href="https://github.com/saiyedimtiaj">
            <FaGithub size={22} />
          </Link>
          <Link href="https://www.linkedin.com/in/saiyed-imtiaj/">
            <FaLinkedin size={22} />
          </Link>
          <Link href="https://www.facebook.com/saiyed.imtiaz">
            <FaFacebook size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
