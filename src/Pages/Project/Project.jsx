import { FaUpRightFromSquare } from 'react-icons/fa6';
import { FaGithub } from "react-icons/fa";
import project1 from '../../assets/project1.png'
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <>
            <h1 className="text-4xl font-semibold mt-5 mb-12 text-center">My MERN Stack Masterpieces</h1>
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-5 px-3 py-4  md:p-5 my-7 rounded-md bg-[#ece5e5] shadow-lg">
                    <img className='h-64 w-full lg:max-w-md rounded-xl' src={project1} alt="" />
                    <div>
                        <h1 className="text-2xl font-semibold">Shoes Ecommarce</h1>
                        <p className='mt-2 text-[#555]'>This is a Shoes store ecommarce website.that allow to user bay any shoues .But after he have to Sign Up or Sign in account.</p>
                        <div className='mt-4 space-x-1 md:space-x-2'>
                            <span className='bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs'>React</span>
                            <span className='bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs'>Tailwind</span>
                            <span className='bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs'>Firebase</span>
                            <span className='bg-white shadow-md md:px-4 px-2 rounded-sm py-1 font-medium md:text-lg text-xs'>MongoDB</span>
                        </div>
                        <div className='mt-5 flex items-center gap-4'>
                        <Link target='_blank' to='https://github.com/saiyedimtiaj/Shoues-Store'>
                        <button className='text-white px-5 gap-2 py-3 rounded-md bg-black flex items-center'>Code<FaGithub className='text-lg' /></button>
                        </Link>
                       <Link to='https://charming-hamster-667e0d.netlify.app/' target='_blank'>
                       <button className='border-2 border-black px-5 gap-2 py-2.5 rounded-md flex items-center'>Demo<FaUpRightFromSquare/></button>
                       </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;