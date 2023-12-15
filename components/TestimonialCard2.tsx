import React from 'react';
import PropTypes from 'prop-types';

import './testimonial2.css';

interface TestimonialCard2Props {
  quote?: string;
  rootClassName?: string;
  picture_src?: string;
  picture_alt?: string;
  name?: string;
}

const TestimonialCard2: React.FC<TestimonialCard2Props> = (props) => {
  return (
    <div className='m-4 bg-[var(--head-color)] rounded h-full flex justify-center items-center gap-2'>
      <div className='flex flex-col pl-4 py-4'>
        <svg viewBox="0 0 1024 1024" className="w-20">
          <path
            d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"
            className=""
          ></path>
        </svg>
        <div className='flex flex-col gap-6'>
          <span className="">{props.quote}</span>
          <span className="font-bold text-xl">{props.name}</span>
        </div>
      </div>
      <div className='flex w-1/3 justify-center items-center'>
        <img
          alt={props.picture_alt}
          src={props.picture_src}
          className="w-28 h-28 rounded-full"
        />
      </div>
    </div>
  );
};

TestimonialCard2.defaultProps = {
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.',
  rootClassName: '',
  picture_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
  picture_alt: 'John Doe',
  name: 'John Doe',
};

TestimonialCard2.propTypes = {
  quote: PropTypes.string,
  rootClassName: PropTypes.string,
  picture_src: PropTypes.string,
  picture_alt: PropTypes.string,
  name: PropTypes.string,
};

export default TestimonialCard2;
