import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <>    
    <footer className="bg-white dark:bg-gray-900 w-full">
        <div className="mx-auto w-full p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                  <a href="https://MysticMirage.vercel.app/" className="flex items-center">
                      <img src="/logo/belleBeauty.png" className="h-8 me-3" alt="logo" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MysticMirage</span>
                  </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                          <li className="mb-4">
                              <a href="https://MysticMirage.vercel.app/" className="hover:underline">MysticMirage</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                          <li className="mb-4">
                              <a href="https://instagram.com" className="hover:underline ">Instagram</a>
                          </li>
                          <li>
                              <a href="https://facebook.com" className="hover:underline">Facebook</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                          <li className="mb-4">
                              <a href="#" className="hover:underline">Privacy Policy</a>
                          </li>
                          <li>
                              <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://MysticMirage.vercel.app/" className="hover:underline">MysticMirage</a>. All Rights Reserved.
              </span>
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Made by <Link href='https://mishikajaiswal.netlify.app/'>Mishika Jaiswal</Link>
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                  <a href="https://www.facebook.com/aishwarya.jaiswal.5095?mibextid=vk8aRt" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                        </svg>
                      <span className="sr-only">Facebook page</span>
                  </a>
                  <a href="https://www.instagram.com/_aishwarya_j_20?igsh=bzZrZGx3MjY4eDRr" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5_logos</title><path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" fill="currentColor"></path><path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" fill="currentColor"></path><path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" fill="currentColor"></path></svg>
                      <span className="sr-only">Instagram page</span>
                  </a>
                  
                  
            </div>
          </div>
        </div>
    </footer>
</>

  )
}

export default Footer;