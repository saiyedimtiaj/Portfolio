const Work = () => {
  return (
    <div
      id="education"
      className="container mx-auto px-4 scroll-mt-[70px] md:scroll-mt-[90px] max-w-5xl mt-14"
    >
      <h2 className="headline-2 mb-8 mx-auto">Education</h2>

      {/* Timeline Container */}
      <div className="flex items-center flex-col md:flex-row">
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-1 top-0 w-[3px] md:w-1 bg-zinc-50 transform -translate-x-1/2 h-full" />

          {/* Education Entry 1 (Right) */}
          <div className="mb-10 w-full pl-6 md:pl-8 relative flex justify-end md:justify-start md:flex-row-reverse">
            <div className="bg-zinc-800 ring-1 ring-inset ring-zinc-50/5 p-4 md:p-6 rounded-lg shadow-md text-white w-full max-w-xl">
              <h3 className="text-lg md:text-xl font-semibold">
                B.Sc in Computer Science and Engineering
              </h3>
              <span className="block text-xs md:text-sm font-medium text-zinc-400 mb-2">
                2024 - Present • Port City International University
              </span>
              <p className="text-sm md:text-base">
                Currently pursuing my bachelor&apos;s degree in CSE.
              </p>
            </div>
            {/* Timeline Circle */}
            <div className="absolute top-1/2 transform -translate-y-1/2 md:w-6 md:h-6 w-5 h-5 bg-zinc-700 rounded-full border-[3px] md:border-4 border-gray-100 left-[-6px] md:left-[-8px]"></div>
          </div>

          {/* Education Entry 2 (Left) */}
          <div className="mb-10 w-full pl-6 md:pl-8 relative flex justify-end md:justify-start md:flex-row-reverse">
            <div className="bg-zinc-800 ring-1 ring-inset ring-zinc-50/5 p-4 md:p-6 rounded-lg shadow-md text-white w-full max-w-xl">
              <h3 className="text-lg md:text-xl font-semibold">
                Higher Secondary Certificate (HSC)
              </h3>
              <span className="block text-xs md:text-sm font-medium text-zinc-400 mb-2">
                2020 - 2022 • Feni Government Technical School and College
              </span>
              <p className="text-sm md:text-base">
                Completed HSC with a focus on science and technology.
              </p>
            </div>
            {/* Timeline Circle */}
            <div className="absolute top-1/2 transform -translate-y-1/2 md:w-6 md:h-6 w-5 h-5 bg-zinc-700 rounded-full border-[3px] md:border-4 border-gray-100 left-[-6px] md:left-[-8px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
