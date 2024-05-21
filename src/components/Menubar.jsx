import { Link } from "react-router-dom";

 const Menubar = ({ handleClcik, handleScroll}) => {
  return (
    <div className='flex items-start gap-12'>
        <div className='py-4 left-2'>
            <img src="images/cross.svg" alt="X Icon" className='w-12 h-12' onClick={handleClcik} />
        </div>
        <ul className="flex flex-col items-center gap-4 text-xl my-8">
          <li className="nav-li" onClick={() =>handleScroll('about')}>ABOUT</li>
          <li className="nav-li" onClick={() =>handleScroll('projects')}>PROJECTS</li>
          <li className="nav-li"><Link to='/resume'>RESUME </Link></li>
          <li className="nav-li" onClick={() =>handleScroll('contact')}>CONTACT</li>
        </ul>
    </div>
  )
}
export default Menubar ;
