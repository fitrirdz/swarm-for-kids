import React from 'react';

const TopCreators = () => {
  return (
    <section className='py-16 max-w-7xl mx-auto px-6'>
      <div className='flex justify-between items-center mb-8'>
        <div>
          <h2 className='text-2xl font-bold'>Top Creators</h2>
          <p className='text-gray-400'>
            Checkout top rated creators on the NFT Marketplace.
          </p>
        </div>
        <button className='border border-purple-500 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white'>
          View Rankings
        </button>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8'>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className='flex flex-col items-center bg-gray-800 rounded-xl py-6 hover:-translate-y-1 hover:shadow-lg transition'
          >
            <img
              src={`/creator-${i + 1}.png`}
              alt=''
              className='w-20 h-20 rounded-full mb-3'
            />
            <h3 className='font-semibold'>Creator {i + 1}</h3>
            <p className='text-gray-400 text-sm'>
              Total Sale: {Math.floor(Math.random() * 50)}.5 ETH
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCreators;
