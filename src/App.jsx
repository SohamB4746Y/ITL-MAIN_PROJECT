import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Core/Navbar';
import './App.css';
import { ReactLenis } from 'lenis/react';
import Footer from './Core/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import EcosystemPage from './Pages/EcosystemPage';
import CoursesPage from './Pages/CoursesPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <ReactLenis root>
      <div className='absolute top-0 left-0 w-full z-50'>
        <Navbar />
      </div>
      <div className='relative'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-institute" element={<AboutPage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </ReactLenis>
  );
}

export default App;
