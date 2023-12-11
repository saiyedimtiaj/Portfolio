import profile from '../../assets/bohemian-man-with-his-arms-crossed.jpg'
import './Home.css'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import { FaUpRightFromSquare } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Home = () => {
    const [text] = useTypewriter({
        words:['Full Stack Web Developer'],
        loop:{}
    })
    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-center flex-col-reverse py-6 lg:flex-row items-center gap-14 min-h-[calc(100vh-170px)]">
                <div className='max-w-[420px] flex-1'>
                    <h1 className="text-4xl font-semibold">Hi, I am <br /> Saiyed Imtiaj</h1>
                    <h2 className='text-xl md:text-2xl mt-3 font-semibold'>I am a <span className='text-blue-600'>
                        {text}</span>
                        <Cursor/>
                        </h2>
                        <p className='mt-2 text-[#555]'>Hi, I'm Saiyed Mohammad Imtiaj. A passionate Full stack Web Developer from Feni, Bangladesh.</p>
                       <Link to='https://drive.google.com/file/d/1wKdfmwjVT5cY-jL-KENOZl4NYdBgS2Xd/view' target='_blank'>
                       <button className='text-white px-5 gap-2 mt-2 py-2.5 rounded-md bg-black flex items-center'>Resume<FaUpRightFromSquare/></button>
                       </Link>
                </div>
                <div className='avatar-wobble border-8 overflow-hidden border-black '>
                    <img className='h-[300px]' src={profile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;