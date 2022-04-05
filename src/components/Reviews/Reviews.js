import React from 'react';
import useReviews from '../../hooks/useReviews/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <section>
      <h2 className='font-bold text-6xl text-center my-10'>Customer Review</h2>
      <div className='grid md:grid-cols-3 gap-10 max-w-7xl mx-auto p-8'>
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
