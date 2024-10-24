import MobileNav from "./components/MobileNav.js";
import Navbar from "./components/Navbar.js";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Hero from "./components/Hero.js";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Work.js";
import Blog from "./components/Blog.js";

const page = () => {
  return (
    <div>
      <div id="home">
        <Navbar />
        <MobileNav />
        <Hero />
      </div>
      <Skill />
      <Projects />
      <Experience />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
