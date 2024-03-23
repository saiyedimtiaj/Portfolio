import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="min-h-[calc(100vh-142px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
