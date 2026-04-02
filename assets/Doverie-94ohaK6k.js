import{A as p,r as l,j as r,t,g as f}from"./main-CWd07Jry.js";import"./vendor-react-j2mp3VYR.js";const e={title:"ПОЧЕМУ НАМ ДОВЕРЯЮТ СТРОИТЕЛЬСТВО РОДОВОГО ГНЕЗДА",subtitle:"Тюменцы ценят нас за честность, Северяне — за надежность",styles:{bgColor:"#F5F7FA",titleColor:"#0B1221",subtitleColor:"rgba(11, 18, 33, 0.7)",cardBg:"#FFFFFF",cardBorder:"rgba(11, 18, 33, 0.05)",accentColor:"#C5A059",goldGradient:"linear-gradient(90deg, #8B6914 0%, #B8860B 25%, #D4AF37 50%, #B8860B 75%, #8B6914 100%)",textColor:"#0B1221",gap:32,borderRadius:24,paddingDesktop:56,paddingMobile:26},typography:{desktop:{titleSize:76,titleWeight:900,titleLineHeight:1.05,titleLetterSpacing:"-0.02em",subtitleSize:24,subtitleWeight:600,subtitleLineHeight:1.4,subtitleLetterSpacing:"0.15em",cardTitleSize:34,cardTitleWeight:900,cardTitleLineHeight:1.2,cardTitleLetterSpacing:"0.01em",cardTextSize:22,cardTextWeight:400,cardTextLineHeight:1.5,cardTextLetterSpacing:"normal"},mobile:{titleSize:32,titleWeight:900,titleLineHeight:1.15,titleLetterSpacing:"-0.01em",subtitleSize:19,subtitleWeight:600,subtitleLineHeight:1.4,subtitleLetterSpacing:"0.08em",cardTitleSize:26,cardTitleWeight:900,cardTitleLineHeight:1.2,cardTitleLetterSpacing:"0.01em",cardTextSize:21,cardTextWeight:400,cardTextLineHeight:1.4,cardTextLetterSpacing:"normal"}},cards:[{title:"12 ЛЕТ БЕЗ СУДЕБНЫХ ПРЕТЕНЗИЙ",text:"Мы строим в Тюмени и области с 2014 года. Проверьте нас в любой базе (например, kad.arbitr.ru): ни одного судебного разбирательства с заказчиками за всю историю. Мы местные, мы дорожим своим именем, а не «гастролируем».",highlight:"12 ЛЕТ БЕЗ СУДЕБНЫХ ПРЕТЕНЗИЙ"},{title:"ЦЕНА В ДОГОВОРЕ — ЭТО ЗАКОН",text:"Наш принцип: Цена фиксируется в момент подписания и не меняется. В 2021 году, когда дерево взлетело в цене в 2 раза, мы работали «в минус», но ни один заказчик не доплатил ни копейки сверх сметы. Мы держим слово.",highlight:"ЦЕНА В ДОГОВОРЕ"},{title:"БЕЗОПАСНАЯ ПОЭТАПНОСТЬ",text:"Вы не рискуете всей суммой сразу. Оплата разбита на этапы: Фундамент → Стены → Кровля. Приняли этап — оплатили следующий. Схема 70/30 обеспечивает полную прозрачность и вашу безопасность.",highlight:"Схема 70/30"},{title:"ЗАВОДСКАЯ ТОЧНОСТЬ LEGO-СБОРКИ",text:"Мы не пилим дом на участке «на коленке». Весь домокомплект изготавливается в цеху на станках с ЧПУ с допуском 0.5 мм. Это исключает человеческую ошибку при возведении стен — части дома, которую невозможно или крайне дорого переделать позже. Результат: детали стыкуются идеально плотно. Собрать неправильно НЕ получится.",highlight:"LEGO-СБОРКИ",isWide:!0,icon:`${p}/images/icons/zavod.png`},{title:"СКОРОСТЬ ПРЕФАБА<br>(60 ДНЕЙ)",text:'Через 60 дней у вас на участке стоит готовый дом в комплектации «Теплый контур +». <br><b>Что именно входит:</b><br><div style="text-align: left; display: inline-block; width: 100%; margin-top: 0.5rem;">• Капитальные стены, крыша, окна и входные двери.<br>• Межэтажные и чердачные перекрытия (либо утепленная крыша) с усиленным утеплением.<br>• Главная выгода: Чистовая отделка (внешняя и внутренняя) уже включена в стоимость и готова. <br><i>(Для справки: в премиальном строительстве отделка часто стоит 50–100% от стоимости «коробки», у нас вы получаете её сразу).</i></div>',highlight:"60 ДНЕЙ",isWide:!0,icon:`${p}/images/icons/60-days.png`}]},w=()=>{const s=l.useRef(null),[d,h]=l.useState(!1),[o,y]=l.useState(!1),[m,b]=l.useState({});l.useEffect(()=>{const i=()=>y(window.innerWidth<=768);i(),window.addEventListener("resize",i);const a=new IntersectionObserver(([n])=>{n.isIntersecting&&h(!0)},{threshold:.1});return s.current&&a.observe(s.current),()=>{a.disconnect(),window.removeEventListener("resize",i)}},[]);const x=i=>{b(a=>({...a,[i]:!0}))},c=(i,a)=>{if(!a)return i;const n=new RegExp(`(${a})`,"g");return i.replace(n,'<span class="doverie-gold-gradient">$1</span>')},g=e.cards.filter(i=>!i.isWide),u=e.cards.filter(i=>i.isWide);return r.jsxs("section",{ref:s,style:{backgroundColor:e.styles.bgColor},className:"doverie-section relative w-full flex flex-col items-center py-[10rem] z-10",children:[r.jsxs("div",{style:{maxWidth:t(f.layout.containerMaxWidth),paddingLeft:o?t(20):"0",paddingRight:o?t(20):"0"},className:"doverie-container w-full",children:[r.jsxs("div",{className:`doverie-header mb-[6rem] text-center md:text-left reveal-item ${d?"is-revealed":""}`,children:[r.jsx("h2",{style:{color:e.styles.titleColor},className:"doverie-title uppercase mb-[1rem]",children:e.title}),r.jsx("p",{style:{color:e.styles.subtitleColor},className:"doverie-subtitle uppercase italic",children:e.subtitle})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-[var(--grid-gap)] mb-[var(--grid-gap)]",children:g.map((i,a)=>r.jsxs("div",{className:`doverie-card flex flex-col reveal-item ${d?"is-revealed":""}`,style:{transitionDelay:`${a*150}ms`,backgroundColor:e.styles.cardBg,borderRadius:t(e.styles.borderRadius),padding:"var(--card-padding)"},children:[r.jsx("h3",{className:"card-title uppercase mb-[1.5rem]",dangerouslySetInnerHTML:{__html:c(i.title,i.highlight)}}),r.jsx("div",{className:"card-text leading-relaxed opacity-80",dangerouslySetInnerHTML:{__html:i.text}})]},a))}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[var(--grid-gap)]",children:u.map((i,a)=>r.jsxs("div",{className:`doverie-card wide-card flex flex-col md:flex-row items-start gap-[2rem] reveal-item ${d?"is-revealed":""}`,style:{transitionDelay:`${(g.length+a)*150}ms`,backgroundColor:e.styles.cardBg,borderRadius:t(e.styles.borderRadius),padding:o?"var(--card-padding)":`var(--card-padding-wide) var(--card-padding-wide) var(--card-padding-wide) ${t(e.styles.paddingDesktop*.7)}`},children:[i.icon&&r.jsx("div",{className:"card-icon flex-shrink-0 mx-auto md:mx-0 blur-up-container",children:r.jsx("img",{src:i.icon,alt:"",loading:"lazy",onLoad:()=>x(a),className:`w-full h-full object-contain blur-up-img ${m[a]?"is-loaded":""}`})}),r.jsxs("div",{className:"flex flex-col text-left w-full",children:[r.jsx("h3",{className:"card-title uppercase mb-[1.5rem]",dangerouslySetInnerHTML:{__html:c(i.title,i.highlight)}}),r.jsx("div",{className:"card-text leading-relaxed opacity-80",dangerouslySetInnerHTML:{__html:i.text}})]})]},a))})]}),r.jsx("style",{children:`
        .doverie-section {
          --grid-gap: ${t(e.styles.gap)};
          --accent: ${e.styles.accentColor};
          --card-padding: ${t(e.styles.paddingDesktop)};
          --card-padding-wide: ${t(e.styles.paddingDesktop*1.5)};
          
          /* Typography Desktop - No toRem for LineHeight/LetterSpacing */
          --title-fs: ${t(e.typography.desktop.titleSize)};
          --title-fw: ${e.typography.desktop.titleWeight};
          --title-lh: ${e.typography.desktop.titleLineHeight};
          --title-ls: ${e.typography.desktop.titleLetterSpacing};
          
          --subtitle-fs: ${t(e.typography.desktop.subtitleSize)};
          --subtitle-fw: ${e.typography.desktop.subtitleWeight};
          --subtitle-lh: ${e.typography.desktop.subtitleLineHeight};
          --subtitle-ls: ${e.typography.desktop.subtitleLetterSpacing};
          
          --card-title-fs: ${t(e.typography.desktop.cardTitleSize)};
          --card-title-fw: ${e.typography.desktop.cardTitleWeight};
          --card-title-lh: ${e.typography.desktop.cardTitleLineHeight};
          --card-title-ls: ${e.typography.desktop.cardTitleLetterSpacing};
          
          --card-text-fs: ${t(e.typography.desktop.cardTextSize)};
          --card-text-fw: ${e.typography.desktop.cardTextWeight};
          --card-text-lh: ${e.typography.desktop.cardTextLineHeight};
          --card-text-ls: ${e.typography.desktop.cardTextLetterSpacing};

          --icon-size: ${t(112)};
          --icon-size-wide: ${t(180)};
        }

        .card-icon {
          width: var(--icon-size);
          height: var(--icon-size);
          background-color: transparent !important;
        }

        .wide-card .card-icon {
          width: var(--icon-size-wide);
          height: var(--icon-size-wide);
        }

        @media (max-width: 768px) {
          .doverie-section {
            padding: 5rem 0;
            --card-padding: ${t(e.styles.paddingMobile)};
            --card-padding-wide: ${t(e.styles.paddingMobile)};
            
            /* Typography Mobile - No toRem for LineHeight/LetterSpacing to fix collapsing */
            --title-fs: ${t(e.typography.mobile.titleSize)};
            --title-fw: ${e.typography.mobile.titleWeight};
            --title-lh: ${e.typography.mobile.titleLineHeight};
            --title-ls: ${e.typography.mobile.titleLetterSpacing};
            
            --subtitle-fs: ${t(e.typography.mobile.subtitleSize)};
            --subtitle-fw: ${e.typography.mobile.subtitleWeight};
            --subtitle-lh: ${e.typography.mobile.subtitleLineHeight};
            --subtitle-ls: ${e.typography.mobile.subtitleLetterSpacing};
            
            --card-title-fs: ${t(e.typography.mobile.cardTitleSize)};
            --card-title-fw: ${e.typography.mobile.cardTitleWeight};
            --card-title-lh: ${e.typography.mobile.cardTitleLineHeight};
            --card-title-ls: ${e.typography.mobile.cardTitleLetterSpacing};
            
            --card-text-fs: ${t(e.typography.mobile.cardTextSize)};
            --card-text-fw: ${e.typography.mobile.cardTextWeight};
            --card-text-lh: ${e.typography.mobile.cardTextLineHeight};
            --card-text-ls: ${e.typography.mobile.cardTextLetterSpacing};

            --icon-size: ${t(80)};
            --icon-size-wide: ${t(120)};
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
          color: ${e.styles.textColor};
        }

        .doverie-card {
          border: 1px solid ${e.styles.cardBorder};
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .doverie-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
        }

        .doverie-gold-gradient {
          display: inline;
          background: ${e.styles.goldGradient};
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
      `})]})};export{w as default};
