import React from 'react';
import ImageSlider  from '@/components/ImageSlider';

const Gallery: React.FC = () => {
  return (
    <>
      <section className='h-screen w-full flex flex-col'>
        <h1 className='text-[3rem] w-full text-center uppercase font-bold'>makeovers</h1>
        <ImageSlider dirname="makeup" />
      </section>
      <section className='h-screen w-full flex flex-col mt-24'>
        <h1 className='text-[3rem] w-full text-center uppercase font-bold'>Hair styling</h1>
        <ImageSlider dirname="hair" />
      </section>
    </>
  );
};

export default Gallery;
