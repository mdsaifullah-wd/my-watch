import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews/useReviews';
import Review from '../Review/Review';

const FrontPageReviews = () => {
  const [reviews] = useReviews();
  const navigate = useNavigate();
  return (
    <section className='pb-20'>
      <h2 className='font-bold text-3xl md:text-4xl text-center text-primary mt-10 md:mb-10'>
        Hear from Our Customers!
      </h2>
      <div className='grid md:grid-cols-3 gap-10 max-w-7xl mx-auto p-8 mb-8'>
        {reviews
          .filter((review) => reviews.indexOf(review) < 3)
          .map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
      </div>
      <button
        onClick={() => navigate('/reviews')}
        className='bg-primary hover:bg-gray px-8 py-4 rounded-lg text-white text-xl block mx-auto'>
        See All Reviews
      </button>
    </section>
  );
};

export default FrontPageReviews;
