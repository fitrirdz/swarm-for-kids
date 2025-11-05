import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-4 px-8 bg-transparent fixed w-full z-50 backdrop-blur-md'>
      <h1 className='font-bold text-lg'>NFT Marketplace</h1>
      <ul className='hidden md:flex gap-8 text-gray-300'>
        <li>Marketplace</li>
        <li>Rankings</li>
        <li>Connect a wallet</li>
      </ul>
      <button className='bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform'>
        Sign Up
      </button>
    </nav>
  );
};

export default Navbar;
