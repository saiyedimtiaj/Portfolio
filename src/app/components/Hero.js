import Image from "next/image";
import React from "react";
import profile from "../../assets/1000008707.jpg";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center container px-4 mx-auto">
      <div className="flex items-center flex-col md:flex-row mt-20 lg:mt-6 gap-10">
        <div className="md:w-1/2 w-full">
          <Image
            src={profile}
            width={550}
            height={550}
            alt="profile"
            className="border-2 w-36 md:w-full rounded-full md:rounded-none mx-auto lg:w-3/5 ml-auto h-full border-white object-cover"
          />
        </div>
        <div>
          <p className="mt-1 text-white">Hi , I am Saiyed Mohammad Imtiaj 👋</p>
          <h1 className="text-3xl md:text-5xl text-white font-bold mt-1">
            I am a Full-Stack Web Developer
          </h1>
          <p className="max-w-5xl mt-1 text-sm text-zinc-400">
            Hello there! It&apos;s great to meet you. I&apos;m Saiyed Mohammad
            Imtiaj, a passionate full-stack web developer with solid knowledge
            of Backend. I possess an impressive arsenal of skills in HTML, CSS,
            JavaScript, React, Tailwind, Next.js, Redux, TypeScript, Firebase,
            Node JS, Express JS, MongoDB. My journey in the world of web
            development has been an exciting adventure, where I&apos;ve honed my
            skills to craft dynamic and user-friendly digital experiences.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="bg-zinc-50 text-zinc-900 font-semibold px-5 py-2.5 rounded-md"
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
    </div>
  );
};

export default Hero;
