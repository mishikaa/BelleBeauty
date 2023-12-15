import React from 'react';
import PropTypes from 'prop-types';

import './testimonial1.css';

interface TestimonialCard1Props {
  rootClassName?: string;
  quote?: string;
  location?: string;
  profile_src?: string;
  profile_alt?: string;
  name?: string;
}

const TestimonialCard1: React.FC<TestimonialCard1Props> = (props) => {
  return (
    <div className={`w-1/3 m-4 p-6 flex flex-col gap-8 bg-[var(--head-color)] ${props.rootClassName}`}>
      <div className="px-4">
        {/* Quote icon */}
        <svg viewBox="0 0 1024 1024" className="w-16">
          <path
            d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"
            className=""
          ></path>
        </svg>
        <span className="testimonial-card2-text">{props.quote}</span>
      </div>

      <div className='flex gap-10 justify-center items-center'>
        <img
          alt={props.profile_alt}
          src={props.profile_src}
          className="rounded-full w-20 h-20 "
        />
        <section className='flex flex-col justify-center'>
          <span className="text-xl font-bold">{props.name}</span>
          <span className="text-lg">{props.location}</span>
        </section>
      </div>
    </div>
  );
};

TestimonialCard1.defaultProps = {
  rootClassName: '',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo nec. Integer egestas, quam eu convallis ultrices, est nisl rutrum tellus, sed posuere velit nisi sit amet ante. In a augue porttitor, porta sapien sed, faucibus felis.',
  location: 'NY',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
  profile_alt: 'profile',
  name: 'John Doe',
};

TestimonialCard1.propTypes = {
  rootClassName: PropTypes.string,
  quote: PropTypes.string,
  location: PropTypes.string,
  profile_src: PropTypes.string,
  profile_alt: PropTypes.string,
  name: PropTypes.string,
};

export default TestimonialCard1;
