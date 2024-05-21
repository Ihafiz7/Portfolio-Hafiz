import { useEffect, useState } from "react";

const DarkMode = () => {
    const [darkMode, SetDarkMode] = useState(false);

    useEffect(() => {
        darkMode ? (
        document.documentElement.classList.add('dark')
        ):(
        document.documentElement.classList.remove('dark')
        )
    }, [darkMode]);

    const handleClick = () => {
        SetDarkMode(!darkMode);
    };
  return (
    <div>
        <label className="text-[17px] relative inline-block w-[3.5em] h-[2em]">
            <input type="checkbox" defaultChecked={darkMode} onClick={handleClick} className="w-0 h-0 opacity-0" />
            <span className="slider"></span>
        </label>
    </div>
  )
}

export default DarkMode;
