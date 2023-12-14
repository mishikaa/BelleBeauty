import { DisplayImages } from '@/components/DisplayImages';
import React, { useState } from 'react'

 const Gallery = () => {
  const images1 = [];
  for (let i=1;i<=21;i++) {
      images1.push(`/gallery/makeup/img${i}.jpg`);
  }

  const images2 = [];
  for (let i=1;i<=24;i++) {
      images2.push(`/gallery/hair/img${i}.jpg`);
  }

  return (
    <div className='w-full h-full'>
        <h1 className='text-4xl w-full text-center uppercase font-bold py-8 bg-gray-800'>Our Gallery</h1>
        <DisplayImages title="our makeovers" images={images1}/>
        <DisplayImages title="hair styling / treatments" images={images2}/>
    </div>
  )
}

export default Gallery;