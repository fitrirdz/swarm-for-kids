import React from 'react';

const DiscoverMore = () => {
  const nfts = [
    {
      title: 'Distant Galaxy',
      author: '@MoonDancer',
      price: '1.63 ETH',
      bid: '0.33 wETH',
    },
    {
      title: 'Life On Edena',
      author: '@NebulaKid',
      price: '2.3 ETH',
      bid: '0.45 wETH',
    },
    {
      title: 'AstroFiction',
      author: '@Spaceone',
      price: '3.2 ETH',
      bid: '0.52 wETH',
    },
  ];

  return (
    <section className='py-16 max-w-7xl mx-auto px-6'>
      <div className='flex justify-between items-center mb-8'>
        <div>
          <h2 className='text-2xl font-bold'>Discover More NFTs</h2>
          <p className='text-gray-400'>Explore new trending NFTs.</p>
        </div>
        <button className='border border-purple-500 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white'>
          See All
        </button>
      </div>

      <div className='grid md:grid-cols-3 gap-8'>
        {nfts.map((nft) => (
          <div
            key={nft.title}
            className='bg-gray-800 rounded-2xl p-4 hover:-translate-y-1 hover:shadow-lg transition'
          >
            <img
              src='/nft-placeholder.png'
              alt={nft.title}
              className='rounded-xl mb-3'
            />
            <h3 className='font-semibold mb-1'>{nft.title}</h3>
            <p className='text-gray-400 text-sm mb-2'>{nft.author}</p>
            <div className='flex justify-between text-sm text-gray-400'>
              <p>
                Price: <span className='text-white'>{nft.price}</span>
              </p>
              <p>
                Highest Bid: <span className='text-white'>{nft.bid}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverMore;
