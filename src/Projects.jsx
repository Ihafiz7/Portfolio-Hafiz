import { lazy } from 'react'
const ProjectCard = lazy(() => import('./components/ProjectCard'))
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col dark:bg-black'>
      <h1 className='xl:text-5xl sm:text-3xl font-bold -tracking-wide uppercase p-4  text-blue-600'>Some of my recent projects</h1>
      <ProjectCard />
      <button className='btn btnv self-center'><Link to='/projects'>View More Porjects</Link></button>
    </div>
  )
}

export default Projects