import profile from '../../assets/profile.jpeg'
import './Home.css'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import { FaUpRightFromSquare } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import resumi from '../../assets/saiyed-imtiaj-resumi.pdf'
import Transition from '../../Components/Transition/Transition';


const Home = () => {
    const [text] = useTypewriter({
        words:['Full Stack Web Developer'],
        loop:{}
    })
    return (
        <Transition>
            <div className="container mx-auto px-4">
            <div className="flex justify-center flex-col-reverse py-6 lg:flex-row items-center gap-14 min-h-[calc(100vh-170px)]">
                <div className='max-w-[420px] flex-1'>
                    <h1 className="text-4xl font-semibold">Hi, I am <br /> Saiyed Imtiaj</h1>
                    <h2 className='text-xl md:text-2xl mt-3 font-semibold'>I am a <span className='text-blue-600'>
                        {text}</span>
                        <Cursor/>
                        </h2>
                        <p className='mt-2 text-[#555]'>Hi, I'm Saiyed Mohammad Imtiaj. A passionate Full stack Web Developer from Feni, Bangladesh.</p>
                       <Link to={resumi} download={'resumi'} target='_blank'>
                       <button className='text-white px-5 gap-2 mt-2 py-2.5 rounded-md bg-black flex items-center'>Resume<FaUpRightFromSquare/></button>
                       </Link>
                </div>
                <div className='avatar-wobble border-8 overflow-hidden border-black '>
                    <img className='h-[300px] bg-contain' src={profile} alt="" />
                </div>
            </div>
        </div>
        </Transition>
    );
};

export default Home;