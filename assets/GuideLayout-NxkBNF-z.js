import{r,j as e}from"./index-BnQ8aLS8.js";import{B as i}from"./RevealItem-CvIMCbxo.js";const c=({children:a})=>{const[o,l]=r.useState(!1);return r.useEffect(()=>{window.scrollTo(0,0);const t=()=>l(window.scrollY>600);return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),e.jsxs("div",{className:"guide-page min-h-screen bg-[#F5F7FA] text-[#0B1221]",children:[e.jsx("main",{className:"relative",children:a}),e.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`fixed bottom-10 right-10 z-[100] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl hover:scale-110 active:scale-95 opacity-[0.25] md:opacity-100 ${o?"translate-y-0 visible":"translate-y-20 invisible"}`,style:{background:"linear-gradient(135deg, #8B3A15 0%, #F8B57B 100%)"},children:e.jsx(i,{name:"up",className:"w-8 h-8"})}),e.jsx("style",{children:`
        .gold-gradient-saturated {
          background: linear-gradient(90deg, #8B6914 0%, #C5A059 25%, #D4AF37 50%, #C5A059 75%, #8B6914 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Darker gold for better contrast on light surfaces */
        .gold-gradient-dark {
          background: linear-gradient(180deg, #8B6914 0%, #A67C37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-gold-dark {
          color: #A67C37;
        }
        
        .reveal-item {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-item.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* btn-premium-accent теперь глобальный в index.html */

        .guide-page { scroll-behavior: smooth; }
        table th, table td { vertical-align: middle; }
      `})]})};export{c as G};
