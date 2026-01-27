
import React, { useEffect, useRef, useState } from 'react';
import { doverieConfig } from '../config/doverie';
import { generalConfig } from '../config/general';

const toRem = (px: number | string) => {
  if (typeof px === 'string') return px;
  return `${px / 16}rem`;
};

const Doverie: React.FC = () => {
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

  const topCards = doverieConfig.cards.filter(c => !c.isWide);
  const bottomCards = doverieConfig.cards.filter(c => c.isWide);

  return (
    <section 
      ref={sectionRef}
      style={{ backgroundColor: doverieConfig.styles.bgColor }}
      className="doverie-section relative w-full flex flex-col items-center py-[10rem] z-10"
    >
      <div 
        style={{ 
          maxWidth: toRem(generalConfig.layout.containerMaxWidth),
          paddingLeft: isMobile ? toRem(20) : '0',
          paddingRight: isMobile ? toRem(20) : '0'
        }}
        className="doverie-container w-full"
      >
        <div className={`doverie-header mb-[6rem] text-center md:text-left reveal-item ${isRevealed ? 'is-revealed' : ''}`}>
          <h2 
            style={{ color: doverieConfig.styles.titleColor }}
            className="doverie-title uppercase mb-[1rem]"
          >
            {doverieConfig.title}
          </h2>
          <p 
            style={{ color: doverieConfig.styles.subtitleColor }}
            className="doverie-subtitle uppercase italic"
          >
            {doverieConfig.subtitle}
          </p>
        </div>

        {/* Верхний ряд: 3 карточки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-[var(--grid-gap)] mb-[var(--grid-gap)]">
          {topCards.map((card, idx) => (
            <div 
              key={idx}
              className={`doverie-card flex flex-col reveal-item ${isRevealed ? 'is-revealed' : ''}`}
              style={{ 
                transitionDelay: `${idx * 150}ms`,
                backgroundColor: doverieConfig.styles.cardBg,
                borderRadius: toRem(doverieConfig.styles.borderRadius),
                padding: 'var(--card-padding)'
              }}
            >
              <h3 className="card-title uppercase mb-[1.5rem]">
                {card.title.split(card.highlight || '').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="doverie-gold-gradient">{card.highlight}</span>}
                  </React.Fragment>
                ))}
              </h3>
              <p className="card-text leading-relaxed opacity-80">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Нижний ряд: 2 широкие карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[var(--grid-gap)]">
          {bottomCards.map((card, idx) => (
            <div 
              key={idx}
              className={`doverie-card wide-card flex flex-col md:flex-row items-center md:items-start gap-[2rem] reveal-item ${isRevealed ? 'is-revealed' : ''}`}
              style={{ 
                transitionDelay: `${(topCards.length + idx) * 150}ms`,
                backgroundColor: doverieConfig.styles.cardBg,
                borderRadius: toRem(doverieConfig.styles.borderRadius),
                padding: isMobile ? 'var(--card-padding)' : `var(--card-padding-wide) var(--card-padding-wide) var(--card-padding-wide) ${toRem(doverieConfig.styles.paddingDesktop * 0.7)}`
              }}
            >
              {card.icon && (
                <div className="card-icon flex-shrink-0">
                  <img src={card.icon} alt="" className="w-full h-full object-contain" />
                </div>
              )}
              <div className="flex flex-col text-center md:text-left">
                <h3 className="card-title uppercase mb-[1.5rem]">
                   {card.title.split(card.highlight || '').map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && <span className="doverie-gold-gradient">{card.highlight}</span>}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="card-text leading-relaxed opacity-80">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .doverie-section {
          --grid-gap: ${toRem(doverieConfig.styles.gap)};
          --accent: ${doverieConfig.styles.accentColor};
          --card-padding: ${toRem(doverieConfig.styles.paddingDesktop)};
          --card-padding-wide: ${toRem(doverieConfig.styles.paddingDesktop * 1.5)};
          
          /* Typography Desktop */
          --title-fs: ${toRem(doverieConfig.typography.desktop.titleSize)};
          --title-fw: ${doverieConfig.typography.desktop.titleWeight};
          --title-lh: ${doverieConfig.typography.desktop.titleLineHeight};
          --title-ls: ${doverieConfig.typography.desktop.titleLetterSpacing};
          
          --subtitle-fs: ${toRem(doverieConfig.typography.desktop.subtitleSize)};
          --subtitle-fw: ${doverieConfig.typography.desktop.subtitleWeight};
          --subtitle-lh: ${doverieConfig.typography.desktop.subtitleLineHeight};
          --subtitle-ls: ${doverieConfig.typography.desktop.subtitleLetterSpacing};
          
          --card-title-fs: ${toRem(doverieConfig.typography.desktop.cardTitleSize)};
          --card-title-fw: ${doverieConfig.typography.desktop.cardTitleWeight};
          --card-title-lh: ${doverieConfig.typography.desktop.cardTitleLineHeight};
          --card-title-ls: ${doverieConfig.typography.desktop.cardTitleLetterSpacing};
          
          --card-text-fs: ${toRem(doverieConfig.typography.desktop.cardTextSize)};
          --card-text-fw: ${doverieConfig.typography.desktop.cardTextWeight};
          --card-text-lh: ${doverieConfig.typography.desktop.cardTextLineHeight};
          --card-text-ls: ${doverieConfig.typography.desktop.cardTextLetterSpacing};

          --icon-size: ${toRem(112)};
          --icon-size-wide: ${toRem(180)};
        }

        .card-icon {
          width: var(--icon-size);
          height: var(--icon-size);
        }

        .wide-card .card-icon {
          width: var(--icon-size-wide);
          height: var(--icon-size-wide);
        }

        @media (max-width: 768px) {
          .doverie-section {
            padding: 5rem 0;
            --card-padding: ${toRem(doverieConfig.styles.paddingMobile)};
            --card-padding-wide: ${toRem(doverieConfig.styles.paddingMobile)};
            
            /* Typography Mobile */
            --title-fs: ${toRem(doverieConfig.typography.mobile.titleSize)};
            --title-fw: ${doverieConfig.typography.mobile.titleWeight};
            --title-lh: ${doverieConfig.typography.mobile.titleLineHeight};
            --title-ls: ${doverieConfig.typography.mobile.titleLetterSpacing};
            
            --subtitle-fs: ${toRem(doverieConfig.typography.mobile.subtitleSize)};
            --subtitle-fw: ${doverieConfig.typography.mobile.subtitleWeight};
            --subtitle-lh: ${doverieConfig.typography.mobile.subtitleLineHeight};
            --subtitle-ls: ${doverieConfig.typography.mobile.subtitleLetterSpacing};
            
            --card-title-fs: ${toRem(doverieConfig.typography.mobile.cardTitleSize)};
            --card-title-fw: ${doverieConfig.typography.mobile.cardTitleWeight};
            --card-title-lh: ${doverieConfig.typography.mobile.cardTitleLineHeight};
            --card-title-ls: ${doverieConfig.typography.mobile.cardTitleLetterSpacing};
            
            --card-text-fs: ${toRem(doverieConfig.typography.mobile.cardTextSize)};
            --card-text-fw: ${doverieConfig.typography.mobile.cardTextWeight};
            --card-text-lh: ${doverieConfig.typography.mobile.cardTextLineHeight};
            --card-text-ls: ${doverieConfig.typography.mobile.cardTextLetterSpacing};

            --icon-size: ${toRem(80)};
            --icon-size-wide: ${toRem(120)};
          }
        }

        .doverie-title {
          font-size: var(--title-fs);
          font-weight: var(--title-fw);
          line-height: var(--title-lh);
          letter-spacing: var(--title-ls);
        }

        .doverie-subtitle {
          font-size: var(--subtitle-fs);
          font-weight: var(--subtitle-fw);
          line-height: var(--subtitle-lh);
          letter-spacing: var(--subtitle-ls);
        }

        .card-title {
          font-size: var(--card-title-fs);
          font-weight: var(--card-title-fw);
          line-height: var(--card-title-lh);
          letter-spacing: var(--card-title-ls);
        }

        .card-text {
          font-size: var(--card-text-fs);
          font-weight: var(--card-text-fw);
          line-height: var(--card-text-lh);
          letter-spacing: var(--card-text-ls);
          color: ${doverieConfig.styles.textColor};
        }

        .doverie-card {
          border: 1px solid ${doverieConfig.styles.cardBorder};
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .doverie-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
        }

        .doverie-gold-gradient {
          display: inline;
          background: ${doverieConfig.styles.goldGradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .reveal-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .reveal-item.is-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .wide-card {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Doverie;
