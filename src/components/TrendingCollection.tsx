import FirstImage from '../assets/images/1.svg';
import SecondImage from '../assets/images/1-1.svg';
import ThirdImage from '../assets/images/1-2.svg';
import ForthImage from '../assets/images/2.svg';
import FifthImage from '../assets/images/2-1.svg';
import SixthImage from '../assets/images/2-2.svg';
import Seventh from '../assets/images/3.svg';
import Eighth from '../assets/images/3-1.svg';
import NinthImage from '../assets/images/3-2.svg';
import FoxIcon from '../assets/icons/fox.svg';
import ShroomieIcon from '../assets/icons/shroomie.svg';
import BekindIcon from '../assets/icons/bekind.svg';

const TrendingCollection = () => {
  return (
    <section className='py-20 mx-auto font-sans'>
      <h2 className='text-2xl font-bold mb-2'>Trending Collection</h2>
      <p className='mb-8'>Checkout our weekly updated trending collection.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='bg-gray-800 rounded-2xl p-4 hover:shadow-lg transition-all'>
          <img src={ForthImage} alt='' className='rounded-lg mb-3 w-full' />
          <div className='flex gap-2 mb-2'>
            <img src={FifthImage} alt='' className='w-1/3 rounded-lg' />
            <img src={SixthImage} alt='' className='w-1/3 rounded-lg' />
            <div className='font-mono font-semibold w-1/3 rounded-lg bg-primary-purple flex items-center justify-center'>
              1025+
            </div>
          </div>
          <h3 className='font-semibold'>DSGN Animals</h3>
          <div className='flex flex-row items-center gap-1'>
            <img src={FoxIcon} alt='Fox' className='w-12 h-12' />
            <p className='text-sm'>MrFox</p>
          </div>
        </div>
        <div className='bg-gray-800 rounded-2xl p-4 hover:shadow-lg transition-all'>
          <img src={FirstImage} alt='' className='rounded-lg mb-3 w-full' />
          <div className='flex gap-2 mb-2'>
            <img src={SecondImage} alt='' className='w-1/3 rounded-lg' />
            <img src={ThirdImage} alt='' className='w-1/3 rounded-lg' />
            <div className='font-mono font-semibold w-1/3 rounded-lg bg-primary-purple flex items-center justify-center'>
              1025+
            </div>
          </div>
          <h3 className='font-semibold'>Magic Mushrooms</h3>
          <div className='flex flex-row items-center gap-1'>
            <img src={ShroomieIcon} alt='Fox' className='w-12 h-12' />
            <p className='text-sm'>Shroomie</p>
          </div>
        </div>
        <div className='bg-gray-800 rounded-2xl p-4 hover:shadow-lg transition-all'>
          <img src={Seventh} alt='' className='rounded-lg mb-3 w-full' />
          <div className='flex gap-2 mb-2'>
            <img src={Eighth} alt='' className='w-1/3 rounded-lg' />
            <img src={NinthImage} alt='' className='w-1/3 rounded-lg' />
            <div className='font-mono font-semibold w-1/3 rounded-lg bg-primary-purple flex items-center justify-center'>
              1025+
            </div>
          </div>
          <h3 className='font-semibold'>Disco Machines</h3>
          <div className='flex flex-row items-center gap-1'>
            <img src={BekindIcon} alt='Fox' className='w-12 h-12' />
            <p className='text-sm'>BeKind2Robots</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCollection;
