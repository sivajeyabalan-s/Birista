import React, { useEffect } from 'react';
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

function App() {
  useEffect(() => {
    function scaleSite() {
      const site = document.querySelector('.site');
      if (!site) return;
      const vw = window.innerWidth;
      if (vw < 1440) {
        const s = vw / 1440;
        site.style.transform = `scale(${s})`;
        site.style.transformOrigin = 'top left';
        site.style.width = '1440px';
        document.body.style.height = (site.offsetHeight * s) + 'px';
        document.body.style.overflowX = 'hidden';
      } else {
        site.style.transform = '';
        site.style.width = '1440px';
        document.body.style.height = '';
      }
    }
    
    scaleSite();
    window.addEventListener('resize', scaleSite);
    
    return () => window.removeEventListener('resize', scaleSite);
  }, []);

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

export default App;
