import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
  const [barIcon, setBarIcon] = useState(true);
  const handleToggleBarIcon = () => {
    setBarIcon(!barIcon);
  };
  const navClass = `flex flex-col md:flex-row absolute md:static right-0 gap-5 font-semibold text-lg bg-white w-full md:w-auto text-center py-5 md:py-0 transition-opacity duration-500 ${
    barIcon ? 'top-[-500px] opacity-0 md:opacity-100' : 'top-[80px] opacity-100'
  }`;
  return (
    <header className='sticky top-0 bg-white h-20 shadow-md z-10'>
      <div className='flex justify-between items-center h-full max-w-7xl mx-auto p-8'>
        <Link to={'/'}>
          <h1 className='font-bold text-3xl'>My Watch</h1>
        </Link>
        <div onClick={handleToggleBarIcon} className='md:hidden cursor-pointer'>
          {barIcon ? (
            <FontAwesomeIcon
              className='text-2xl'
              icon={faBars}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon className='text-2xl' icon={faX}></FontAwesomeIcon>
          )}
        </div>
        <nav className={navClass}>
          <CustomLink
            onClick={handleToggleBarIcon}
            className='hover:text-primary uppercase'
            to={'/'}>
            Home
          </CustomLink>
          <CustomLink
            onClick={handleToggleBarIcon}
            className='hover:text-primary uppercase'
            to={'/reviews'}>
            Reviews
          </CustomLink>
          <CustomLink
            onClick={handleToggleBarIcon}
            className='hover:text-primary uppercase'
            to={'/dashboard'}>
            Dashboard
          </CustomLink>
          <CustomLink
            onClick={handleToggleBarIcon}
            className='hover:text-primary uppercase'
            to={'/blogs'}>
            Blogs
          </CustomLink>
          <CustomLink
            onClick={handleToggleBarIcon}
            className='hover:text-primary uppercase'
            to={'/about'}>
            About
          </CustomLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
