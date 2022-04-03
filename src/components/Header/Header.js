import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-between items-center sticky top-0 bg-white h-20 max-w-7xl mx-auto p-8'>
      <h1 className='font-bold text-3xl'>My Watch</h1>
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
    </header>
  );
};

export default Header;
