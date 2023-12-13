import { Navbar } from '@/components/Navbar';
import Provider from '@/components/Provider';
import '@styles/globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] })
import { Averia_Serif_Libre,Della_Respira } from 'next/font/google'

const averia = Averia_Serif_Libre({ weight: '300',subsets: ['latin'] })
const della = Della_Respira({ weight: '400',subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BelleBeauty',
  description: 'A beauty salon website',
}

interface Children {
  children: React.ReactNode
}

const RootLayout: React.FC<Children> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-gray-900 text-slate-100`}>
          <Provider>
            <Navbar />
            {children}
          </Provider>
      </body>
    </html>
  )
}

export default RootLayout;