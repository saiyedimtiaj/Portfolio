import { Link, NavLink } from "react-router-dom";
import faceBook from "../../assets/facebook.svg";
import linkdin from "../../assets/linkedin.svg";
import github from "../../assets/logo-github.svg";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = (
    <>
      <NavLink
        onClick={() => setOpen(false)}
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-2 lg:border-black border-white"
            : " pb-[2px]"
        }
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => setOpen(false)}
        to="/about"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-2 lg:border-black border-white"
            : " pb-[2px]"
        }
      >
        About
      </NavLink>
      <NavLink
        onClick={() => setOpen(false)}
        to="/project"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-2 lg:border-black border-white"
            : " pb-[2px]"
        }
      >
        Project
      </NavLink>
      <NavLink
        onClick={() => setOpen(false)}
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-2 lg:border-black border-white"
            : " pb-[2px]"
        }
      >
        Contact
      </NavLink>
    </>
  );

  const socileLinks = (
    <div className="flex gap-3 flex-1 justify-end">
      <Link to="https://github.com/saiyedimtiaj" target="_blank">
        <img
          className="transition hover:-translate-y-1 w-6 h-6 bg-white rounded-full"
          src={github}
          alt=""
        />
      </Link>
      <Link
        to="https://www.linkedin.com/in/saiyed-imtiaj"
        target="_blank"
      >
        <img
          className="transition hover:-translate-y-1 w-6 h-6"
          src={linkdin}
          alt=""
        />
      </Link>
      <Link to="https://web.facebook.com/saiyed.imtiaz" target="_blank">
        <img
          className="transition hover:-translate-y-1 w-6 h-6"
          src={faceBook}
          alt=""
        />
      </Link>
    </div>
  );

  const navbarRef = useRef(null); // Create a ref for the navbar element

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false); // Close the navbar if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex px-3 justify-around items-center py-4" ref={navbarRef}>
        <div className="lg:flex-1 ">
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="block transition lg:hidden text-4xl font-medium cursor-pointer"
          >
            {open ? <IoCloseSharp /> : <IoMenuSharp />}
          </div>
          <ul className="hidden lg:block font-medium space-x-3">{navLinks}</ul>
        </div>
        <Link to="/">
          <motion.div
            className="bg-black text-center text-white rounded-full text-[25px] font-semibold px-4 cursor-pointer py-2"
            whileHover={{
              backgroundColor: [
                "#121212",
                "rgba(131,58,180,1)",
                "rgba(253,29,29,1)",
                "rgba(252,176,69,1)",
                "rgba(131,58,180,1)",
                "#121212",
              ],
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            SI
          </motion.div>
        </Link>
        <div className="flex-1 lg:flex hidden">{socileLinks}</div>
      </div>
      <div
        className={`${
          open
            ? "min-w-[70vw] py-20 bg-black/90 text-white z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg backdrop-blur-md flex justify-center items-center flex-col"
            : "hidden"
        } lg:hidden`}
      >
        <ul className="font-medium flex flex-col space-y-3">{navLinks}</ul>
        <div className="mt-3">{socileLinks}</div>
      </div>
    </>
  );
};

export default Navbar;
