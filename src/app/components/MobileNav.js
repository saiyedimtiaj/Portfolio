"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  FaHome,
  FaRegLightbulb,
  FaProductHunt,
  FaBloggerB,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = useMemo(
    () => [
      { icon: FaHome, id: "home" },
      { icon: FaRegLightbulb, id: "skill" },
      { icon: FaProductHunt, id: "project" },
      { icon: FaBloggerB, id: "blog" },
      { icon: IoMdMail, id: "contact" },
    ],
    []
  );

  const [activeSection, setActiveSection] = useState("home");

  // Handle scrolling and detecting active section
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        const sectionTop = section?.offsetTop ?? 0;
        const sectionHeight = section?.offsetHeight ?? 0;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems, activeSection]);

  // Scroll to section if pathname changes or hash exists
  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash.replace("#", ""); // Get hash value
      if (hash) {
        scrollToSection(hash); // Scroll to the section when hash exists
      }
    }
  }, [pathname]);

  // Function to handle scrolling to a specific section
  const scrollToSection = (slug) => {
    const section = document.getElementById(slug);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle redirection to homepage with section scroll
  const handleRedirect = (slug) => {
    if (pathname !== "/") {
      // Redirect to the homepage and append the hash
      router.push(`/#${slug}`);
    } else {
      // If already on the homepage, scroll to the section directly
      scrollToSection(slug);
    }
  };

  return (
    <div className="flex flex-1 justify-center items-center gap-[14px] rounded-full bg-[#191919] border-2 border-[#1F2937] fixed bottom-3 left-1/2 px-1 z-50 py-1 -translate-x-1/2 md:hidden">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <motion.p
            key={item.id}
            className={`font-medium px-2 py-2 cursor-pointer ${
              activeSection === item.id ? "rounded-full" : ""
            }`}
            onClick={() => handleRedirect(item.id)} // Use the redirect function
            initial={{ color: "#9CA3AF" }}
            animate={{
              color: activeSection === item.id ? "#FFFFFF" : "#9CA3AF",
              backgroundColor:
                activeSection === item.id ? "#8B5CF6" : "transparent",
            }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <IconComponent size={20} />
          </motion.p>
        );
      })}
    </div>
  );
};

export default MobileNav;
