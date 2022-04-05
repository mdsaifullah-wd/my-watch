import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='sticky top-0 bg-white h-20 shadow-md z-10'>
      <div className='flex justify-between items-center h-full max-w-7xl mx-auto p-8'>
        <Link to={'/'}>
          <h1 className='font-bold text-3xl'>My Watch</h1>
        </Link>
        <nav className='flex gap-5 font-semibold text-xl'>
          <Link className='hover:text-primary' to={'/'}>
            Home
          </Link>
          <Link className='hover:text-primary' to={'/reviews'}>
            Reviews
          </Link>
          <Link className='hover:text-primary' to={'/dashboard'}>
            Dashboard
          </Link>
          <Link className='hover:text-primary' to={'/blogs'}>
            Blogs
          </Link>
          <Link className='hover:text-primary' to={'/about'}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
