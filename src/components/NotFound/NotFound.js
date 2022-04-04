import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='bg-gray'>
      <div className='h-[calc(100vh-80px)] flex items-center max-w-7xl mx-auto p-8'>
        <aside className='not-found-aside'>
          <img
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png'
            alt=''
          />
        </aside>
        <main className='text-white'>
          <h1 className='text-5xl mb-5'>Sorry!</h1>
          <p className='text-2xl mb-5'>
            Either you aren't cool enough to visit this page or it doesn't exist{' '}
            <em>. . . like your social life.</em>
          </p>
          <Link
            to={'/'}
            className='bg-primary px-6 py-3 rounded-lg inline-block'>
            You can go now!
          </Link>
        </main>
      </div>
    </div>
  );
};

export default NotFound;
