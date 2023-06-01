import React from 'react';
import Hennan from '../assets/hennan.jpg'
import Pamilacan from '../assets/pamilacan.jpg'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      <div className='relative p-4 '>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'
        >Donatela</h3>
        <img 
        className='w-full h-full object-cover relative border-4 border-white shadow-lg' 
        src='https://gttp.imgix.net/311664/x/0/16-best-beachfront-resorts-in-bohol-island-philippines-alona-beach-panglao-beach-anda-beach-6.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883' alt='/'/>
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'
        >Henann</h3>
        <img 
        className='w-full h-full object-cover relative border-4 border-white shadow-lg' 
        src={Hennan} alt='/'/>
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'
        >Pamilacan</h3>
        <img 
        className='w-full h-full object-cover relative border-4 border-white shadow-lg' 
        src={Pamilacan} alt='/'/>
      </div>
    </div>
  );
}

export default Activities;
