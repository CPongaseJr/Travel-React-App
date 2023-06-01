import React from 'react';
import Background from '../assets/pxfuel.jpg'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img src={Background} alt='/' 
      className='w-full h-full object-cover'/>
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
            <h1 className='text-black font-bold text-4xl'>Find Your Special Trip</h1>
            <h2 className='text-4xl text-blue-700 py-4 italic'>With J Travel</h2>
            <p className='text-xl'> J Travel assist of your needs for your special trip. We book tickets 
              according to your preferred destinations. Feel free to contact us. Happy to serve you!
            </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
