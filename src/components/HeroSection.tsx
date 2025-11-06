import React from 'react';
import AvatarIcon from '../assets/Avatar.svg';
import RocketIcon from '../assets/RocketLaunch.svg';
import SpaceWalking from '../assets/SpaceWalking.svg';

const HeroSection = () => {
  return (
    <section className='mx-auto flex flex-col lg:flex-row items-center gap-8 px-40 py-20'>
      <div className='flex-1 space-y-6 w-[510px]'>
        <h1 className='text-[5.23vw] font-semibold leading-tight'>
          Discover Digital Art & Collect NFTs
        </h1>
        <p>
          NFT marketplace UI created with Anima for Figma. Collect, buy, and
          sell art from more than 20k NFT artists.
        </p>
        <button className='bg-primary-purple text-white font-semibold py-4 px-12 rounded-2xl hover:scale-95 transition-transform duration-300'>
          <img
            src={RocketIcon}
            alt='Get Started Icon'
            className='inline-block w-4 h-4 mr-2'
          />
          Get Started
        </button>
        <div className='flex gap-6 pt-4'>
          <div>
            <h3 className='text-xl font-bold font-mono'>240K+</h3>
            <p className='text-sm'>Total Sale</p>
          </div>
          <div>
            <h3 className='text-xl font-bold font-mono'>100K+</h3>
            <p className='text-sm'>Auctions</p>
          </div>
          <div>
            <h3 className='text-xl font-bold font-mono'>240K+</h3>
            <p className='text-sm'>Artists</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className='flex-1 flex justify-center'
        style={{ perspective: '1000px' }}
      >
        <div className='w-[510px] max-h-[510px] bg-secondary-black rounded-3xl overflow-hidden shadow-lg animate-flip items-center p-6'>
          {/* Fixed frame container for image */}
          <div className='mx-auto overflow-hidden rounded-3xl'>
            <img
              src={SpaceWalking}
              alt='Space Walking'
              className='w-full h-full object-cover animate-image-zoom'
            />
          </div>

          <div className='py-4'>
            <h3 className='font-semibold'>Space Walking</h3>
            <div className='flex items-center mt-2'>
              <img
                src={AvatarIcon}
                alt='Creator Avatar'
                className='inline-block w-5 h-5 mr-2'
              />
              <p className='text-sm'>Animakid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
