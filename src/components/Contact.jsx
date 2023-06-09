import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-700'>Send us a message</h2>
      <p className='text-center text-gray-700 py-2'>We're standing by!</p>
      <div className='grid md:grid-cols-2'>
        <img src='https://www.philippinesretreats.com/wp-content/uploads/2022/10/leif-donayre-9J0f6PuzBhk-unsplash.jpg' 
        alt='/' 
        className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'/>
        <form>
            <div className='grid grid-cols-2'>
                <input className='border m-2 p-2' type='text' placeholder='First name' />
                <input className='border m-2 p-2' type='text' placeholder='Last name' />
                <input className='border m-2 p-2' type='email' placeholder='Email' />
                <input className='border m-2 p-2' type='tel' placeholder='Phone' />
                <input className='border col-span-2 p-2 m-2' type='text' placeholder='Address' />
                <textarea className='border col-span-2 p-2 m-2' cols="30" rows="10"></textarea>
                <button className='m-2 p-2'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
