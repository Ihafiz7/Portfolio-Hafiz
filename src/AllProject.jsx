import { Link } from "react-router-dom"
import allData from "./data/allData"

const AllProject = () => {
  return (
    <div className="relative dark:bg-black dark:text-white">
        <div className="flex items-center justify-between p-4 my-4 sticky top-4 z-10 bg-white dark:bg-black dark:text-white">
            <p className="text-4xl tracking-wide font-bold cursor-pointer lowercase flex items-center hover:italic"> <span className="text-6xl">H</span>AFIZ</p>
            <Link to='/'> <img src="images/arrow-back.svg" alt="Back Arrow" className="w-16 h-16" /></Link>
        </div>
        <h1 className="xl:text-5xl sm:text-2xl xl:font-bold sm:font-medium tracking-wider my-12 p-4 text-justify">Here is some of my other works that I have done all along the way.</h1>
        <div className="grid xl:grid-cols-2 sm:grid-cols-1 w-screen h-auto gap-8 p-4">
            {allData.map((data, index) => (
                <div key={index} className="flex flex-col gap-8">
                    <img src={data.img} alt={data.name} className="w-full h-full object-cover" />
                    <div className="flex flex-col items-start gap-4">
                        <h1 className='text-4xl font-bold -tracking-wide text-blue-600'>{data.name}</h1>
                        <div className='flex items-center gap-4 w-full pr-4'>
                            <button className='btn btnp'><a href={data.github} target='_blank'>Code</a></button>
                            <button className='btn btnp'><a href={data.live} target='_blank'>Live Demo</a></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AllProject