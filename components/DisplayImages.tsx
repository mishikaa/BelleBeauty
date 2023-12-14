import Image from 'next/image';
import React from 'react';

export const DisplayImages = ({ title, images }) => {
  return (
    <>
        <h2 className='font-bold tracking-wider italic underline underline-offset-8 text-gray-300 text-3xl p-4 flex items-center justify-center capitalize'>{title}</h2>
        <div className='grid w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-2 mb-4'>
            {images.map((image, index) => (
                <div key={index} className='h-screen relative aspect-w-4 aspect-h-3 group overflow-hidden'>
                  <Image
                    src={image} // Add the src prop for the image source
                    alt={`Image ${index + 1}`} // Add alt text with an index
                    layout='fill' // Use layout='fill' to fill the container
                    objectFit='contain sm:cover' // Use objectFit='contain' to fit within the container
                    className='rounded-md transition-transform duration-300 transform group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300'></div>
                </div>
            ))}
        </div>
    </>
  );
};
