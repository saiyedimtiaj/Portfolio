"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = useMemo(
    () => [
      { label: "Home", id: "home" },
      { label: "Skill", id: "skill" },
      { label: "Project", id: "project" },
      { label: "Blog", id: "blog" },
      { label: "Contact", id: "contact" },
    ],
    []
  );

  const [activeSection, setActiveSection] = useState("home");

  // Scroll to section if pathname changes (navigation from another page)
  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash.replace("#", ""); // Get the hash (id)
      if (hash) {
        // Scroll to the section if hash exists
        scrollToSection(hash);
      }
    }
  }, [pathname]);

  // Handle scroll events to track the active section
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

  const scrollToSection = (slug) => {
    const section = document.getElementById(slug);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container hidden md:block mx-auto px-4">
      <div className="flex items-center justify-between gap-5 py-4">
        <Link href="/" className="flex-1">
          <p className="text-3xl cursor-pointer font-bold w-[45px] bg-white text-black px-2 py-3 rounded-md">
            ᏕᎥ
          </p>
        </Link>
        <div className="flex flex-1 justify-center items-center gap-5 rounded-full px-1 py-1 bg-[#191919] border border-[#1F2937] fixed top-6 left-1/2 -translate-x-1/2 z-50">
          {navItems.map((item) => (
            <motion.p
              key={item.id}
              className={`font-medium px-3 py-2 cursor-pointer ${
                activeSection === item.id ? "rounded-full" : ""
              }`}
              onClick={() => scrollToSection(item.id)}
              initial={{ color: "#9CA3AF" }}
              animate={{
                color: activeSection === item.id ? "#FFFFFF" : "#9CA3AF",
                backgroundColor:
                  activeSection === item.id ? "#8B5CF6" : "transparent",
              }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {pathname === "/" ? (
                item?.label
              ) : (
                <Link href={`/#${item.id}`}>{item.label}</Link>
              )}
            </motion.p>
          ))}
        </div>
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#6366F1] font-semibold text-white px-5 py-2.5 rounded-full"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
