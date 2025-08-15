import Image from 'next/image'
import './globals.css'
import TimeContainer from './_Components/TimeContainer'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], 
  display: 'swap',
});

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <div className='flex justify-center items-center relative min-h-screen'>
          <div className="flex flex-col bg-[white] w-[400px] sm:w-[600px] rounded-sm shadow-(--shadow-box) max-h-[651px] ">  
            {children}
          </div>
          <TimeContainer />
          <Image className='absolute bottom-[10] right-[10] sm:bottom-[40] sm:right-[40] h-auto' src='/logo.svg' width={82} height={44.28} alt='logo'/>
        </div>
      </body>
    </html>
  )
}