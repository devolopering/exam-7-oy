import React from 'react';

const RatingStars = ({ rating }) => {
  if (rating < 0 || rating > 5) {
    throw new Error('Rating must be between 0 and 5');
  }

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'}>
      ★
    </span>
  ));

  return <div className='text-2xl'>{stars}</div>;
};

export default RatingStars;
