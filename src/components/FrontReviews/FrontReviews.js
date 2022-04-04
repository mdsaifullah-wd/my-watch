import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews/useReviews';
import Review from '../Review/Review';

const FrontReviews = () => {
  const [reviews, setReviews] = useReviews();
  const navigate = useNavigate();
  return (
    <section className='mb-20'>
      <h2 className='font-bold text-4xl text-center my-10'>
        What Our Customers Say!
      </h2>
      <div className='grid md:grid-cols-3 gap-10 max-w-7xl mx-auto p-8'>
        {reviews
          .filter((review) => review.id < 4)
          .map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
      </div>
      <button
        onClick={() => navigate('/reviews')}
        className='bg-primary px-8 py-4 rounded-lg text-white text-xl block mx-auto'>
        See All Reviews
      </button>
    </section>
  );
};

export default FrontReviews;
