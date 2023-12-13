"use client";

import Link from "next/link";

import { Averia_Serif_Libre,Della_Respira } from 'next/font/google'
import { useSession } from "next-auth/react";
const della = Della_Respira({ weight: '400',subsets: ['latin'] })

import {isAdmin} from '@utils/isAdmin';

export const HeroSection = () => {
  const {data: session} = useSession();
  // const checkForAdmin = isAdmin(session?.user._id);
  // console.log(session?.user._id)
  var userIsAdmin;
  if (session) {
    userIsAdmin = isAdmin(session?.user?.id);
  }

  return (
    <div className="h-min-screen flex-col">
      <div className="flex flex-col md:flex-row container mx-auto gap-4 p-4">
        {/* Text section */}
        <div className="left_block flex flex-1 items-center">
          <div className="flex flex-col justify-center items-center gap-5">
            <span className={`${della.className} text-center text-[5rem]  leading-tight text-[color:var(--head-color)] flex items-center justify-center`}>
              Unveiling Your Timeless Elegance
            </span>
            <Link 
            className="border cursor-pointer rounded-xl bg-[var(--head-color)] text-[var(--bg-color)] text-lg font-bold p-4 z-1
            shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] drop-shadow-[1px_1px_2px_var(--head-color)] uppercase hover:scale-105 hover:font-extrabold"
            href={!userIsAdmin ? '/bookAppointment' : '/addService'}
            >
              {!userIsAdmin ? "Book an appointment" : "Add a service"}
            </Link>
          </div>
        </div>
  
        {/* Image section */}
        <div className="right_block flex-1 h-screen">
          <img className="w-full h-[102%]" src="/comp2.png" alt="bg-image" />
          <img className="absolute -z-20 top-10 right-0 w-full h-full" src="/compBg.png" alt="comp-bg-image" />
        </div>
      </div>
    
      {/* BAR */}
      <div className="bg-[var(--head-color)] relative bottom-20 -z-40 h-auto md:h-20 text-black font-medium flex pl-2 md:pl-[15%] gap-10 items-center">
        <div className="flex flex-col gap-2 md:flex-row justify-center items-star md:items-center">
          <span className="flex items-center gap-2">
            <img className="h-8" src="/logo/diamond.png" alt="diamond" />
            <p>Quality</p>
          </span>
          <span className="flex items-center hidden md:flex gap-2">
            <img className="h-8" src="/logo/certificate.png" alt="certificate" />
            <p>Certified</p>
          </span>
          <span className="flex items-center gap-2">
            <img className="h-8" src="/logo/guarantee-certificate.png" alt="guarentee-certificate" />
            <p>Standard services</p>
          </span>
        </div>
      </div>
    </div>
  )
}
