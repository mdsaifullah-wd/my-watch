import Ratings from '../Ratings/Ratings';

const Review = (props) => {
  const { name, img, title, review, ratings } = props.review;

  return (
    <div className='rounded-lg shadow-lg p-5'>
      <div className='flex items-center mb-5'>
        <img src={img} alt='' className='w-16 h-16 rounded-full mr-4' />
        <div>
          <p className='font-bold text-xl'>{name}</p>
          <Ratings ratings={ratings}></Ratings>
        </div>
      </div>
      <h3 className='font-bold text-lg mb-1'>{title}</h3>
      <p className='text-lg'>{review}</p>
    </div>
  );
};

export default Review;
