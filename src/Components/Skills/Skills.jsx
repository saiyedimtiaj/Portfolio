import FrontEnd from '../../assets/icons8-code-30.png'
import backend from '../../assets/icons8-backend-64.png'
import html from '../../assets/icons8-html-5-48.png'
import css from '../../assets/icons8-css-48.png'
import tailwind from '../../assets/icons8-tailwind-css-48.png'
import js from '../../assets/icons8-javascript-48.png'
import react from '../../assets/icons8-react-40.png'
import firebase from '../../assets/icons8-firebase-48.png'
import redux from '../../assets/icons8-redux-48.png'
import node from '../../assets/icons8-node-js-48.png'
import express from '../../assets/icons8-express-js-48.png'
import mongodb from '../../assets/icons8-mongodb-48.png'
import jwt from '../../assets/icons8-jwt-48.png'
import nextjs from '../../assets/icons8-nextjs-48.png'

const Skills = () => {
  return (
    <>
      <h1 className="md:text-4xl text-3xl text-[#1c1b1b] font-semibold mt-20 mb-12 text-center">
        My Full Stack Skill Showcase
      </h1>
      <div className="grid grid-clos-1 lg:grid-cols-2 justify-center gap-8 px-5">
        <div>
          <h1 className="text-xl font-medium justify-center flex gap-1 items-center">
            <img className="w-7" src={FrontEnd} alt="" />
            FrontEnd
          </h1>
          <div className='mt-9'>
          <div className='flex items-center justify-center gap-5'>
            <div className='flex flex-col gap-[2px] items-center'>
              <img className='bg-[#e3d7d7] px-2 py-4 rounded-3xl w-16' src={html} alt="" />
              <h5 className="text-xl font-medium">HTML</h5>
              <p className='text-xs'>Advanced</p>
            </div>
            <div className='flex flex-col ml-3 gap-[2px] items-center'>
              <img className='bg-[#e3d7d7] px-2 py-4 rounded-3xl w-16' src={css} alt="" />
              <h5 className="text-xl font-medium">CSS</h5>
              <p className='text-xs'>Advanced</p>
            </div>
            <div className='flex flex-col gap-[2px] items-center'>
              <img className='bg-[#e3d7d7] px-2 py-4 rounded-3xl w-16' src={tailwind} alt="" />
              <h5 className="text-xl font-medium">TAILWIND</h5>
              <p className='text-xs'>Advanced</p>
            </div>
          </div>
          <div className='flex items-center mt-5 justify-center gap-5'>
            <div className='flex flex-col gap-[2px] items-center'>
              <img className='bg-[#e3d7d7] px-2 py-4 rounded-3xl w-16' src={js} alt="" />
              <h5 className="text-xl font-medium">JS</h5>
              <p className='text-xs'>Intermediate</p>
            </div>
            <div className='flex flex-col gap-[2px] items-center'>
              <img className='bg-[#e3d7d7] px-2 py-4 rounded-3xl w-16' src={react} alt="" />
              <h5 className="text-xl font-medium">REACT</h5>
              <p className='text-xs'>Intermediate</p>
            </div>
            <div className='flex flex-col gap-[2px] items-center'>
              <img className='bg-[#e3d7d7] px-2 py-4 rounded-3xl w-16' src={firebase} alt="" />
              <h5 className="text-xl font-medium">FIREBASE</h5>
              <p className='text-xs'>Intermediate</p>
            </div>
          </div>
          <div className='flex items-center mt-5 justify-center gap-5'>
            <div className='flex flex-col gap-[2px] items-center'>
              <img className='bg-[#e3d7d7] px-2 py-4 rounded-3xl w-16' src={redux} alt="" />
              <h5 className="text-xl font-medium">REDUX</h5>
              <p className='text-xs'>Intermediate</p>
            </div>
            <div className='flex flex-col gap-[2px] items-center'>
              <img className='bg-[#e3d7d7] px-2 py-4 rounded-3xl w-16' src={nextjs} alt="" />
              <h5 className="text-xl font-medium">Next JS</h5>
              <p className='text-xs'>Intermediate</p>
            </div>
          </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-medium justify-center flex gap-1 items-center">
            <img className="w-7" src={backend} alt="" />
            Backend
          </h1>
          <div>
          <div className='mt-9 px-5'>
          <div className='flex items-center mt-5 justify-center gap-5'>
            <div className='flex flex-col gap-[2px] items-center'>
              <img className='bg-[#e3d7d7] px-2 py-4 rounded-3xl w-16' src={node} alt="" />
              <h5 className="text-xl font-medium">NODE</h5>
              <p className='text-xs'>Intermediate</p>
            </div>
            <div className='flex flex-col ml-2 gap-[2px] items-center'>
              <img className='bg-[#e3d7d7] px-2 py-4 rounded-3xl w-16' src={express} alt="" />
              <h5 className="text-xl font-medium">EXPRESS</h5>
              <p className='text-xs'>Intermediate</p>
            </div>
            <div className='flex flex-col gap-[2px] items-center'>
              <img className='bg-[#e3d7d7] px-2 py-4 rounded-3xl w-16' src={mongodb} alt="" />
              <h5 className="text-xl font-medium">MONGODB</h5>
              <p className='text-xs'>Intermediate</p>
            </div>
          </div>
          <div className='flex items-center mt-5 justify-center gap-5'>
            <div className='flex flex-col gap-[2px] items-center'>
              <img className='bg-[#e3d7d7] px-2 py-4 rounded-3xl w-16' src={jwt} alt="" />
              <h5 className="text-xl font-medium">JWT</h5>
              <p className='text-xs'>Basic</p>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
