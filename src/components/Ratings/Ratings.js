import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const Ratings = ({ ratings }) => {
  const stars = [];
  const fullStars = Math.floor(ratings);
  const halfStar = 5 - ratings;
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesomeIcon
        icon={faStar}
        className='w-3 h-3 text-yellow-400 inline'></FontAwesomeIcon>
    );
  }
  return (
    <div>
      <span>{stars}</span>
      <span>
        {halfStar === 0.5 && (
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            className='w-3 h-3 text-yellow-400'
          />
        )}
      </span>
      <span>
        {halfStar === 1 && (
          <FontAwesomeIcon icon={faStar} className='w-3 h-3 text-slate-300' />
        )}
      </span>
    </div>
  );
};

export default Ratings;
