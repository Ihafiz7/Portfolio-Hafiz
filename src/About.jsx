import {BootstrapIcon, CSSIcon, GithubIcon, HTMLIcon, JSIcon, NetlifyIcon, ReactICon, ReactRouter, SassIcon, TailwindIcon, VsCodeIcon, } from './components/Icons'

const About = () => (
    <div id='about' className='flex flex-col gap-4 min-h-screen '>
        <div className='flex flex-col items-start xl:gap-12 sm:gap-4 w-full px-6 mb-4 mt-2'>
            <h1 className='font-bold xl:text-6xl sm:text-3xl uppercase -tracking-widest text-blue-600'>About Me</h1> 
            <p className='font-medium text-2xl text-justify'>I am a self taught developer with a passion for frontend development I have hands-on experience with HTML, CSS, JavaScript, and React from various personal projects. I am passionate about building responsive and accessible web applications with a focus on user experience and design. I thrive in collaborative environments and am eager to learn from seasoned developers while contributing my skills. As a dedicated and quick learner, I am excited to begin my professional journey and make a meaningful impact in the tech world.</p>
        </div>
        <div className='flex flex-col items-start xl:gap-12 sm:gap-4 w-full px-6'>
            <h1 className='font-bold xl:text-6xl sm:text-3xl -tracking-widest text-blue-600'>SKILLS</h1>
            <div className='flex items-center justify-between w-full'>
                <HTMLIcon />
                <CSSIcon />
                <JSIcon />
                <ReactICon />
                <ReactRouter />
                <TailwindIcon />
                <BootstrapIcon />
                <SassIcon />
                <GithubIcon />
                <NetlifyIcon />
                <VsCodeIcon />
            </div>
        </div>
    </div>
)

export default About