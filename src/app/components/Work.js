"use client";
import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div
      id="education"
      className="container mx-auto px-4 scroll-mt-[15px] md:scroll-mt-[75px] max-w-5xl mt-14"
    >
      <h1 className="text-3xl text-white mb-10 md:text-5xl text-center font-bold">
        Education
      </h1>

      {/* Timeline Container */}
      <div className="flex items-center flex-col md:flex-row">
        <div className="relative mx-auto max-w-4xl">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-1 top-0 w-1 bg-purple-600 transform -translate-x-1/2"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Education Entry 1 (Right) */}
          <motion.div
            className="mb-10 w-full pl-8 relative flex justify-end md:justify-start md:flex-row-reverse"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white w-full max-w-xl">
              <h3 className="text-xl font-semibold">
                B.Sc in Computer Science and Engineering
              </h3>
              <span className="block text-sm font-medium text-gray-400 mb-2">
                2024 - Present • Port City International University
              </span>
              <p>Currently pursuing my bachelor&aposs degree in CSE.</p>
            </div>
            {/* Timeline Circle */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-gray-100 left-[-8px]"></div>
          </motion.div>

          {/* Education Entry 2 (Left) */}
          <motion.div
            className="mb-10 w-full pl-8 relative flex justify-end md:justify-start md:flex-row-reverse"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white w-full max-w-xl">
              <h3 className="text-xl font-semibold">
                Higher Secondary Certificate (HSC)
              </h3>
              <span className="block text-sm font-medium text-gray-400 mb-2">
                2020 - 2022 • Feni Government Technical School and College
              </span>
              <p>Completed HSC with a focus on science and technology.</p>
            </div>
            {/* Timeline Circle */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-gray-100 left-[-8px]"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
