
import { ASSET_PREFIX } from './general';

export interface DoverieCard {
  title: string;
  text: string;
  highlight?: string;
  icon?: string;
  isWide?: boolean;
}

export interface DoverieTypographySettings {
  titleSize: number;
  titleWeight: number | string;
  titleLineHeight: number;
  titleLetterSpacing: string;
  
  subtitleSize: number;
  subtitleWeight: number | string;
  subtitleLineHeight: number;
  subtitleLetterSpacing: string;
  
  cardTitleSize: number;
  cardTitleWeight: number | string;
  cardTitleLineHeight: number;
  cardTitleLetterSpacing: string;
  
  cardTextSize: number;
  cardTextWeight: number | string;
  cardTextLineHeight: number;
  cardTextLetterSpacing: string;
}

export interface DoverieConfig {
  title: string;
  subtitle: string;
  styles: {
    bgColor: string;
    titleColor: string;
    subtitleColor: string;
    cardBg: string;
    cardBorder: string;
    accentColor: string;
    goldGradient: string;
    textColor: string;
    gap: number;
    borderRadius: number;
    paddingDesktop: number;
    paddingMobile: number;
  };
  typography: {
    desktop: DoverieTypographySettings;
    mobile: DoverieTypographySettings;
  };
  cards: DoverieCard[];
}

export const doverieConfig: DoverieConfig = {
  title: "ПОЧЕМУ НАМ ДОВЕРЯЮТ СТРОИТЕЛЬСТВО РОДОВОГО ГНЕЗДА",
  subtitle: "Тюменцы ценят нас за честность, Северяне — за надежность",
  styles: {
    bgColor: "#F5F7FA",
    titleColor: "#0B1221",
    subtitleColor: "rgba(11, 18, 33, 0.7)", 
    cardBg: "#FFFFFF",
    cardBorder: "rgba(11, 18, 33, 0.05)",
    accentColor: "#C5A059",
    goldGradient: "linear-gradient(90deg, #8B6914 0%, #B8860B 25%, #D4AF37 50%, #B8860B 75%, #8B6914 100%)",
    textColor: "#0B1221",
    gap: 32,
    borderRadius: 24,
    paddingDesktop: 56,
    paddingMobile: 26
  },
  typography: {
    desktop: {
      titleSize: 76, 
      titleWeight: 900,
      titleLineHeight: 1.05,
      titleLetterSpacing: "-0.02em",
      
      subtitleSize: 24, 
      subtitleWeight: 600,
      subtitleLineHeight: 1.4,
      subtitleLetterSpacing: "0.15em",
      
      cardTitleSize: 34, 
      cardTitleWeight: 900,
      cardTitleLineHeight: 1.2,
      cardTitleLetterSpacing: "0.01em",
      
      cardTextSize: 22, 
      cardTextWeight: 400,
      cardTextLineHeight: 1.5,
      cardTextLetterSpacing: "normal"
    },
    mobile: {
      titleSize: 32,
      titleWeight: 900,
      titleLineHeight: 1.1,
      titleLetterSpacing: "-0.01em",
      
      subtitleSize: 18,
      subtitleWeight: 600,
      subtitleLineHeight: 1.3,
      subtitleLetterSpacing: "0.08em",
      
      cardTitleSize: 24,
      cardTitleWeight: 900,
      cardTitleLineHeight: 1.2,
      cardTitleLetterSpacing: "0.01em",
      
      cardTextSize: 18,
      cardTextWeight: 400,
      cardTextLineHeight: 1.4,
      cardTextLetterSpacing: "normal"
    }
  },
  cards: [
    {
      title: "12 ЛЕТ И 0 СУДОВ",
      text: "Мы строим в Тюмени с 2014 года. Проверьте нас в любой базе (например, kad.arbitr.ru): ни одного судебного разбирательства с заказчиками за всю историю. Мы местные, мы дорожим своим именем, а не «гастролируем».",
      highlight: "12 ЛЕТ И 0 СУДОВ"
    },
    {
      title: "ЦЕНА В ДОГОВОРЕ — ЭТО ЗАКОН",
      text: "Наш принцип: Цена фиксируется в момент подписания и не меняется. В 2021 году, когда дерево взлетело в цене в 2 раза, мы работали «в минус», но ни один заказчик не доплатил ни копейки сверх сметы. Мы держим слово.",
      highlight: "ЦЕНА В ДОГОВОРЕ"
    },
    {
      title: "БЕЗОПАСНАЯ ПОЭТАПНОСТЬ",
      text: "Вы не рискуете всей суммой сразу. Оплата разбита на этапы: Фундамент → Стены → Кровля. Приняли этап — оплатили следующий. Схема 70/30 обеспечивает полную прозрачность и вашу безопасность.",
      highlight: "Схема 70/30"
    },
    {
      title: "ЗАВОДСКАЯ ТОЧНОСТЬ LEGO-СБОРКИ",
      text: "Мы не пилим дом на участке «на коленке». Весь домокомплект изготавливается в цеху на станках с ЧПУ с допуском 0.5 мм. Результат: детали стыкуются идеально плотно. Нет щелей — нет продувания.",
      highlight: "LEGO-СБОРКИ",
      isWide: true,
      icon: `${ASSET_PREFIX}/images/icons/zavod.svg`
    },
    {
      title: "СКОРОСТЬ ПРЕФАБА (60 ДНЕЙ)",
      text: "Через 60 дней у вас на участке стоит Теплый контур (Стены + Кровля + Окна). Благодаря заводской готовности и сухой древесине, вы выигрываете целый сезон жизни, заселяясь в разы быстрее каменных домов.",
      highlight: "60 ДНЕЙ",
      isWide: true,
      icon: `${ASSET_PREFIX}/images/icons/60-days.svg`
    }
  ]
};
