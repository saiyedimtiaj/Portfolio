import Navbar from "./components/Navbar.js";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Hero from "./components/Hero.js";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Work.js";
import Blog from "./components/Blog.js";
import Review from "./components/Review.js";

const page = () => {
  return (
    <div>
      <div id="home">
        <Navbar />
        <Hero />
      </div>
      <Skill />
      <Projects />
      <Experience />
      {/* <Blog /> */}
      <Review />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
