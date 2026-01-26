
import React, { useEffect, useRef, useState } from 'react';
import { heroConfig, HERO_STYLE_CONFIG } from '../config/hero';
import { generalConfig } from '../config/general';

const toRem = (px: number | string) => {
  if (typeof px === 'string' && (px.includes('calc') || px.includes('%') || px.includes('vw') || px.includes('vh'))) return px;
  if (typeof px === 'string') {
    return px.replace(/(-?\d*\.?\d+)px/g, (match, p1) => {
      const val = parseFloat(p1);
      return `${val / 16}rem`;
    });
  }
  return `${(px as number) / 16}rem`;
};

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const cleanShadows = HERO_STYLE_CONFIG.common.shadows.h1.replace(/\/\*[\s\S]*?\*\//g, '').trim();
  const shadowFilter = cleanShadows
    .split(/,(?![^\(]*\))/)
    .filter(s => s.trim())
    .map(s => `drop-shadow(${toRem(s.trim())})`)
    .reverse() 
    .join(' '); 

  const currentSubtitleLines = isMobile ? heroConfig.subtitleLinesMobile : heroConfig.subtitleLines;
  const currentBgImage = isMobile ? heroConfig.images.mobile : heroConfig.images.desktop;
  const currentBgPosY = isMobile ? HERO_STYLE_CONFIG.mobile.background.positionY : HERO_STYLE_CONFIG.desktop.background.positionY;

  return (
    <section 
      ref={sectionRef}
      className="hero-section relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-start z-0"
    >
      <div className="hero-background-layer absolute inset-0 z-0 pointer-events-none">
        <div 
          className="hero-bg absolute inset-0 w-full h-full"
          style={{ 
            backgroundImage: `url(${currentBgImage})`,
            // Прямое управление позиционированием через инлайновый стиль для обхода любых CSS-конфликтов
            backgroundPosition: `center ${currentBgPosY}`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            willChange: 'transform, background-position' 
          }}
        />
      </div>

      <div 
        style={{ 
          maxWidth: toRem(generalConfig.layout.containerMaxWidth),
          paddingLeft: isMobile ? toRem(20) : '0',
          paddingRight: isMobile ? toRem(20) : '0'
        }}
        className="hero-content-container relative z-10 w-full flex flex-col items-start"
      >
        <div className="hero-top-block w-full text-left relative flex flex-col">
          
          <div className={`hero-title-wrapper reveal-item relative z-[100] w-full ${isRevealed ? 'is-revealed' : ''}`} style={{ transitionDelay: '0ms' }}>
            <h1 className="hero-title uppercase text-white">
              <span className="inline mr-[0.35em]">{heroConfig.title.white}</span>
              <span className="gold-gradient inline">{heroConfig.title.gold}</span>
            </h1>
          </div>
          
          <div 
            style={{ 
              marginTop: 'var(--stack-spacing)',
              transitionDelay: '200ms'
            }} 
            className={`hero-subtitle-container reveal-item relative flex flex-col w-fit ${isRevealed ? 'is-revealed' : ''}`}
          >
            {currentSubtitleLines.map((line, idx) => (
              <div key={idx} className="relative w-fit flex items-center subtitle-line-wrapper">
                <span className="relative z-[71] text-white leading-tight block whitespace-nowrap subtitle-text">
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-mobile-spacer flex-grow md:hidden" />

        <div 
          style={{ transitionDelay: '400ms' }}
          className={`glass-panel reveal-item relative ${isRevealed ? 'is-revealed' : ''}`}
        >
          <div className="glass-panel-content flex flex-col relative">
            <div className="flex flex-col">
              {heroConfig.bullets.map((bullet, index) => (
                <div 
                  key={index} 
                  className={`benefits-item reveal-item tracking-tight ${isRevealed ? 'is-revealed' : ''}`}
                  style={{ transitionDelay: `${600 + index * generalConfig.animations.reveal.delayStep}ms` }}
                >
                  {bullet.text}
                </div>
              ))}
            </div>

            <button className="copper-btn w-full text-white active:scale-95">
              {heroConfig.buttonText}
            </button>
            
            <p className="hero-btn-subtext text-center text-white/50 italic font-bold tracking-wider uppercase">
              {heroConfig.buttonSubtext}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          --h1-shadow: ${shadowFilter};
          --safe-zone: ${toRem(generalConfig.layout.containerMaxWidth)};
          --reveal-y: ${toRem(generalConfig.animations.reveal.yOffset)};
          --reveal-dur: ${generalConfig.animations.reveal.duration}ms;
          --reveal-ease: ${generalConfig.animations.reveal.easing};
          --shimmer-interval: ${generalConfig.animations.shimmerInterval};

          --hero-pt: ${toRem(generalConfig.header.desktop.height + (heroConfig.layout.desktop.marginTop as number))};
          --stack-spacing: ${toRem(heroConfig.layout.desktop.stackSpacing)};
          --panel-offset: ${toRem(heroConfig.layout.desktop.panelOffset)};

          --h1-size: ${toRem(HERO_STYLE_CONFIG.desktop.typography.h1Size)};
          --h1-lh: ${HERO_STYLE_CONFIG.desktop.typography.h1LineHeight};
          --h1-weight: ${HERO_STYLE_CONFIG.desktop.typography.h1Weight};
          --h1-ls: ${HERO_STYLE_CONFIG.desktop.typography.h1LetterSpacing};
          --h2-size: ${toRem(HERO_STYLE_CONFIG.desktop.typography.h2Size)};
          --h2-weight: ${HERO_STYLE_CONFIG.desktop.typography.h2Weight};
          --h2-lh: ${HERO_STYLE_CONFIG.desktop.typography.h2LineHeight};
          --h2-ls: ${HERO_STYLE_CONFIG.desktop.typography.h2LetterSpacing};
          --h2-shadow: ${HERO_STYLE_CONFIG.desktop.typography.h2Shadow};

          --panel-width: ${toRem(HERO_STYLE_CONFIG.desktop.glass.panelWidth)};
          --panel-padding: ${toRem(HERO_STYLE_CONFIG.desktop.glass.padding)};
          --panel-blur: ${toRem(HERO_STYLE_CONFIG.desktop.glass.blur)};
          --panel-opacity: ${HERO_STYLE_CONFIG.desktop.glass.opacity};
          --panel-rgb: ${HERO_STYLE_CONFIG.desktop.glass.background};
          --pbw-top: ${toRem(HERO_STYLE_CONFIG.desktop.glass.borderWidthTop)};
          --pbw-bottom: ${toRem(HERO_STYLE_CONFIG.desktop.glass.borderWidthBottom)};
          --pbw-sides: ${toRem(HERO_STYLE_CONFIG.desktop.glass.borderWidthSides)};
          --border-gradient: ${HERO_STYLE_CONFIG.desktop.glass.borderGradient};
          --outer-border-blur: ${toRem(HERO_STYLE_CONFIG.desktop.glass.outerBorderBlur)};
          --inner-stroke: ${HERO_STYLE_CONFIG.desktop.glass.innerStroke};
          --inner-stroke-w: ${toRem(HERO_STYLE_CONFIG.desktop.glass.innerStrokeWidth)};
          --edge-glow: ${HERO_STYLE_CONFIG.desktop.glass.edgeGlow};
          --edge-glow-y: ${toRem(HERO_STYLE_CONFIG.desktop.glass.edgeGlowOffset)};
          --edge-glow-blur: ${toRem(HERO_STYLE_CONFIG.desktop.glass.edgeGlowBlur)};

          --bullet-fs: ${toRem(HERO_STYLE_CONFIG.desktop.bullets.fontSize)};
          --bullet-spacing: ${toRem(HERO_STYLE_CONFIG.desktop.bullets.spacingY)};
          --bullet-core: ${toRem(HERO_STYLE_CONFIG.desktop.bullets.coreSize)};
          --bullet-ring: ${toRem(HERO_STYLE_CONFIG.desktop.bullets.ringSize)};
          --bullet-ts: ${HERO_STYLE_CONFIG.desktop.bullets.textShadow};
          --bullet-color: ${HERO_STYLE_CONFIG.desktop.bullets.color};
          --bullet-weight: ${HERO_STYLE_CONFIG.desktop.bullets.fontWeight};

          --btn-h: ${toRem(HERO_STYLE_CONFIG.desktop.buttons.height)};
          --btn-mt: ${toRem(HERO_STYLE_CONFIG.desktop.buttons.marginTop)};
          --btn-radius: ${toRem(HERO_STYLE_CONFIG.desktop.buttons.borderRadius)};
          --btn-bg: ${HERO_STYLE_CONFIG.desktop.buttons.background};
          --btn-ts: ${toRem(HERO_STYLE_CONFIG.desktop.buttons.textShadow)};
          --btn-fs: ${toRem(HERO_STYLE_CONFIG.desktop.buttons.fontSize)};
          --btn-fw: ${HERO_STYLE_CONFIG.desktop.buttons.fontWeight};
          --btn-ls: ${HERO_STYLE_CONFIG.desktop.buttons.letterSpacing};
          --btn-shadow: ${HERO_STYLE_CONFIG.desktop.buttons.boxShadow};
          
          --h1-whitespace: nowrap;
          --h1-max-w: none;
        }

        @media (max-width: 768px) {
          .hero-section {
            --hero-pt: calc(${toRem(generalConfig.header.mobile.height)} + ${heroConfig.layout.mobile.marginTop});
            --spacer-h: ${heroConfig.layout.mobile["hero-mobile-spacer-Height"]};
            --stack-spacing: ${heroConfig.layout.mobile.stackSpacing};
            --panel-offset: ${toRem(heroConfig.layout.mobile.panelOffset)};

            --h1-size: ${toRem(HERO_STYLE_CONFIG.mobile.typography.h1Size)};
            --h1-lh: ${HERO_STYLE_CONFIG.mobile.typography.h1LineHeight};
            --h1-weight: ${HERO_STYLE_CONFIG.mobile.typography.h1Weight};
            --h1-ls: ${HERO_STYLE_CONFIG.mobile.typography.h1LetterSpacing};
            --h2-size: ${toRem(HERO_STYLE_CONFIG.mobile.typography.h2Size)};
            --h2-weight: ${HERO_STYLE_CONFIG.mobile.typography.h2Weight};
            --h2-lh: ${HERO_STYLE_CONFIG.mobile.typography.h2LineHeight};
            --h2-ls: ${HERO_STYLE_CONFIG.mobile.typography.h2LetterSpacing};
            --h2-shadow: ${HERO_STYLE_CONFIG.mobile.typography.h2Shadow};

            --panel-width: ${HERO_STYLE_CONFIG.mobile.glass.panelWidth};
            --panel-padding: ${toRem(HERO_STYLE_CONFIG.mobile.glass.padding)};
            --panel-blur: ${toRem(HERO_STYLE_CONFIG.mobile.glass.blur)};
            --panel-opacity: ${HERO_STYLE_CONFIG.mobile.glass.opacity};
            --panel-rgb: ${HERO_STYLE_CONFIG.mobile.glass.background};
            --pbw-top: ${toRem(HERO_STYLE_CONFIG.mobile.glass.borderWidthTop)};
            --pbw-bottom: ${toRem(HERO_STYLE_CONFIG.mobile.glass.borderWidthBottom)};
            --pbw-sides: ${toRem(HERO_STYLE_CONFIG.mobile.glass.borderWidthSides)};
            --border-gradient: ${HERO_STYLE_CONFIG.mobile.glass.borderGradient};
            --edge-glow-y: ${toRem(HERO_STYLE_CONFIG.mobile.glass.edgeGlowOffset)};

            --bullet-fs: ${toRem(HERO_STYLE_CONFIG.mobile.bullets.fontSize)};
            --bullet-spacing: ${toRem(HERO_STYLE_CONFIG.mobile.bullets.spacingY)};
            --bullet-core: ${toRem(HERO_STYLE_CONFIG.mobile.bullets.coreSize)};
            --bullet-ring: ${toRem(HERO_STYLE_CONFIG.mobile.bullets.ringSize)};
            --bullet-ts: ${toRem(HERO_STYLE_CONFIG.mobile.bullets.textShadow)};

            --btn-h: ${toRem(HERO_STYLE_CONFIG.mobile.buttons.height)};
            --btn-mt: ${toRem(HERO_STYLE_CONFIG.mobile.buttons.marginTop)};
            --btn-radius: ${toRem(HERO_STYLE_CONFIG.mobile.buttons.borderRadius)};
            --btn-fs: ${toRem(HERO_STYLE_CONFIG.mobile.buttons.fontSize)};
            --btn-shadow: ${HERO_STYLE_CONFIG.mobile.buttons.boxShadow};

            --h1-whitespace: normal;
            --h1-max-w: 26rem; 
            min-height: 100vh !important;
            height: auto !important;
          }

          .hero-content-container {
            align-items: center !important;
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            min-height: 100vh !important;
            padding-bottom: 2rem !important;
          }
          .hero-top-block {
            text-align: center !important;
            align-items: center !important;
            margin-bottom: 0 !important;
          }
          .hero-title {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-subtitle-container {
            align-items: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
            width: 100% !important;
          }
          .subtitle-text {
            text-align: center !important;
            width: 100% !important;
          }
          .glass-panel {
             margin-top: var(--panel-offset) !important;
          }
          .hero-mobile-spacer {
            height: var(--spacer-h) !important;
            min-height: 10vh;
            flex-grow: 1;
          }
        }

        .hero-content-container {
          padding-top: var(--hero-pt);
          padding-bottom: 2rem;
        }

        .hero-top-block {
          margin-bottom: var(--panel-offset);
        }

        .hero-title-wrapper {
          filter: var(--h1-shadow);
        }

        .hero-title { 
          font-size: var(--h1-size); 
          font-weight: var(--h1-weight);
          line-height: var(--h1-lh);
          letter-spacing: var(--h1-ls);
          white-space: var(--h1-whitespace);
          max-width: var(--h1-max-w);
        }

        .subtitle-text {
          font-size: var(--h2-size);
          font-weight: var(--h2-weight);
          line-height: var(--h2-lh);
          letter-spacing: var(--h2-ls);
          color: #FFFFFF !important;
          text-shadow: var(--h2-shadow) !important;
          opacity: 1 !important;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
        }

        .glass-panel {
          width: var(--panel-width);
          padding: var(--panel-padding);
          backdrop-filter: blur(var(--panel-blur)) saturate(150%);
          -webkit-backdrop-filter: blur(var(--panel-blur)) saturate(150%);
          background-color: rgba(var(--panel-rgb), var(--panel-opacity));
          border-radius: 2.5rem;
          background-clip: padding-box;
          box-shadow: 
            inset 0 0 0 var(--inner-stroke-w) var(--inner-stroke),
            inset 0 var(--edge-glow-y) var(--edge-glow-blur) 0 var(--edge-glow),
            0 2.5rem 5rem rgba(0, 0, 0, 0.7);
          position: relative;
        }

        .glass-panel::before {
          content: "";
          position: absolute;
          inset: 0; 
          padding: var(--pbw-top) var(--pbw-sides) var(--pbw-bottom) var(--pbw-sides);
          border-radius: 2.5rem;
          background: var(--border-gradient); 
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          z-index: 10;
          filter: blur(var(--outer-border-blur));
        }

        .glass-panel-content {
          z-index: 20;
          position: relative;
        }

        .benefits-item {
          position: relative;
          padding-left: calc(var(--bullet-ring) + 1.25rem);
          margin-bottom: var(--bullet-spacing);
          display: flex;
          align-items: center;
          min-height: var(--bullet-ring);
          font-size: var(--bullet-fs);
          font-weight: var(--bullet-weight);
          color: var(--bullet-color);
          text-shadow: var(--bullet-ts);
        }
        .benefits-item::before {
          content: ""; position: absolute; top: 50%; left: calc((var(--bullet-ring) - var(--bullet-core)) / 2); transform: translateY(-50%);
          width: var(--bullet-core); height: var(--bullet-core);
          background: radial-gradient(circle at 30% 30%, #f3ad22 0%, #af7314 100%);
          border-radius: 50%; box-shadow: 0 0 15px #e67e22; z-index: 2;
        }
        .benefits-item::after {
          content: ""; position: absolute; top: 50%; left: 0; transform: translateY(-50%);
          width: var(--bullet-ring); height: var(--bullet-ring);
          border: 1px solid rgba(243, 173, 75, 0.2);
          border-radius: 50%; z-index: 1;
        }

        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-25deg); }
          20%, 100% { transform: translateX(150%) skewX(-25deg); }
        }

        .copper-btn {
          height: var(--btn-h); 
          margin-top: var(--btn-mt);
          background: var(--btn-bg); 
          box-shadow: var(--btn-shadow);
          border-radius: var(--btn-radius); 
          font-weight: var(--btn-fw);
          text-transform: uppercase; 
          letter-spacing: var(--btn-ls);
          text-shadow: var(--btn-ts);
          font-size: var(--btn-fs); 
          border: none; cursor: pointer;
          position: relative; overflow: hidden; transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .copper-btn::after {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shimmer var(--shimmer-interval) infinite;
          pointer-events: none;
        }

        .copper-btn:hover {
          filter: brightness(1.1); transform: translateY(-3px);
        }
        .hero-btn-subtext {
          font-size: 0.8125rem; 
          margin-top: 1.5rem;
          opacity: 0.6;
        }
      `}</style>
    </section>
  );
};

export default Hero;
