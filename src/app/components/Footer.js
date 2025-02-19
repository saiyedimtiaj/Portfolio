const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <p className="text-center text-sm md:text-lg py-5 px-4 border-t border-gray-800 text-white">
        Copyright © {year} Saiyed Imtiaj . All rights are reserved
      </p>
    </div>
  );
};

export default Footer;
