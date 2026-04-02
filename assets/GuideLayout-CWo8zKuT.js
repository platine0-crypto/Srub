import{r,j as t}from"./main-CCky2RDJ.js";import{B as n}from"./RevealItem-ONuke-bW.js";const c=({children:a})=>{const[o,i]=r.useState(!1);return r.useEffect(()=>{window.scrollTo(0,0);const e=()=>i(window.scrollY>600);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),t.jsxs("div",{className:"guide-page min-h-screen bg-[#F5F7FA] text-[#0B1221]",children:[t.jsx("main",{className:"relative",children:a}),t.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`fixed bottom-10 right-10 z-[100] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl hover:scale-110 active:scale-95 opacity-[0.25] md:opacity-100 ${o?"translate-y-0 visible":"translate-y-20 invisible"}`,style:{background:"linear-gradient(135deg, #8B3A15 0%, #F8B57B 100%)"},children:t.jsx(n,{name:"up",className:"w-8 h-8"})}),t.jsx("style",{children:`
        .gold-gradient-saturated {
          background: linear-gradient(90deg, #8B6914 0%, #B8860B 25%, #D4AF37 50%, #B8860B 75%, #8B6914 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
        }

        /* Darker gold for better contrast on light surfaces */
        .gold-gradient-dark {
          background: linear-gradient(90deg, #8B6914 0%, #B8860B 25%, #D4AF37 50%, #B8860B 75%, #8B6914 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
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
