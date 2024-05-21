import { Link } from "react-router-dom"
import { lazy } from "react"
const CvDownload = lazy(() => import("./components/CvDownload"))
const PdfViewer = lazy(() =>import("./components/PdfViewer"))


const Resume = () => {
  return (
    <div className="relative dark:bg-black dark:text-white">
      <div className="flex items-center justify-between p-4 my-4 sticky top-4 z-10 bg-transparent">
        <p className="text-4xl tracking-wide font-bold cursor-pointer lowercase flex items-center hover:italic"> <span className="text-6xl">H</span>AFIZ</p>
        <Link to='/'> <img src="images/arrow-back.svg" alt="Back Arrow" className="w-16 h-16" /></Link>
      </div>
      <div className="flex items-center justify-center">
        <PdfViewer  />
      </div>
      <div className="flex justify-end p-4">
        <CvDownload />
      </div>
      
    </div>
  )
}

export default Resume