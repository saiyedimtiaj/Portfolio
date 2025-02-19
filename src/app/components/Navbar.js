"use client";

import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import NavItems from "./NavItems";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 h-20 w-full flex items-center z-[99999999] bg-gradient-to-b from-zinc-900 to bg-zinc-900/0 px-4 md:px-4">
      <div className="container mx-auto flex items-center justify-between md:grid md:grid-cols-[1fr,3fr,1fr]">
        <Link href="/#home" className="flex-1">
          <p className="text-2xl cursor-pointer font-bold w-[35px] bg-white text-black px-2 py-0 rounded-md">
            ᏕᎥ
          </p>
        </Link>

        <div className="relative md:justify-self-center">
          <button
            className="w-10 h-10 grid place-items-center bg-zinc-50/10 rounded-xl ring-inset ring-1 ring-zinc-50/5 backdrop-blur-2xl hover:bg-zinc-50/15 transition-transform active:scale-95 md:hidden"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <IoCloseSharp /> : <FiMenu />}
          </button>
          <NavItems navOpen={navOpen} />
        </div>

        <Link href="/#contact" className="hidden md:block md:justify-self-end">
          <button className="btn btn-secondary px-6 py-2">Contact</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
