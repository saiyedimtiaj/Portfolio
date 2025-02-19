import Link from "next/link";
import { useEffect, useRef } from "react";

const NavItems = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "Skills",
      link: "#skill",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#project",
      className: "nav-link",
    },
    {
      label: "Education",
      link: "#education",
      className: "nav-link",
    },
    {
      label: "Review",
      link: "#review",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);

    return () => {
      window.removeEventListener("resize", initActiveBox);
    };
  }, []);

  const activeCurrentLinks = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <Link
          href={"/" + link}
          className={className}
          key={key}
          ref={ref}
          onClick={activeCurrentLinks}
        >
          {label}
        </Link>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default NavItems;
