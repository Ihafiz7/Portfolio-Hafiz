import data from '../data/data';
import gsap from 'gsap'
import Lenis from 'lenis';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useEffect } from 'react';

const ProjectCard = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const entries = document.querySelectorAll('.entry');
    entries.forEach(entry => {
      let entryMeta = entry.querySelector('.entry__meta');
      let entryMedia = entry.querySelector('.entry__media');

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: entry,
          start: 'top bottom',
          end: 'bottom 90%',
          scrub: true,
        },
      });
      tl.fromTo(entryMeta, { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1 });
      tl.fromTo(entryMedia, { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1 }, '<');
    });

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className='p-4 flex-col flex gap-8 dark:bg-black'>
      {data.map((item, index) => (
        <div key={index} className={`w-full h-full flex items-start gap-8 ${index % 2 !== 0 ? 'flex-row-reverse xl:flex-row-reverse sm:flex-col' : 'xl:flex-row sm:flex-col'} entry`}>
          <img src={item.mainImg} alt={item.name} className='xl:w-3/4 sm:w-full h-auto object-cover entry__meta cursor-pointer' />
          <div className='flex flex-col items-start w-full gap-8 entry__media'>
            <h1 className='text-4xl font-bold -tracking-wide text-blue-600'>{item.name}</h1>
            <div className='flex items-center gap-4 w-full entry__meta'>
              <button className='btn btnp'><a href={item.link1} target='_blank'>Code</a></button>
              <button className='btn btnp'><a href={item.link2} target='_blank'>Live Demo</a></button>
            </div>
            <p className='text-xl xl:font-semibold sm:font-normal text-justify dark:text-white'>{item.des}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectCard