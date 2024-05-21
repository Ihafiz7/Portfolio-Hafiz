import { lazy, useState } from "react";
import { Link } from "react-router-dom";
const Menubar = lazy(() => import('./Menubar'));
const DarkMode = lazy(() => import('./DarkMode'));

 const Navbar = () => {
  const [menu,setMenu] = useState(false);
  const handleClick= () => {
    setMenu(!menu);
  }
  const handleScroll = (p) => {
    document.getElementById(p).scrollIntoView({behavior:'smooth'})
  }
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center">
        <p className="text-4xl tracking-wide font-bold cursor-pointer lowercase flex items-center hover:italic"> <span className="text-6xl">H</span>AFIZ</p>
      </div>
      <div className="flex items-center gap-8 ">
        <ul className="xl:flex items-center gap-4 text-xl sm:hidden">
          <li className="nav-li" onClick={() =>handleScroll('about')}>ABOUT</li>
          <li className="nav-li" onClick={() =>handleScroll('projects')}>PROJECTS</li>
          <li className="nav-li"> <Link to='/resume'>RESUME </Link> </li>
          <li className="nav-li" onClick={() =>handleScroll('contact')}>CONTACT</li>
        </ul>
        <DarkMode />
        <div className="xl:hidden sm:flex">
          <img src="images/menu.svg" alt="Menu Icon" className="w-8 h-8" onClick={handleClick} />
        </div>
      </div>

      {menu && (
        <div className="absolute top-0 z-10 w-full bg-white dark:bg-black">
          <Menubar handleClcik={handleClick} handleScroll={handleScroll}/>
        </div>   
      )}
    </nav>
  )
}

export default Navbar;
