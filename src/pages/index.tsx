import React from 'react';
import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Features from '../components/Features';
import Header from '../components/Header';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Pricing from '../components/Pricing';
import Product from '../components/Product';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
// import GalleryWrapper from '../components/GalleryWrapper';
import { ThemeProvider } from "@material-tailwind/react";

const App = () => {
  return (
    <ThemeProvider>
      <div className={`bg-background grid gap-y-16 overflow-hidden`}>
        <div className={`relative bg-background`}>
          <div className="max-w-7xl mx-auto">
            <div
              className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
            >
              <Header />
              <MainHero />
            </div>
          </div>
          <MainHeroImage />
        </div>
        <Canvas />
        <Features />
        <Canvas />
        <Product />
        <Canvas />
        <Gallery />
        <Canvas />
        <Pricing />
        <Canvas />
        <Contact />
        <Canvas />
        <About />
        <Analytics />
      </div>
    </ThemeProvider>
  );
};

export default App;
