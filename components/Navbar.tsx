'use client';

import Link from 'next/link';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const {data: session} = useSession();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const  [providers, setProviders] = useState(null);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    } 
    fetchProviders();
  }, [])
  
  return (
    <>
      {/* NAVBAR */}
      <nav className="flex text-lg sticky top-0 justify-between items-center bg-[#212121] bg-opacity-75 mx-auto p-4 z-10">
        <Link className="text-2xl font-bold drop-shadow-[1px_2px_1px_#ECD8BD]" href='/'>BelleBeauty</Link>

        {/* Mobile Navigation Toggle Button */}
        <div className="sm:hidden flex">
          <button onClick={toggleMobileNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-4 drop-shadow-[0px_0.25px_1px_#fff]">
          <Link className="hover:font-bold hover:underline underline-offset-4" href="/about">About us</Link>
          <Link className="hover:font-bold hover:underline underline-offset-4" href="/services">Services</Link>
          <Link className="hover:font-bold hover:underline underline-offset-4" href="/gallery">Gallery</Link>
          <Link className="hover:font-bold hover:underline underline-offset-4" href="/contact">Contact Us</Link>
        </div>

        {/* {console.log(session)} */}
        {/* Mobile Navigation */}
        {isMobileNavOpen && (
          <div className="sm:hidden absolute flex flex-col gap-4 top-16 right-0 h-screen bg-[#212121] bg-opacity-75 text-white py-8 pl-4 pr-16">
            <div className='flex'>
              {session?.user ? (
                <div className='flex flex-col justify-center items-center gap-4'>
                  <Link href='/profile'>
                    <div className="bg-white rounded-full p-0.5 relative">
                      <div className="opacity-0 hover:opacity-100 duration-300 pl-20 absolute inset-0 z-10 flex justify-center items-center text-whitedrop-shadow-[0px_0.25px_1px_#fff]">Profile</div>
                      <img className="w-10 h-10 border-white rounded-full" src={session?.user.image} alt="Rounded avatar"></img>
                    </div>
                  </Link>
                  <button
                   type='button'
                   onClick={() => signOut()}
                   className='border border-slate-300 px-4 py-1 rounded-full outline-none hover:bg-slate-700 hover:font-bold focus-within:bg-slate-700 drop-shadow-[1px_1px_2px_#fff]'
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  {providers && 
                  Object.values(providers).map((provider) => (
                    <button
                       type='button'
                       key={provider.name}
                       onClick={() => signIn(provider.id)}
                       className='border border-slate-300 px-4 py-1 rounded-full outline-none hover:bg-slate-700 hover:font-bold focus-within:bg-slate-700 drop-shadow-[1px_1px_2px_#fff]'
                    >
                      Sign In
                    </button>
                  ))
                  }
            </>
              )
            }
            </div>
            <Link className="block mb-2" href="/about">About us</Link>
            <Link className="block mb-2" href="/services">Services</Link>
            <Link className="block mb-2" href="/gallery">Gallery</Link>
            <Link className="block" href="/contact">Contact Us</Link>
          </div>
        )}

        {/* Conditional Rendering for Login/Profile */}
        <div className='hidden sm:flex'>
          {session?.user ? (
            <div className='flex justify-center items-center gap-4'>
              <Link href='/profile'>
                <div className="bg-white rounded-full p-0.5 relative">
                  <div className="opacity-0 hover:opacity-100 duration-300 pt-16 absolute inset-0 z-10 flex justify-center items-center text-white drop-shadow-[0px_0.25px_1px_#fff]">Profile</div>
                  <img className="w-10 h-10 border-white rounded-full" src={session?.user.image} alt="Rounded avatar"></img>
                </div>
              </Link>
              <button
                 type='button'
                 onClick={() => signOut()}
                 className='border border-slate-300 px-4 py-1 rounded-full outline-none hover:bg-slate-700 hover:font-bold focus-within:bg-slate-700 drop-shadow-[1px_1px_2px_#fff]'
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
            {providers && 
            Object.values(providers).map((provider) => (
              <button
                 type='button'
                 key={provider.name}
                 onClick={() => signIn(provider.id)}
                 className='border border-slate-300 px-4 py-1 rounded-full outline-none hover:bg-slate-700 hover:font-bold focus-within:bg-slate-700 drop-shadow-[1px_1px_2px_#fff]'
              >
                Sign In
              </button>
            ))
            }
            </>
          )}
        </div>
      </nav>
    </>
  );
};
