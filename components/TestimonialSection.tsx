import React from 'react';

import TestimonialCard1 from './TestimonialCard1';
import TestimonialCard2 from './TestimonialCard2';
import '@styles/TestimonialSection.css';
import TestimonialsCarousel from './TestimonialCarousel';

const TestimonialSection: React.FC = (props) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-blue mt-10'>
      <h1 className='text-[3rem] font-extrabold'>TESTIMONIALS</h1>
      <div className='flex justify-center text-black'>
        <TestimonialCard1 />
        <div className='flex flex-col justify-between'>
          <TestimonialCard2 />
          <TestimonialCard2 />
        </div>
        <TestimonialCard1 />
      </div>
      {/* <TestimonialsCarousel /> */}
    </div>
  );
};

export default TestimonialSection;
