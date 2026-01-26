
import React, { useLayoutEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Doverie from './components/Doverie';
import Vitrina from './components/Vitrina';
import { generalConfig } from './config/general';

const App: React.FC = () => {
  useLayoutEffect(() => {
    const root = document.documentElement;
    // Передаем все коэффициенты и константы макета в CSS
    root.style.setProperty('--visual-correction', generalConfig.layout.visualCorrection.toString());
    root.style.setProperty('--visual-correction-mobile', generalConfig.layout.visualCorrectionMobile.toString());
    root.style.setProperty('--mobile-design-width', generalConfig.layout.mobileDesignWidth.toString());
    root.style.setProperty('--desktop-design-width', generalConfig.layout.desktopDesignWidth.toString());
    root.style.setProperty('--base-font-size', generalConfig.layout.baseFontSize.toString());
  }, []);

  return (
    <div className="relative w-full bg-[#0B1221]">
      <Header />
      <main className="relative w-full">
        <Hero />
        <Vitrina />
        <Doverie />
      </main>
    </div>
  );
};

export default App;
