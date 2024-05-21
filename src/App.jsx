import { Route, Routes } from "react-router-dom";
import { Suspense, lazy,useRef, useEffect } from "react";
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap';
import Lenis from "lenis";


const Home = lazy(() => import('./Home'))
const Loading = lazy(() => import("./components/Loading"))
const ScrollToTop = lazy(() => import("./components/ScrollToTop"))
const AllProject = lazy(() => import("./AllProject"))
const Resume = lazy(() => import("./Resume"))

const App = () => {
  const lenisRef = useRef()
  
  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function update(time) {
      lenis.raf(time * 1000);
    }
  
    gsap.ticker.add(update)
  
    return () => {
      gsap.ticker.remove(update)
    }
  },[])
  return (
    <ReactLenis ref={lenisRef} autoRaf={false}>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element= {<AllProject />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Suspense>
    </ReactLenis>
  )
}

export default App;
