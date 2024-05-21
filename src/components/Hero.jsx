import { lazy } from "react";
const CvDownload = lazy(() => import('./CvDownload'))

 const Hero = () => {
  const handleScroll = (p) => {
    document.getElementById(p).scrollIntoView({behavior:'smooth'})
  }
  return (
    <div className='flex items-center justify-center w-screen h-[85dvh]'>
      <div className='sm:flrx-col xl:flex gap-12 items-center w-3/4 justify-center'>
        <div className='flex flex-col items-start gap-8'>
          <h1 className='flex flex-col text-2xl tracking-wide font-medium gap-4'>Hi, I'm Hafiz <span className='xl:text-6xl sm:text-3xl sm:font-semibold xl:font-bold sm:tracking-normal xl:tracking-widest text-blue-600'>Frontend Developer</span></h1>
          <div className='flex gap-4 w-full sm:mb-8'>
            <button onClick={() => handleScroll('contact')} className='btn btnh'>Contact Me</button>
            <CvDownload />
          </div>
        </div>
        <div>
          <img src="images/hafiz1.png" alt="Mr. Hafiz" loading='lazy' className='w-[300px] h-[300px] object-cover rounded-md cursor-pointer bg-blue-300 dark:bg-white' />
        </div>
      </div>
    </div>
  )
}

export default Hero;
