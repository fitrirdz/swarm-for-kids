import React from 'react'
import RocketIcon from '../assets/RocketLaunch.svg';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 max-w-7xl mx-auto px-6 gap-10">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Discover Digital Art & Collect NFTs
        </h1>
        <p className="text-gray-400">
          NFT marketplace UI created with Anima for Figma. Collect, buy, and sell art from more than 20k NFT artists.
        </p>
        <button className="bg-primary-purple text-white font-semibold py-4 px-12 rounded-2xl hover:scale-95 transition-transform duration-300">
           <img
          src={RocketIcon}
          alt='Get Started Icon'
          className='inline-block w-4 h-4 mr-2'
        />
          Get Started
        </button>
        <div className="flex gap-6 pt-4">
          <div><h3 className="text-xl font-bold">240K+</h3><p className="text-gray-400 text-sm">Total Sale</p></div>
          <div><h3 className="text-xl font-bold">100K+</h3><p className="text-gray-400 text-sm">Auctions</p></div>
          <div><h3 className="text-xl font-bold">240K+</h3><p className="text-gray-400 text-sm">Artists</p></div>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-800 max-w-sm">
          <img src="/nft-space.png" alt="Space Walking" className="w-full object-cover" />
          <div className="p-4">
            <h3 className="font-semibold">Space Walking</h3>
            <p className="text-gray-400 text-sm">@animakid</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection