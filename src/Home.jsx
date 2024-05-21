import { lazy } from 'react'
const Navbar = lazy(() => import('./components/Navbar'))
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./About'))
const Projects = lazy(() => import('./Projects'))
const ContactMe = lazy(() => import('./ContactMe'))

const Home = () => {
  return (
    <div className='dark:bg-black dark:text-white transition-colors duration-700'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default Home