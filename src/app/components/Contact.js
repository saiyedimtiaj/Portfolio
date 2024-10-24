"use client";

const Contact = () => {
  const handleForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        subject,
        message,
        email,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div
      className="px-3 max-w-[1140px] mx-auto pb-16 scroll-mt-[15px] md:scroll-mt-[75px]"
      id="contact"
    >
      <h1 className="text-3xl md:text-5xl text-white text-center font-bold">
        Contact Info
      </h1>
      <p className="mt-3 text-sm md:text-base text-white text-center max-w-5xl mx-auto">
        If you have any further questions or queries, please contact me via
        WhatsApp at +8801615718970 or email at saiyedimtiaj@gmail.com
      </p>
      <div className="flex flex-col items-center gap-10 lg:gap-16 mt-10">
        <div className="max-w-[600px] bg-[#18181c] p-3 md:p-8 rounded-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Let’s work <br /> together!
          </h1>
          <p className="mt-3 text-gray-400">
            I design and code beautifully simple things and i love what i do.
            Just simple like that!
          </p>
          <form onSubmit={handleForm}>
            <div className="mt-6">
              <input
                type="email"
                required
                name="email"
                placeholder="Email Address"
                className="border focus:bg-[#050709] border-[#22272C] bg-[#050709] px-4 w-full focus:outline-none focus:border-[#8750F7] py-2 md:py-3 rounded-md"
              />
            </div>
            <input
              type="text"
              required
              name="subject"
              placeholder="Subject"
              className="border border-[#22272C] my-4 bg-[#050709] px-4 w-full focus:outline-none focus:border-[#8750F7] py-2 md:py-3 rounded-md"
            />
            <textarea
              name="message"
              className="border resize-none border-[#22272C] bg-[#050709] px-4 w-full focus:outline-none focus:border-[#8750F7] py-3 rounded-md"
              placeholder="Message"
              rows="6"
            ></textarea>
            <input
              className="px-5 py-3 text-white bg-purple-600 cursor-pointer mt-2 rounded-2xl"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
