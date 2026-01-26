
import React, { useEffect, useRef, useState } from 'react';
import { vitrinaConfig, ViewMode } from '../config/vitrina';
import { generalConfig } from '../config/general';

const toRem = (px: number | string) => {
  if (typeof px === 'string') {
    if (px.includes('rem') || px.includes('em') || px.includes('%') || px.includes('vw') || px.includes('vh')) return px;
    return px.replace(/(-?\d*\.?\d+)px/g, (match, p1) => {
      const val = parseFloat(p1);
      return `${val / 16}rem`;
    });
  }
  return `${px / 16}rem`;
};

const Vitrina: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [localModes, setLocalModes] = useState<ViewMode[]>(vitrinaConfig.items.map(item => item.defaultMode));
  const [animatedBorders, setAnimatedBorders] = useState<boolean[]>(new Array(vitrinaConfig.items.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const borderObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setAnimatedBorders(prev => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        });
      },
      { 
        threshold: 0.4,
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    const cards = document.querySelectorAll('.vitrina-card-mobile-trigger');
    cards.forEach(card => borderObserver.observe(card));

    return () => borderObserver.disconnect();
  }, []);

  const handleLocalChange = (idx: number, mode: ViewMode) => {
    const nextModes = [...localModes];
    nextModes[idx] = mode;
    setLocalModes(nextModes);
  };

  const R = vitrinaConfig.styles.borderRadius; // 40px

  return (
    <section 
      ref={sectionRef}
      className={`vitrina-section w-full flex flex-col items-center bg-[#0B1221] relative z-20 reveal-item ${isRevealed ? 'is-revealed' : ''}`}
    >
      {/* Header Block */}
      <div 
        style={{ maxWidth: toRem(generalConfig.layout.containerMaxWidth) }}
        className="w-full flex flex-col mb-[4rem] md:mb-[6rem] px-[20px] md:px-0"
      >
        <div className="flex flex-col md:max-w-[80%]">
          <h2 
            className="vitrina-main-title font-black uppercase text-white mb-[1.5rem]"
            style={{ fontSize: toRem(vitrinaConfig.styles.headerTitleSize), lineHeight: 1.1 }}
          >
            {vitrinaConfig.sectionTitle.split(' ').map((word, i) => (
              <span key={i} className={word === 'NORD-LINE' ? 'gold-gradient' : ''}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <p 
            className="vitrina-description text-white/60 font-medium max-w-[64rem]"
            style={{ fontSize: toRem(vitrinaConfig.styles.headerDescriptionSize), lineHeight: 1.6 }}
          >
            {vitrinaConfig.sectionDescription}
          </p>
        </div>
      </div>

      <div 
        style={{ 
          maxWidth: toRem(generalConfig.layout.containerMaxWidth),
          gap: toRem(vitrinaConfig.styles.gap) 
        }}
        className="vitrina-grid-container w-full grid grid-cols-1 md:grid-cols-3 mx-auto px-[20px] md:px-0"
      >
        {vitrinaConfig.items.map((item, idx) => {
          const currentMode = localModes[idx];
          const isBorderAnimated = animatedBorders[idx];

          return (
            <div 
              key={idx}
              data-index={idx}
              className={`vitrina-card vitrina-card-mobile-trigger group relative flex flex-col transition-all duration-700 ${isBorderAnimated ? 'mobile-animated' : ''}`}
              style={{ padding: toRem(24), borderRadius: toRem(R) }}
            >
              {/* PRECISION COPPER HAIRLINE CONTOUR */}
              {/* Uses a div for perfect pixel-matching of border-radius units */}
              <div 
                className="vitrina-premium-contour absolute inset-[-1px] z-40 pointer-events-none transition-all duration-700"
                style={{ 
                  borderRadius: toRem(R),
                  border: '1px solid #B05024',
                  boxShadow: '0 0 15px rgba(176, 80, 36, 0.1)',
                  opacity: 0 // Will be changed via CSS for hover/scroll
                }}
              />

              {/* Tabs ABOVE Image */}
              <div className="flex items-center justify-end gap-[2rem] mb-[1.5rem] px-[0.5rem] relative z-20">
                {(['exterior', 'interior'] as ViewMode[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLocalChange(idx, mode);
                    }}
                    className={`local-stealth-tab uppercase font-bold tracking-[0.2em] transition-all duration-300 relative py-[0.25rem] ${
                      currentMode === mode ? 'active text-white' : 'text-white/20 hover:text-white/50'
                    }`}
                    style={{ fontSize: toRem(13) }}
                  >
                    {mode === 'exterior' ? 'СНАРУЖИ' : 'ВНУТРИ'}
                    <span className={`tab-underline absolute bottom-[-6px] left-0 h-[2px] bg-[#B05024] transition-all duration-500 ${currentMode === mode ? 'w-full' : 'w-0'}`} />
                  </button>
                ))}
              </div>

              {/* Square Image Container */}
              <div 
                className="relative w-full aspect-square overflow-hidden mb-[2rem] z-10"
                style={{ borderRadius: toRem(R - 8) }}
              >
                <div 
                  className={`vitrina-badge absolute top-[1.25rem] left-[1.25rem] z-30 flex items-center justify-center pointer-events-none ${isRevealed ? 'animate-badge-reveal' : 'opacity-0'}`}
                  style={{ animationDelay: `${idx * 200 + 1000}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="badge-content font-black uppercase whitespace-nowrap">
                    {vitrinaConfig.badgeText}
                  </div>
                </div>

                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${item.imageExterior})`, opacity: currentMode === 'exterior' ? 1 : 0, zIndex: currentMode === 'exterior' ? 2 : 1 }} />
                  <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${item.imageInterior})`, opacity: currentMode === 'interior' ? 1 : 0, zIndex: currentMode === 'interior' ? 2 : 1 }} />
                </div>
                
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B1221]/30 to-transparent opacity-40" />
                <div className="absolute inset-0 z-10 border-[1px] border-white/5 rounded-[inherit] pointer-events-none" />
              </div>

              {/* Text & Button BELOW Image */}
              <div className="flex flex-col px-[0.5rem] relative z-20">
                <div className="flex flex-col gap-[0.75rem] mb-[2rem]">
                  <h3 style={{ fontSize: toRem(vitrinaConfig.styles.titleSize) }} className="text-white font-black uppercase tracking-wider leading-tight">
                    {item.title}
                  </h3>
                  <span style={{ fontSize: toRem(vitrinaConfig.styles.subtitleSize) }} className="gold-gradient font-bold uppercase tracking-[0.1em] leading-snug">
                    {item.subtitle}
                  </span>
                </div>

                <a href={item.href} className="vitrina-btn w-full flex items-center justify-center text-white font-black uppercase transition-all duration-500" style={{ height: toRem(vitrinaConfig.styles.buttonHeight), borderRadius: toRem(vitrinaConfig.styles.buttonHeight / 2), fontSize: toRem(vitrinaConfig.styles.buttonFontSize), letterSpacing: '0.12em' }}>
                  {item.buttonText}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .vitrina-section {
          padding-top: ${toRem(160)};
          padding-bottom: ${toRem(160)};
        }

        .reveal-item {
          opacity: 0;
          transform: translateY(${toRem(40)});
          transition: opacity 800ms ease-out, transform 800ms ease-out;
        }
        .reveal-item.is-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        .vitrina-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          transition: background 0.5s ease;
        }

        /* --- CONTOUR APPEARANCE LOGIC --- */
        
        /* DESKTOP HOVER */
        @media (min-width: 769px) {
          .vitrina-card:hover {
            background: rgba(255, 255, 255, 0.03);
          }
          .vitrina-card:hover .vitrina-premium-contour {
            opacity: 1 !important;
            border-color: #F8B57B !important; /* Brighter gold on hover */
            box-shadow: 0 0 20px rgba(248, 181, 123, 0.15);
          }
        }

        /* MOBILE SCROLL */
        @media (max-width: 768px) {
          .vitrina-card.mobile-animated .vitrina-premium-contour {
            opacity: 1 !important;
            border-color: rgba(176, 80, 36, 0.8) !important;
          }
        }

        /* --- UI ELEMENTS --- */
        .vitrina-badge {
          padding: ${toRem(vitrinaConfig.styles.badgePaddingY)} ${toRem(vitrinaConfig.styles.badgePaddingX)};
          border-radius: ${toRem(32)};
          background: linear-gradient(135deg, #8B3A15 0%, #F8B57B 30%, #B05024 50%, #F8B57B 70%, #C1531E 100%);
          box-shadow: 0 ${toRem(10)} ${toRem(25)} rgba(0, 0, 0, 0.5), inset 0 ${toRem(2)} ${toRem(4)} rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transform: scale(0.8) translateY(${toRem(-10)});
        }

        .badge-content {
          font-size: ${toRem(vitrinaConfig.styles.badgeFontSize)};
          color: #0B1221;
          letter-spacing: 0.1em;
          text-shadow: 0 ${toRem(1)} ${toRem(1)} rgba(255, 255, 255, 0.3);
          font-weight: 900;
        }

        .vitrina-btn {
          background: linear-gradient(175deg, #8B3A15 0%, #F8B57B 25%, #B05024 50%, #F8B57B 85%, #C1531E 100%);
          box-shadow: inset 0px ${toRem(2)} ${toRem(8)} rgba(255, 255, 255, 0.4), 0 ${toRem(8)} ${toRem(16)} rgba(0, 0, 0, 0.5);
          text-shadow: 0px ${toRem(1)} ${toRem(3)} rgba(0, 0, 0, 0.6);
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }

        .vitrina-btn::after {
          content: ""; position: absolute; top: 0; left: 0; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transform: translateX(-150%) skewX(-25deg);
          transition: transform 0.8s ease;
        }

        .vitrina-btn:hover {
          transform: scale(1.02) translateY(${toRem(-2)});
          filter: brightness(1.1);
        }

        .vitrina-btn:hover::after { transform: translateX(250%) skewX(-25deg); }

        @keyframes badge-reveal { to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-badge-reveal { animation: badge-reveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        @media (max-width: 768px) {
          .vitrina-section { padding-top: ${toRem(100)}; padding-bottom: ${toRem(100)}; }
          .vitrina-main-title { font-size: ${toRem(36)} !important; text-align: center; }
          .vitrina-description { font-size: ${toRem(16)} !important; text-align: center; max-width: 100%; }
          .vitrina-grid-container { gap: 5.5rem !important; }
          .vitrina-card { padding: ${toRem(16)} !important; }
          .vitrina-btn { height: ${toRem(64)} !important; font-size: ${toRem(vitrinaConfig.styles.buttonFontSizeMobile)} !important; }
        }
      `}</style>
    </section>
  );
};

export default Vitrina;
