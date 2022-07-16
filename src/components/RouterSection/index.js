import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import WindowSizes from './../WindowSizes';
import Dashboard from './../../page/Dashboard';
import Chao from './../ChaoSection/Chao';
import StopWatch from './../StopWatchSection/StopWatch';
import PageNotFount from '../../page/NotFound';
import PageCounter from '../../page/PageCounter';
import PageLoader from '../../page/PageLoader';
const RouterSection = () => {
  return <>
    <div>static start for application</div>
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/counter'>Counter</Link></li>
          <li><Link to='/loader'>Loader</Link></li>
          <li><Link to='/winsizes'>Winsizes</Link></li>
          <li>Dashboard
            <ul>
              <li><Link to='/dashboard/chao'>Chao</Link></li>
              <li><Link to='/dashboard/stopwatch'>StopWatch</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<PageCounter />} />
        <Route path="/loader" element={<PageLoader />} />
        <Route path="/winsizes" element={<WindowSizes />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path="chao" element={<Chao name='elon' id={1} />} />
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


export default RouterSection;

