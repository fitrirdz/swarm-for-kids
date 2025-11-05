import React from 'react';

const FeaturedDrop = () => {
  return (
    <section className='bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 py-16 text-center text-white'>
      <h2 className='text-3xl font-bold mb-6'>Magic Mushrooms</h2>
      <button className='bg-white text-purple-600 font-semibold px-6 py-2 rounded-lg mb-6'>
        See NFT
      </button>
      <p className='text-lg'>Auction ends in</p>
      <div className='text-3xl font-mono tracking-wide mt-2'>59 : 59 : 59</div>
    </section>
  );
};

export default FeaturedDrop;
