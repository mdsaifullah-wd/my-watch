import React from 'react';

const Banner = () => {
  return (
    <section className='grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto p-8 h-[calc(100vh-80px)]'>
      <div className='font-bold text-6xl'>
        <h2 className='mb-2'>The Home for the </h2>
        <h2 className='text-primary mb-10'>Greatest Collections</h2>
        <p className='text-xl text-zinc-500'>
          MyWatch is home to the greatest collection of pre-owned luxury
          watches, all certified as authentic and Collector Quality. Find your
          dream watch on the leading marketplace for luxury watches.
        </p>
      </div>
      <div>
        <img
          src='https://img.freepik.com/free-photo/elegant-watch-with-silver-golden-chain-isolated_181624-27080.jpg?t=st=1649006176~exp=1649006776~hmac=5c5ecaa914f5d24e7396ba2d225116a4afc826a990bea648195e90e1754e4f7a&w=826'
          alt='Watch'
        />
      </div>
    </section>
  );
};

export default Banner;
