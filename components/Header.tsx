
import React, { useState, useEffect } from 'react';
import { generalConfig } from '../config/general';
import { heroConfig } from '../config/hero';

const toRem = (px: number | string) => {
  if (typeof px === 'string' && (px.includes('calc') || px.includes('%') || px.includes('vw'))) return px;
  if (typeof px === 'string') {
    return px.replace(/(-?\d*\.?\d+)px/g, (match, p1) => {
      const val = parseFloat(p1);
      return `${val / 16}rem`;
    });
  }
  return `${(px as number) / 16}rem`;
};

const Header: React.FC = () => {
  const [headerOpacity, setHeaderOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 150, 1);
      const finalOpacity = progress * generalConfig.header.opacity;
      setHeaderOpacity(finalOpacity);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHamburgerClick = () => {
    console.log('Hamburger menu toggled');
  };

  const blurValue = toRem(generalConfig.header.blur);
  const dynamicBg = `rgba(11, 18, 33, ${headerOpacity})`;
  const dynamicBorder = `rgba(255, 255, 255, ${headerOpacity * 0.05})`;

  const getDropShadowFilter = (shadowStr: string) => {
    return shadowStr
      .split(/,(?![^\(]*\))/)
      .filter(s => s.trim())
      .map(s => `drop-shadow(${toRem(s.trim())})`)
      .join(' ');
  };

  const logoFilter = getDropShadowFilter(generalConfig.headerStyles.logoShadow);
  const iconFilter = `brightness(0) invert(1) ${getDropShadowFilter(generalConfig.headerStyles.iconShadow)}`;
  const navTextShadow = toRem(generalConfig.headerStyles.navTextShadow);
  const smallTextShadow = toRem(generalConfig.headerStyles.smallTextShadow);

  return (
    <header 
      style={{ 
        backgroundColor: dynamicBg,
        backdropFilter: headerOpacity > 0 && generalConfig.header.blur > 0 ? `blur(${blurValue})` : 'none',
        WebkitBackdropFilter: headerOpacity > 0 && generalConfig.header.blur > 0 ? `blur(${blurValue})` : 'none',
        borderBottom: `1px solid ${dynamicBorder}`,
      }}
      className="main-header fixed top-0 left-0 w-full flex justify-center items-center z-[80] transition-all duration-300 ease-out"
    >
      <div 
        style={{ maxWidth: toRem(generalConfig.layout.containerMaxWidth) }}
        className="header-container w-full flex justify-between items-center"
      >
        <div className="flex items-center logo-block">
          <div className="logo-wrapper">
            <img 
              src={heroConfig.images.logo} 
              alt="Logo" 
              style={{ filter: logoFilter }}
              className="w-full h-full object-contain" 
            />
          </div>
          <div className="brand-text-block">
            <div 
              style={{ letterSpacing: '0.15em', textShadow: navTextShadow }}
              className="brand-name font-black leading-none uppercase text-white"
            >
              {generalConfig.brand.name}
            </div>
            <div 
              style={{ letterSpacing: '0.2em', textShadow: smallTextShadow }}
              className="brand-subtext text-white uppercase font-bold"
            >
              {generalConfig.brand.subtext}
            </div>
          </div>
        </div>

        <nav 
          style={{ 
            fontSize: toRem(generalConfig.typography.menuFontSize),
            fontWeight: generalConfig.typography.menuFontWeight,
            letterSpacing: generalConfig.typography.menuLetterSpacing,
          }}
          className="header-nav hidden md:flex uppercase text-white"
        >
          {generalConfig.navigation.map((link, index) => (
            <a key={index} href={link.href} style={{ textShadow: navTextShadow }} className="nav-link transition-all duration-300">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center contacts-block">
          <a href={generalConfig.contacts.tgLink} className="tg-link transition-transform hover:scale-110" style={{ filter: iconFilter }}>
            <img src={heroConfig.images.telegramHeader} alt="Telegram" className="tg-icon" />
          </a>
          <a href={`tel:${generalConfig.contacts.phoneRaw}`} style={{ textShadow: navTextShadow }} className="phone-link font-bold tracking-tight text-white whitespace-nowrap">
            {generalConfig.contacts.phone}
          </a>
        </div>

        <button 
          onClick={handleHamburgerClick}
          className="hamburger-btn flex md:hidden flex-col items-end justify-center transition-opacity active:opacity-60"
        >
          <span className="h-bar bar-long"></span>
          <span className="h-bar bar-short"></span>
        </button>
      </div>

      <style>{`
        .main-header {
          height: var(--header-h);
          padding: 0 var(--header-px);
          will-change: background-color, border-bottom;
        }

        /* --- ПЕРЕМЕННЫЕ ПО УМОЛЧАНИЮ (DESKTOP) --- */
        :root {
          --header-h: ${toRem(generalConfig.header.desktop.height)};
          --logo-sz: ${toRem(generalConfig.header.desktop.logoSize)};
          --header-px: ${toRem(generalConfig.header.desktop.paddingX)};
          --nav-gap: ${toRem(generalConfig.header.desktop.navGap)};
        }

        /* --- MOBILE OVERRIDES --- */
        @media (max-width: 768px) {
          :root {
            --header-h: ${toRem(generalConfig.header.mobile.height)};
            --logo-sz: ${toRem(generalConfig.header.mobile.logoSize)};
            --header-px: ${toRem(20)}; /* Жесткая фиксация 20px */
            --nav-gap: ${toRem(generalConfig.header.mobile.navGap)};
          }
          
          .main-header {
            padding-top: ${toRem(25)} !important;
            padding-bottom: ${toRem(generalConfig.header.mobile.paddingBottom)} !important;
            height: var(--header-h) !important;
          }

          .header-nav { display: none; }
          .brand-text-block { display: none; }
          .contacts-block { display: none; }
          
          .logo-block {
            gap: 0;
          }

          .hamburger-btn {
            gap: 0.4375rem;
            height: 2.5rem;
            width: 2.5rem;
          }
          .h-bar {
            height: 3px;
            background-color: white;
            border-radius: 4px;
            display: block;
          }
          .bar-long {
            width: ${toRem(24)};
          }
          .bar-short {
            width: ${toRem(18)};
          }
        }

        .logo-wrapper {
          width: var(--logo-sz);
          height: var(--logo-sz);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-block {
          gap: 1.5rem;
        }

        .brand-name { font-size: 1.5rem; }
        .brand-subtext { font-size: 0.625rem; margin-top: 0.25rem; }

        .header-nav {
          gap: var(--nav-gap);
        }

        .contacts-block {
          gap: 2rem;
        }

        .tg-icon {
          width: 1.75rem;
          height: 1.75rem;
        }

        .phone-link {
          font-size: 1.25rem;
        }
      `}</style>
    </header>
  );
};

export default Header;
