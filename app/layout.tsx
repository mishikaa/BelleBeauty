import React, { ReactNode } from 'react';
import  Navbar from '@/components/Navbar';
import Provider from '@/components/Provider';
import '@styles/globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { Averia_Serif_Libre, Della_Respira } from 'next/font/google';
import { Session } from 'next-auth';

const raleway = Raleway({ subsets: ['latin'] });
const averia = Averia_Serif_Libre({ weight: '300', subsets: ['latin'] });
const della = Della_Respira({ weight: '400', subsets: ['latin'] });

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

export const metadata: Metadata = {
  title: 'MysticMirage',
  description: 'A beauty salon website',
};

export default function RootLayout({
  children,
  params: {session},
}: {
  children: ReactNode;
  params: {
    session: Session;
  }
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-gray-900 text-slate-100`}>
        <Provider session={session}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}