const Footer = () => {
  return (
    <footer className='border-t border-gray-800 py-12 px-6 text-gray-400'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8'>
        <div>
          <h4 className='font-semibold text-white mb-3'>NFT Marketplace</h4>
          <p>Created with ❤️ for NFT artists and collectors.</p>
        </div>

        <div>
          <h4 className='font-semibold text-white mb-3'>Explore</h4>
          <ul className='space-y-2'>
            <li>Marketplace</li>
            <li>Rankings</li>
            <li>Connect a wallet</li>
          </ul>
        </div>

        <div>
          <h4 className='font-semibold text-white mb-3'>
            Join Our Weekly Digest
          </h4>
          <div className='flex gap-2'>
            <input
              type='email'
              placeholder='Enter your email'
              className='bg-gray-700 px-4 py-2 rounded-lg w-full outline-none'
            />
            <button className='bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <p className='text-center text-sm mt-8'>
        © NFT Marketplace. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
