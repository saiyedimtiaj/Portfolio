import Transition from "../../Components/Transition/Transition";
import nike from "../../assets/nike.png";
import book from "../../assets/airbnb.png";
import tradeswift from "../../assets/tradeswift.png";
import videoicon from "../../assets/icons8-video-96.png";
import { useState } from "react";
import VideoPopup from "../../Components/Modal";
import narutosMomVideo from "../../assets/narutos-mom-naruto-shippuden.mp4";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaUpRightFromSquare } from "react-icons/fa6";

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [playVideo, setPlayVideo] = useState();

  const openModal = (video) => {
    setPlayVideo(video);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const project = [
    {
      title: "Room Booking System",
      video: narutosMomVideo,
      image: book,
      description: `Welcome to our RMS website, offering user, manager, and admin roles. Users book rooms, managers handle room management, and admins oversee the site. With streamlined processes, we ensure a seamless experience for all users.`,
      codeLink: "https://github.com/saiyedimtiaj/Nike-Store",
      liveLink: "https://github.com/saiyedimtiaj/Hotel-Booking",
    },
    {
      title: "Nike Store",
      video: narutosMomVideo,
      image: nike,
      description: `Introducing the full-stack Nike website, where users dive into the ultimate shoe-buying journey. Our platform flaunts a seamless UI and a robust admin role system, granting administrators complete control over product management, edits, and deletions.`,
      codeLink: "https://github.com/saiyedimtiaj/Nike-Store",
      liveLink: "https://mern-stack-nike-ecomarce.netlify.app/",
    },
    {
      title: "Trading Platfrom",
      video: narutosMomVideo,
      image: tradeswift,
      description: `Welcome to our trading platform, crafted by our dedicated team. Traders engage in trades to win prizes, while admins maintain website control. With our collaborative efforts, we ensure seamless trading experiences and effective website management for all users.`,
      codeLink: "https://github.com/saiyedimtiaj/Tradeswift",
      liveLink: "https://tradeswift.vercel.app/",
    },
  ];

  return (
    <>
      <Transition>
        <h1 className="text-4xl font-semibold mt-5 mb-12 text-center">
          My MERN Stack Masterpieces
        </h1>
        {project?.map((project, index) => (
          <div key={index} className="max-w-5xl min-h-[390px] mx-auto px-5 pb-16"> {/* Added mb-8 for margin-bottom */}
            <div className="flex gap-8 flex-col lg:flex-row">
              <div className="lg:w-1/2 rounded-xl relative">
                <img
                  className="rounded-xl w-full h-64"
                  src={project.image}
                  alt=""
                />
                {/* <div className="absolute w-full h-full bg-black opacity-50 rounded-xl top-0 flex justify-center items-center">
                  <img
                    onClick={() => openModal(project.video)}
                    src={videoicon}
                    className="cursor-pointer w-16"
                    alt=""
                  />
                </div> */}
              </div>
              <div className="lg:w-1/2">
                <h1 className="text-2xl font-semibold">{project?.title}</h1>
                <p className="text-[#555555] mt-1 text-[15px]">
                  {project?.description}
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <Link
                    target="_blank"
                    to={project?.codeLink}
                  >
                    <button className="text-white px-5 gap-2 py-3 rounded-md bg-black flex items-center">
                      Code
                      <FaGithub className="text-lg" />
                    </button>
                  </Link>
                  <Link
                    to={project?.liveLink}
                    target="_blank"
                  >
                    <button className="border-2 border-black px-5 gap-2 py-2.5 rounded-md flex items-center">
                      Demo
                      <FaUpRightFromSquare />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <VideoPopup video={playVideo} isOpen={isOpen} onClose={closeModal} /> */}
      </Transition>
    </>
  );
};

export default Project;
