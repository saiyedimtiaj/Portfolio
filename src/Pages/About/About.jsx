import Skills from '../../Components/Skills/Skills';
import Transition from '../../Components/Transition/Transition';
import about from '../../assets/about.jpg'

const About = () => {
    return (
        <Transition>
            <div className='mb-10'>
            <div className="flex flex-col lg:flex-row gap-10 mt-10 items-center justify-center px-5 max-w-6xl mx-auto">
                <div className='lg:w-1/2'>
                <img className="md:max-w-md w-full rounded-xl" src={about} alt="" />
                </div>
                <div className="lg:w-1/2">
                    <h1 className='text-3xl font-semibold text-blue-700'>About Me</h1>
                    <p className='mt-3 text-[#555]'>Hello there! It's great to meet you. I'm Saiyed Mohammad Imtiaj, a passionate full-stack web developer with solid knowledge of Backend.I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, Firebase, Node JS, Express JS, MongoDB. My journey in the world of web development has been an exciting adventure, where I've honed my skills to craft dynamic and user-friendly digital experiences.</p>
                </div>
            </div>
            <Skills/>
        </div>
        </Transition>
    );
};

export default About;