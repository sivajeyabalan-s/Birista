import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Services from './components/Services/Services';
import Specials from './components/Specials/Specials';
import Gallery from './components/Gallery/Gallery';
import FAQ from './components/FAQ/FAQ';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';
import MenuPage from './components/MenuPage/MenuPage';

function HomePage() {
  return (
    <div className="site" data-screen-label="Birista House Home">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Services />
      <Specials />
      <Gallery />
      <FAQ />
      <Map />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
