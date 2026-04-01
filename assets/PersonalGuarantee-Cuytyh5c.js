import{A as d,r,j as e,t,g as x}from"./index-Kt3tE1-U.js";import"./vendor-react-j2mp3VYR.js";const s={name:"Ринат Дачаев",role1:"Сооснователь СДВ ХОЛДИНГ",role2:"Гендиректор ООО «Срубы для всех Тюмень»",quote:"Я отвечаю за каждый брус",description:["Лично гарантирую сроки и качество каждого венца. Если найдете брак — исправлю за свой счет. Мой номер телефона будет у вас с первого дня договора.","Для нас стройка не заканчивается передачей ключей. Мы поддерживаем объекты бессрочно, поэтому многие клиенты становятся нашими друзьями."],image:`${d}/images/garant/dir-v.webp`,buttons:[{text:"800+ ВИДЕО И ФОТО С НАШИХ СТРОЕК",subtext:"Смотрите отчеты и 30+ видеоотзывов в нашей группе ВК",icon:`${d}/images/icons/vk.png`,type:"gold",link:"https://vk.com/market-162713701?screen=group"},{text:"РАБОЧИЙ ЧАТ: ЗАДАТЬ ВОПРОС",subtext:"Обсудить в Телеграм проекты, цены, планировки напрямую. Получить ссылку на YouTube с видео-отзывами.",icon:`${d}/images/icons/tg.png`,type:"dark",link:"https://t.me/+79320224040"}],styles:{bgColor:"#FAF8F2",textColor:"#0B1221",separatorColor:"linear-gradient(90deg, transparent 0%, #C5A059 50%, transparent 100%)",quoteSize:48,nameSize:28,roleSize:14,descSize:20,quoteSizeMobile:32,nameSizeMobile:24,roleSizeMobile:14,descSizeMobile:18}},u=()=>{const i=r.useRef(null),[n,c]=r.useState(!1),[m,p]=r.useState(!1);r.useEffect(()=>{const a=new IntersectionObserver(([o])=>{o.isIntersecting&&c(!0)},{threshold:.1});return i.current&&a.observe(i.current),()=>a.disconnect()},[]);const l=s.styles;return e.jsxs("section",{ref:i,className:"lg-section relative w-full flex flex-col items-center z-10 overflow-hidden",children:[e.jsxs("div",{style:{maxWidth:t(x.layout.containerMaxWidth)},className:"w-full flex flex-col items-center px-[20px] md:px-0",children:[e.jsxs("div",{className:"w-full flex flex-col md:flex-row items-center md:items-stretch mb-[4rem] md:mb-[6rem]",children:[e.jsx("div",{className:`lg-image-wrapper w-full md:w-[45%] flex justify-center md:justify-start reveal-item ${n?"is-loaded-revealed":""}`,children:e.jsxs("div",{className:"relative w-full aspect-[4/5] md:aspect-square max-w-[500px] md:max-w-none bg-gray-200 overflow-hidden rounded-[2rem] md:rounded-none blur-up-container",children:[e.jsx("div",{className:"absolute inset-0 bg-[#D9D9D9] flex items-center justify-center text-[#0B1221]/20 font-black text-2xl",children:"PHOTO"}),e.jsx("img",{src:s.image,alt:s.name,loading:"lazy",onLoad:()=>p(!0),className:`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 blur-up-img ${m?"is-loaded":""}`}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#FAF8F2] via-transparent to-transparent opacity-40 md:hidden"})]})}),e.jsxs("div",{className:`lg-text-content w-full md:w-[55%] flex flex-col justify-center py-[4rem] md:py-[6rem] md:pl-[6rem] text-center md:text-left reveal-item ${n?"is-loaded-revealed":""}`,style:{transitionDelay:"200ms"},children:[e.jsx("div",{className:"lg-quote-block mb-[2.5rem] relative",children:e.jsxs("h2",{className:"lg-quote-text font-black uppercase leading-[1.1] italic",children:[e.jsx("span",{className:"lg-quote-symbol",children:"«"}),s.quote,e.jsx("span",{className:"lg-quote-symbol",children:"»"})]})}),e.jsxs("div",{className:"lg-person-info mb-[2.5rem]",children:[e.jsx("h3",{className:"lg-name font-black uppercase mb-[0.25rem]",children:s.name}),e.jsxs("div",{className:"lg-roles text-[#0B1221]/60 font-bold uppercase tracking-wider",children:[e.jsx("span",{className:"lg-role",children:s.role1}),e.jsx("span",{className:"hidden md:inline mx-2 opacity-30",children:"|"}),e.jsx("span",{className:"lg-role block md:inline",children:s.role2})]})]}),e.jsx("div",{className:"lg-description flex flex-col gap-[1.5rem] text-left",children:s.description.map((a,o)=>e.jsx("p",{className:"lg-desc-paragraph font-medium leading-[1.6] text-[#0B1221]/80",children:a},o))})]})]}),e.jsx("div",{className:`lg-social-row w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-[2.5rem] md:gap-[4rem] reveal-item ${n?"is-loaded-revealed":""}`,style:{transitionDelay:"400ms"},children:s.buttons.map((a,o)=>e.jsxs("div",{className:"flex flex-col items-center w-full md:w-fit",children:[e.jsxs("a",{href:a.link,target:"_blank",rel:"noopener noreferrer",className:`btn-premium-base flex items-center justify-center gap-[1.2rem] w-full md:w-fit ${a.type==="gold"?"btn-premium-gold":"lg-btn-dark"}`,style:{height:t(64),padding:`0 ${t(32)}`,color:a.type==="gold"?"#FFFFFF":"#C5A059"},children:[e.jsx("img",{src:a.icon,alt:"",loading:"lazy",className:"object-contain flex-shrink-0",style:{width:t(28),height:t(28)}}),e.jsx("span",{className:"text-[0.95rem] md:text-[1rem] font-black leading-none whitespace-nowrap",children:a.text})]}),e.jsx("p",{className:"btn-premium-subtext text-[#0B1221]/40",style:{maxWidth:t(420)},children:a.subtext})]},o))})]}),e.jsx("div",{className:"lg-bottom-separator absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px]"}),e.jsx("style",{children:`
        .lg-section {
          background-color: ${l.bgColor};
          padding-top: ${t(120)};
          padding-bottom: ${t(160)};
        }

        .lg-quote-text {
          font-size: ${t(l.quoteSize)};
          color: ${l.textColor};
          position: relative;
        }

        .lg-quote-symbol {
          display: inline;
          color: ${l.textColor};
          opacity: 1;
          margin: 0 0.05em;
        }

        .lg-name {
          font-size: ${t(l.nameSize)};
          color: ${l.textColor};
        }

        .lg-roles {
          font-size: ${t(l.roleSize)};
        }

        .lg-desc-paragraph {
          font-size: ${t(l.descSize)};
        }

        .lg-bottom-separator {
          background: ${l.separatorColor};
          opacity: 0.4;
        }

        .lg-btn-dark {
          background-color: #0B1221;
          border: 1px solid #C5A059;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .lg-btn-dark:hover {
          background-color: #0B1221;
          transform: scale(1.015) translateY(-1px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          border-color: #D4A77A;
        }

        .reveal-item {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal-item.is-loaded-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .lg-section {
            padding-top: ${t(60)};
            padding-bottom: ${t(100)};
          }
          .lg-quote-text {
            font-size: ${t(l.quoteSizeMobile)};
            display: block; 
            text-align: center;
          }
          
          .lg-quote-symbol {
            display: inline;
            font-style: normal;
            font-weight: 900 !important;
          }

          .lg-name {
            font-size: ${t(l.nameSizeMobile)};
          }
          .lg-roles {
            font-size: ${t(l.roleSizeMobile)};
          }
          .lg-desc-paragraph {
            font-size: ${t(l.descSizeMobile)};
          }
          .lg-image-wrapper {
             margin-bottom: 2rem;
          }
          .lg-text-content {
            padding-top: 2rem !important;
            padding-bottom: 0 !important;
            padding-left: 0 !important;
          }
          .lg-social-row {
            padding-left: 0 !important;
          }
        }
      `})]})};export{u as default};
