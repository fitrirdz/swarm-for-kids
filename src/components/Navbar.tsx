import { useState } from 'react';
import Logo from '../assets/icons/logo.svg';
import UserIcon from '../assets/icons/User.svg';
import NavMenu from '../assets/icons/nav-menu.svg';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className='w-full h-24 flex justify-between items-center px-6 max-w-7xl mx-auto relative'>
        <img src={Logo} alt='Store Logo' width={243} height={32} />

        {/* Desktop Menu */}
        <div className='hidden lg:flex justify-between items-center gap-8'>
          <ul className='flex gap-8 text-white font-medium'>
            <li className='hover:scale-95 transition-transform cursor-pointer'>Marketplace</li>
            <li className='hover:scale-95 transition-transform cursor-pointer'>Rankings</li>
            <li className='hover:scale-95 transition-transform cursor-pointer'>Connect a wallet</li>
          </ul>

          <button className='bg-primary-purple px-4 py-2 rounded-lg font-semibold hover:scale-95 transition-transform'>
            <img
              src={UserIcon}
              alt='Sign Up Icon'
              className='inline-block w-4 h-4 mr-2'
            />
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors'
          onClick={toggleMobileMenu}
          aria-label='Toggle mobile menu'
        >
          <img src={NavMenu} alt='Menu' className='w-6 h-6' />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50' onClick={toggleMobileMenu}>
          <div 
            className='absolute right-0 top-0 h-full w-80 bg-primary-black shadow-lg transform transition-transform duration-300 ease-in-out'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='p-6'>
              {/* Close button */}
              <div className='flex justify-end mb-8'>
                <button
                  onClick={toggleMobileMenu}
                  className='p-2 hover:bg-gray-800 rounded-lg transition-colors'
                  aria-label='Close menu'
                >
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Items */}
              <ul className='space-y-6 mb-8'>
                <li>
                  <a href='#' className='block text-white text-lg hover:scale-95 transition-transform py-2'>
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href='#' className='block text-white text-lg hover:scale-95 transition-transform py-2'>
                    Rankings
                  </a>
                </li>
                <li>
                  <a href='#' className='block text-white text-lg hover:scale-95 transition-transform py-2'>
                    Connect a wallet
                  </a>
                </li>
              </ul>

              {/* Mobile Sign Up Button */}
              <button className='w-full bg-primary-purple px-4 py-3 rounded-lg font-semibold hover:scale-95 transition-transform'>
                <img
                  src={UserIcon}
                  alt='Sign Up Icon'
                  className='inline-block w-4 h-4 mr-2'
                />
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
