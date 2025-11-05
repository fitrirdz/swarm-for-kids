import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Setup Your Wallet',
      desc: 'Connect your wallet to start exploring and collecting NFTs.',
    },
    {
      title: 'Create Collection',
      desc: 'Upload your work and set up your NFT collection easily.',
    },
    {
      title: 'Start Earning',
      desc: 'List your NFTs for sale and start earning crypto instantly.',
    },
  ];
  return (
    <section className='py-16 max-w-7xl mx-auto px-6 text-center'>
      <h2 className='text-2xl font-bold mb-2'>How It Works</h2>
      <p className='text-gray-400 mb-10'>Find out how to get started.</p>
      <div className='grid md:grid-cols-3 gap-6'>
        {steps.map((step) => (
          <div key={step.title} className='bg-gray-800 rounded-2xl p-6'>
            <div className='w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4' />
            <h3 className='font-semibold mb-2'>{step.title}</h3>
            <p className='text-gray-400'>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
