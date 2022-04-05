import React from 'react';

const Banner = () => {
  return (
    <section className='grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto p-8 h-[calc(100vh-80px)]'>
      <div className='font-bold text-5xl'>
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
          src='https://pngimg.com/uploads/watches/watches_PNG101452.png'
          alt='Watch'
          className='w-3/4 ml-auto'
        />
      </div>
    </section>
  );
};

export default Banner;
