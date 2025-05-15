import React,  { useState, useEffect, useRef } from 'react'; // Import useEffect
import reactLogo from './assets/react.svg';

import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import 'lenis/dist/lenis.css';
import OurMenu from './Components/OurMenu';
import Blogs from './Components/Blogs';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import { ReactLenis, useLenis } from 'lenis/react';
import Lenis from 'lenis';
import { Route, Routes, useLocation } from 'react-router-dom';
import BlogsPage from './Pages/Blogs';
import BlogMainPage from './Pages/BlogMainPage';
import MenuPage from './Pages/MenuPage';
import Reservation from './Pages/Reservation';
import { AnimatePresence } from 'motion/react';
import HomePage from './Pages/HomePage';


function App() {
  const location = useLocation()
    const menuRef = useRef(null);
const scrollToMenu = () => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // const lenis = useLenis();

  return (
    <>        
     
        <Navbar scrollToMenu={scrollToMenu} />
  <AnimatePresence mode='wait'>
   
    <Routes location={location} key={location.pathname}>
        <Route path='blog/:text' element={<BlogsPage/>}/>
      <Route path='blog' element={<BlogMainPage/>}/>
      <Route path='menu' element={<MenuPage/>}/>
      <Route path='reservation' element={<Reservation/>}/>

        <Route index element={
          <ReactLenis root>
           <HomePage/>
          </ReactLenis>
        } />
        </Routes>
        </AnimatePresence>
            <Footer />

    </>
  );
}

export default App;