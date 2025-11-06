const TrendingCollection = () => {
  return (
    <section className='py-16 max-w-7xl mx-auto px-6'>
      <h2 className='text-2xl font-bold mb-2'>Trending Collection</h2>
      <p className='mb-8'>
        Checkout our weekly updated trending collection.
      </p>
      <div className='grid md:grid-cols-3 gap-8'>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className='bg-gray-800 rounded-2xl p-4 hover:shadow-lg transition-all'
          >
            <img
              src={`/collection-${i}.png`}
              alt=''
              className='rounded-lg mb-3'
            />
            <div className='flex gap-2 mb-2'>
              <img src='/thumb1.png' alt='' className='w-1/3 rounded-lg' />
              <img src='/thumb2.png' alt='' className='w-1/3 rounded-lg' />
              <img src='/thumb3.png' alt='' className='w-1/3 rounded-lg' />
            </div>
            <h3 className='font-semibold'>DSGN Animals</h3>
            <p className='text-sm'>@MrFox</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCollection;
