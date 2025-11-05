import React from 'react';

const BrowseCategories = () => {
  const categories = [
    'Art',
    'Collectibles',
    'Music',
    'Photography',
    'Video',
    'Utility',
    'Sport',
    'Virtual Worlds',
  ];

  return (
    <section className='py-16 max-w-7xl mx-auto px-6'>
      <h2 className='text-2xl font-bold mb-8'>Browse Categories</h2>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {categories.map((cat) => (
          <div
            key={cat}
            className='bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition'
          >
            <div className='w-12 h-12 bg-gray-700 rounded-full mb-3' />
            <p className='font-medium'>{cat}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategories;
