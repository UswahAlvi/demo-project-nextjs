import Image from 'next/image'
import './globals.css'
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='flex justify-center items-center relative min-h-screen'>
          <div className="flex flex-col bg-[white] w-[590px] rounded-sm shadow-lg max-h-[551px] min-h-[300px]">  
            {children}
          </div>
        <Image className='absolute bottom-[50] right-[50] h-auto' src='/logo.svg' width={82} height={44.28} alt='logo'/>
        </div>
      </body>
    </html>
  )
}