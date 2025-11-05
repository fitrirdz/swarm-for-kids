import React from 'react';

const Newsletter = () => {
  return (
    <section className='py-16 max-w-5xl mx-auto px-6 bg-gray-800 rounded-2xl flex flex-col md:flex-row items-center gap-6'>
      <img
        src='/astronaut.png'
        alt='Astronaut'
        className='w-40 h-40 object-cover rounded-xl'
      />
      <div>
        <h3 className='text-2xl font-bold mb-2'>Join Our Weekly Digest</h3>
        <p className='text-gray-400 mb-4'>
          Get exclusive promotions & updates straight to your inbox.
        </p>
        <div className='flex gap-3'>
          <input
            type='email'
            placeholder='Enter your email'
            className='bg-gray-700 rounded-lg px-4 py-2 w-full md:w-64 outline-none'
          />
          <button className='bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg font-semibold'>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
