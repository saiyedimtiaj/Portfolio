

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div>
            <p className="text-center text-sm md:text-base py-4 bg-black/80 px-4 text-white font-medium">Copyright © {year} Saiyed Imtiaj . All rights are reserved</p>
        </div>
    );
};

export default Footer;