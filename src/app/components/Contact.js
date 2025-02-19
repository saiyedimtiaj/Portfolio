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
      className="px-4 container w-full mx-auto mt-20 md:mt-28 mb-20 scroll-mt-[95px] md:scroll-mt-[95px]"
      id="contact"
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="md:w-1/2 w-full">
          <h2 className="headline-2 mx-0">
            Let’s work <br /> together!
          </h2>
          <p className="text-zinc-400 max-w-[50ch] mt-3 mb-8">
            If you have any further questions or queries, please contact me via
            WhatsApp at +8801615718970 or email at saiyedimtiaj@gmail.com
          </p>
        </div>
        <form onSubmit={handleForm} className="md:w-1/2">
          <div className="">
            <input
              type="email"
              required
              name="email"
              placeholder="Email Address"
              className="border border-[#22272C] bg-[#050709]/40 px-4 w-full focus:outline-none focus:border-[#8750F7] py-2 md:py-3 rounded-md"
            />
          </div>
          <input
            type="text"
            required
            name="subject"
            placeholder="Subject"
            className="border border-[#22272C] my-4 bg-[#050709]/40 px-4 w-full focus:outline-none focus:border-[#8750F7] py-2 md:py-3 rounded-md"
          />
          <textarea
            name="message"
            className="border resize-none border-[#22272C] bg-[#050709]/40 px-4 w-full focus:outline-none focus:border-[#8750F7] py-3 rounded-md"
            placeholder="Message"
            rows="6"
          ></textarea>
          <input
            className="btn btn-secondary cursor-pointer mt-4 w-full"
            type="submit"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
