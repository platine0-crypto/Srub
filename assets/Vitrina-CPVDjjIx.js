import{A as g,r as d,j as t,t as e,g as b}from"./main-KIG6BhXh.js";import"./vendor-react-j2mp3VYR.js";const c={sectionTitle:"БАЗОВЫЕ КОНЦЕПЦИИ-ИДЕИ ДЛЯ ЛИНИИ СИБИРЬ",sectionDescription:"Ваш дом не обязан быть типовым. Используйте эти или любые другие идеи из сети как фундамент для творчества — мы адаптируем их под ваши запросы и реализуем в заводском качестве бизнес-класса.",badgeText:"КЛАССЫ: BUSINESS и COMFORT+",styles:{cardHeightDesktop:660,cardHeightMobile:520,borderRadius:40,gap:32,gapMobile:80,titleSize:36,subtitleSize:14,headerTitleSize:56,headerDescriptionSize:22,tabFontSizeDesktop:14,tabGapDesktop:40,titleSizeMobile:34,subtitleSizeMobile:15,headerTitleSizeMobile:36,headerDescriptionSizeMobile:20,tabFontSizeMobile:14,tabGapMobile:32,badgeFontSize:13,badgePaddingX:20,badgePaddingY:8,buttonHeight:72,buttonFontSize:18,buttonFontSizeMobile:18},items:[{title:"SPA-РЕЗИДЕНЦИИ",subtitle:"(Жилая SPA-усадьба для отдыха и жизни)",imageExterior:`${g}/images/vitrina/spa-ext_result.webp`,imageInterior:`${g}/images/vitrina/spa-inter_result.webp`,defaultMode:"exterior",href:"#spa",buttonText:"СМОТРЕТЬ SPA-ПРОЕКТЫ"},{title:"УСАДЬБЫ",subtitle:"(Капитальные резиденции для семьи и ПМЖ)",imageExterior:`${g}/images/vitrina/usadba-ext_result.webp`,imageInterior:`${g}/images/vitrina/usadba-inter_result.webp`,defaultMode:"interior",href:"#estates",buttonText:"СМОТРЕТЬ УСАДЬБЫ"},{title:"LOUNGE-ЗОНЫ",subtitle:"(Статусные локации для приема гостей)",imageExterior:`${g}/images/vitrina/lounge-ext_result.webp`,imageInterior:`${g}/images/vitrina/lounge-inter_result.webp`,defaultMode:"exterior",href:"#lounge",buttonText:"ОЦЕНИТЬ ЛАУНЖ-ЗОНЫ"}]},T=()=>{const $=d.useRef(null),u=d.useRef(null),v=d.useRef([]),[S,h]=d.useState(!1),[z,y]=d.useState(new Array(c.items.length).fill(!1)),[x,k]=d.useState(c.items.map(a=>a.defaultMode)),[M,j]=d.useState(new Array(c.items.length).fill(!1)),[N,E]=d.useState(new Array(c.items.length).fill(!1));d.useEffect(()=>{const a=window.innerWidth<=768,r=new IntersectionObserver(([s])=>{a||h(s.isIntersecting)},{threshold:.05,rootMargin:"0px 0px 100px 0px"}),n=new IntersectionObserver(s=>{a&&s.forEach(m=>{const o=Number(m.target.getAttribute("data-index"));y(p=>{const w=[...p];return w[o]=m.isIntersecting,w})})},{threshold:.1,rootMargin:"0px 0px 50px 0px"});u.current&&r.observe(u.current),v.current.forEach(s=>{s&&n.observe(s)});const l=setTimeout(()=>{if(u.current&&!a){const s=u.current.getBoundingClientRect();s.top<window.innerHeight&&s.bottom>0&&h(!0)}},100);return()=>{r.disconnect(),n.disconnect(),clearTimeout(l)}},[]);const I=(a,r)=>{const n=[...x];n[a]=r,k(n)},f=(a,r)=>{r==="exterior"?j(n=>{const l=[...n];return l[a]=!0,l}):E(n=>{const l=[...n];return l[a]=!0,l})},i=c.styles;return t.jsxs("section",{ref:$,className:"vitrina-section w-full flex flex-col items-center bg-[#0B1221] relative z-20",children:[t.jsx("div",{style:{maxWidth:e(b.layout.containerMaxWidth)},className:"w-full flex flex-col mb-[4rem] md:mb-[6rem] px-[20px] md:px-0",children:t.jsxs("div",{className:"flex flex-col w-full",children:[t.jsx("h2",{className:"vitrina-main-title font-black uppercase text-white mb-[1.5rem] md:whitespace-nowrap",children:c.sectionTitle.split(" ").map((a,r)=>t.jsxs("span",{className:a.includes("СИБИРЬ")?"gold-gradient inline-block":"",children:[a," "]},r))}),t.jsx("p",{className:"vitrina-description text-white/60 font-medium max-w-[64rem]",children:c.sectionDescription})]})}),t.jsx("div",{ref:u,style:{maxWidth:e(b.layout.containerMaxWidth)},className:`vitrina-grid-container w-full grid grid-cols-1 md:grid-cols-3 mx-auto px-[20px] md:px-0 transition-all duration-1000 ${S?"dt-grid-visible":"dt-grid-hidden"}`,children:c.items.map((a,r)=>{const n=x[r],l=z[r],s=M[r],m=N[r];return t.jsxs("div",{"data-index":r,ref:o=>{v.current[r]=o},className:`vitrina-card group relative flex flex-col transition-all duration-700 ${l?"mob-card-visible":"mob-card-hidden"}`,children:[t.jsx("div",{className:"vitrina-premium-contour absolute inset-[-1px] z-40 pointer-events-none transition-all duration-1000",style:{borderRadius:e(i.borderRadius),border:"1px solid #B05024",boxShadow:"0 0 15px rgba(176, 80, 36, 0.1)"}}),t.jsx("div",{className:"flex items-center justify-end local-tabs-row mb-[1.5rem] px-[0.5rem] relative z-20",children:["exterior","interior"].map(o=>t.jsxs("button",{onClick:p=>{p.preventDefault(),I(r,o)},className:`local-stealth-tab uppercase font-bold tracking-[0.2em] transition-all duration-300 relative py-[0.25rem] ${n===o?"active text-white":"text-white/20 hover:text-white/50"}`,children:[o==="exterior"?"СНАРУЖИ":"ВНУТРИ",t.jsx("span",{className:`tab-underline absolute bottom-[-6px] left-0 h-[2px] bg-[#B05024] transition-all duration-500 ${n===o?"w-full":"w-0"}`})]},o))}),t.jsxs("div",{className:"relative w-full aspect-square overflow-hidden mb-[2rem] z-10 blur-up-container",style:{borderRadius:e(i.borderRadius-8)},children:[t.jsx("div",{className:"vitrina-badge absolute top-[1.25rem] left-[1.25rem] z-30 flex items-center justify-center pointer-events-none",children:t.jsx("div",{className:"badge-content font-black uppercase whitespace-nowrap",children:c.badgeText})}),t.jsxs("div",{className:"absolute inset-0 z-0",children:[t.jsx("img",{src:a.imageExterior,alt:a.title,loading:"lazy",onLoad:()=>f(r,"exterior"),className:`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-110 blur-up-img ${s?"is-loaded":""}`,style:{opacity:n==="exterior"&&s?1:0,zIndex:n==="exterior"?2:1}}),t.jsx("img",{src:a.imageInterior,alt:`${a.title} interior`,loading:"lazy",onLoad:()=>f(r,"interior"),className:`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-110 blur-up-img ${m?"is-loaded":""}`,style:{opacity:n==="interior"&&m?1:0,zIndex:n==="interior"?2:1}})]}),t.jsx("div",{className:"absolute inset-0 z-10 bg-gradient-to-t from-[#0B1221]/30 to-transparent opacity-40"}),t.jsx("div",{className:"absolute inset-0 z-10 border-[1px] border-white/5 rounded-[inherit] pointer-events-none"})]}),t.jsxs("div",{className:"flex flex-col px-[0.5rem] relative z-20",children:[t.jsxs("div",{className:"flex flex-col gap-[0.75rem] mb-[2rem]",children:[t.jsx("h3",{className:"vitrina-item-title text-white font-black uppercase tracking-wider leading-tight",children:a.title}),t.jsx("span",{className:"vitrina-item-subtitle gold-gradient inline-block font-bold uppercase tracking-[0.1em] leading-snug",children:a.subtitle})]}),t.jsx("a",{href:a.href,onClick:o=>{o.preventDefault();const p=a.href.replace("#","");window.history.pushState({page:"katalog",targetId:p},"",`/katalog/#${p}`),window.dispatchEvent(new CustomEvent("nordline-navigate",{detail:{page:"katalog"}}))},className:"vitrina-btn w-full flex items-center justify-center text-white font-black uppercase transition-all duration-500",children:a.buttonText})]})]},r)})}),t.jsx("style",{children:`
        :root {
          --v-gap: ${e(i.gap)};
          --v-radius: ${e(i.borderRadius)};
          
          --v-header-title-fs: ${e(i.headerTitleSize)};
          --v-header-desc-fs: ${e(i.headerDescriptionSize)};
          
          --v-item-title-fs: ${e(i.titleSize)};
          --v-item-sub-fs: ${e(i.subtitleSize)};
          
          --v-tab-fs: ${e(i.tabFontSizeDesktop)};
          --v-tab-gap: ${e(i.tabGapDesktop)};
          
          --v-badge-fs: ${e(i.badgeFontSize)};
          --v-badge-px: ${e(i.badgePaddingX)};
          --v-badge-py: ${e(i.badgePaddingY)};
          
          --v-btn-h: ${e(i.buttonHeight)};
          --v-btn-fs: ${e(i.buttonFontSize)};
          
          --v-card-h: ${e(i.cardHeightDesktop)};
        }

        @media (max-width: 768px) {
          :root {
            --v-gap: ${e(i.gapMobile)};
            --v-header-title-fs: ${e(i.headerTitleSizeMobile)}; 
            --v-header-desc-fs: ${e(i.headerDescriptionSizeMobile)};
            
            --v-item-title-fs: ${e(i.titleSizeMobile)};
            --v-item-sub-fs: ${e(i.subtitleSizeMobile)};
            
            --v-tab-fs: ${e(i.tabFontSizeMobile)};
            --v-tab-gap: ${e(i.tabGapMobile)};
            
            --v-btn-fs: ${e(i.buttonFontSizeMobile)};
            --v-card-h: ${e(i.cardHeightMobile)};
          }
        }

        .vitrina-section {
          padding-top: ${e(160)};
          padding-bottom: ${e(160)};
        }

        .vitrina-main-title {
          font-size: var(--v-header-title-fs);
          line-height: 1.1;
        }

        .vitrina-description {
          font-size: var(--v-header-desc-fs);
          line-height: 1.6;
        }

        .vitrina-grid-container {
          gap: var(--v-gap);
        }

        .vitrina-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: var(--v-radius);
          padding: ${e(24)};
          min-height: var(--v-card-h);
          transition: background 0.5s ease, opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .local-tabs-row {
          gap: var(--v-tab-gap);
        }

        .local-stealth-tab {
          font-size: var(--v-tab-fs);
        }

        .vitrina-item-title {
          font-size: var(--v-item-title-fs);
        }

        .vitrina-item-subtitle {
          font-size: var(--v-item-sub-fs);
        }

        /* --- REVEAL ANIMATIONS --- */
        
        @media (min-width: 769px) {
          .dt-grid-hidden .vitrina-card {
            opacity: 0;
            transform: translateY(30px);
          }
          .dt-grid-hidden .vitrina-premium-contour {
            opacity: 0;
          }

          .dt-grid-visible .vitrina-card {
            opacity: 1;
            transform: translateY(0);
          }
          .dt-grid-visible .vitrina-premium-contour {
            opacity: 0.15;
          }

          .dt-grid-visible .vitrina-card:nth-child(2) { transition-delay: 150ms; }
          .dt-grid-visible .vitrina-card:nth-child(3) { transition-delay: 300ms; }

          .vitrina-card:hover {
            background: rgba(255, 255, 255, 0.03);
          }
          .vitrina-card:hover .vitrina-premium-contour {
            opacity: 1 !important;
            border-color: #F8B57B !important;
            box-shadow: 0 0 25px rgba(248, 181, 123, 0.2);
            transition: all 0.4s ease;
          }
        }

        @media (max-width: 768px) {
          .mob-card-hidden {
            opacity: 0;
            transform: translateY(20px);
          }
          .mob-card-hidden .vitrina-premium-contour {
            opacity: 0;
          }

          .mob-card-visible {
            opacity: 1;
            transform: translateY(0);
          }
          .mob-card-visible .vitrina-premium-contour {
            opacity: 1;
            border-color: rgba(176, 80, 36, 0.8) !important;
            box-shadow: 0 0 15px rgba(176, 80, 36, 0.2);
          }
        }

        /* --- UI ELEMENTS --- */
        .vitrina-badge {
          padding: var(--v-badge-py) var(--v-badge-px);
          border-radius: ${window.innerWidth<=768?e(b.badgeStyles.premium.radiusMobile):e(b.badgeStyles.premium.radius)};
          background: ${b.badgeStyles.premium.bg};
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: ${b.badgeStyles.premium.shadow};
          border: 1px solid ${b.badgeStyles.premium.borderColor};
        }

        .badge-content {
          font-size: var(--v-badge-fs);
          color: ${b.badgeStyles.premium.color};
          letter-spacing: 0.1em;
          text-shadow: none;
          font-weight: 900;
        }

        .vitrina-btn {
          height: var(--v-btn-h);
          border-radius: calc(var(--v-btn-h) / 2);
          font-size: var(--v-btn-fs);
          letter-spacing: 0.12em;
          background: linear-gradient(175deg, #8B3A15 0%, #D0884A 25%, #B05024 50%, #D0884A 85%, #C1531E 100%);
          box-shadow: inset 0px ${e(2)} ${e(8)} rgba(255, 255, 255, 0.4), 0 ${e(8)} ${e(16)} rgba(0, 0, 0, 0.5);
          text-shadow: 0px ${e(1)} ${e(3)} rgba(0, 0, 0, 0.6);
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
          transform: scale(1.02) translateY(${e(-2)});
          filter: brightness(1.1);
        }

        .vitrina-btn:hover::after { transform: translateX(250%) skewX(-25deg); }

        @media (max-width: 768px) {
          .vitrina-section { padding-top: ${e(100)}; padding-bottom: ${e(100)}; }
          .vitrina-main-title { text-align: center; }
          .vitrina-description { text-align: center; max-width: 100%; }
          .vitrina-grid-container { gap: var(--v-gap) !important; }
          .vitrina-card { padding: ${e(16)} !important; }
        }

        .gold-gradient {
          background: linear-gradient(90deg, #8B6914 0%, #F9E076 25%, #D4AF37 40%, #FFECAD 50%, #B8860B 70%, #8B6914 98%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
      `})]})};export{T as default};
