"use client";

import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion';

export const ImageSlider = ({dirname}) => {
    const [positionIdx, setPositionIdx] = useState([0, 1, 2, 3, 4, 5])
    const handleNext = () => {
      setPositionIdx((prevIdx) => {
        const updatedIdx = prevIdx.map((prevIdx) => (prevIdx+1) % 5);
        return updatedIdx;
      })
    }
    const imageSources = [];
    for (let i = 1; i <= 5; i++) {
      imageSources.push(`/gallery/${dirname}/img${i}.jpg`);
    }
  
    const positions = [
      'center',
      'left1',
      'left',
      'right',
      'right1'
    ]
  
    const imageVariants = {
      center: {x: '0%', scale: 0.8, zIndex: 5},
      left1: {x: '-50%', scale: 0.6, zIndex: 2},
      left: {x: '-90%', scale: 0.4, zIndex: 1},
      right: {x: '90%', scale: 0.4, zIndex: 1},
      right1: {x: '50%', scale: 0.6, zIndex: 2},
    }

    // Use useEffect to start the automatic slider movement
    useEffect(() => {
      const intervalId = setInterval(handleNext, 3000); // Change the interval time as needed (e.g., 3000 milliseconds for 3 seconds)
      
      // Clear the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='flex flex-col items-center w-full gap-2 h-screen'>
            {imageSources.map((image, index) => (
              <motion.img
                 key={index}
                 src={image}
                 alt={image}
                 className="rounded-md"
                 initial="center"
                 animate={positions[positionIdx[index]]}
                 variants={imageVariants}
                 transition={{duration: 0.5}}
                 style={{width: '40%', position: 'absolute'}}
              />
            ))}
        </div>
    )
}
