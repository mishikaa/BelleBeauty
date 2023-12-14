"use client"; // required when slider is used

// components/TestimonialsCarousel.tsx
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

const TestimonialsCarousel = (props) => {
  const testimonials = [
    { id: 1, name: 'John Doe', text: 'Amazing experience with BelleBeauty!' },
    { id: 2, name: 'Jane Smith', text: 'The best beauty services in town.' },
    // Add more testimonials as needed
  ];

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings} className='flex justify-center items-center w-[90%] h-full'>
      {testimonials.map((testimonial) => (
        
        <div key={testimonial.id} className='flex flex-row justify-center items-center gap-2 w-full p-4 bg-[var(--head-color)] text-black rounded'>
          <div className='textArea inline-flex flex-col w-4/5 '>
            <svg viewBox='0 0 1024 1024' className='w-20'>
              <path
                d='M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834
              33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.02 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.02 11.44-1.8 23.16-2.746 35.106-2.746z'
                className=''
              ></path>
            </svg>

            <div className='flex flex-col gap-6'>
              <span className=''>{testimonial.text}</span>
              <span className='font-bold text-xl'>{testimonial.name}</span>
            </div>
          </div>

          <div className='profileImg inline-flex w-1/5 items-center justify-center'>
            <img
                  alt={props.picture_alt}
                  src={props.picture_src}
                  className='w-28 h-42 rounded-full'
                />
          </div>
        </div>
      ))}
    </Slider>
  );
};

TestimonialsCarousel.defaultProps = {
  picture_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
  picture_alt: 'John Doe',
};

TestimonialsCarousel.propTypes = {
  picture_src: PropTypes.string,
  picture_alt: PropTypes.string,
};

export default TestimonialsCarousel;
