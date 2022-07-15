import React from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import WindowSizes from './../WindowSizes';
import Dashboard from './../../page/Dashboard';
import Chao from './../ChaoSection/Chao';
import StopWatch from './../StopWatchSection/StopWatch';
const RouterSection = () => {
  return <>
    <div>static start for application</div>
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/winsizes'>Winsizes</Link></li>
          <li><Link to='/dashboard/chao'>Chao</Link></li>
          <li><Link to='/dashboard/stopwatch'>StopWatch</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/winsizes" element={<WindowSizes />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path="chao" element={<Chao name='elon' id={1}/>} />
          <Route path="stopwatch" element={<StopWatch />} />
        </Route>
        <Route path="/*" element={<PageNotFount />} />
      </Routes>
    </BrowserRouter>
    <div>static end for application</div>

  </>
}
const Home = () => <section>HOME</section>
const About = () => <section>ABOUT</section>
const Contact = () => <section>Contact</section>
const PageNotFount = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/', { replace: true });
  }, 5000);
  return <section>404, replace to home!</section>
}

export default RouterSection;

