
import { ASSET_PREFIX } from './general';

export type ViewMode = 'exterior' | 'interior';

export interface VitrinaItem {
  title: string;
  subtitle: string;
  imageExterior: string;
  imageInterior: string;
  defaultMode: ViewMode;
  href: string;
  buttonText: string;
}

export interface VitrinaConfig {
  sectionTitle: string;
  sectionDescription: string;
  badgeText: string;
  items: VitrinaItem[];
  styles: {
    cardHeightDesktop: number;
    cardHeightMobile: number;
    borderRadius: number;
    gap: number;
    titleSize: number;
    subtitleSize: number;
    badgeFontSize: number;
    badgePaddingX: number;
    badgePaddingY: number;
    buttonHeight: number;
    buttonFontSize: number;
    buttonFontSizeMobile: number;
    headerTitleSize: number;
    headerDescriptionSize: number;
    tabFontSizeDesktop: number;
    tabGapDesktop: number;
  };
}

export const vitrinaConfig: VitrinaConfig = {
  sectionTitle: "БАЗОВЫЕ КОНЦЕПЦИИ-ИДЕИ NORD-LINE",
  sectionDescription: "Ваш дом не обязан быть типовым. Используйте эти или любые другие идеи из сети как фундамент для творчества — мы адаптируем их под ваши запросы и реализуем в заводском качестве бизнес-класса.",
  badgeText: "КЛАССЫ: BUSINESS и COMFORT+",
  styles: {
    cardHeightDesktop: 660,
    cardHeightMobile: 520,
    borderRadius: 40,
    gap: 32,
    titleSize: 32,
    subtitleSize: 14,
    badgeFontSize: 12,
    badgePaddingX: 20,
    badgePaddingY: 10,
    buttonHeight: 72,
    buttonFontSize: 18,
    buttonFontSizeMobile: 14,
    headerTitleSize: 64,
    headerDescriptionSize: 20,
    tabFontSizeDesktop: 24, // 1.5x of base menu font
    tabGapDesktop: 80 // Increased gap for premium feel
  },
  items: [
    {
      title: "SPA-РЕЗИДЕНЦИИ",
      subtitle: "(Жилая SPA-усадьба для отдыха и жизни)",
      imageExterior: `${ASSET_PREFIX}/images/vitrina/spa-ext_result.webp`,
      imageInterior: `${ASSET_PREFIX}/images/vitrina/spa-inter_result.webp`,
      defaultMode: 'exterior',
      href: "#spa",
      buttonText: "СМОТРЕТЬ SPA-ПРОЕКТЫ"
    },
    {
      title: "УСАДЬБЫ NORD-LINE",
      subtitle: "(Капитальные резиденции для семьи и ПМЖ)",
      imageExterior: `${ASSET_PREFIX}/images/vitrina/usadba-ext_result.webp`,
      imageInterior: `${ASSET_PREFIX}/images/vitrina/usadba-inter_result.webp`,
      defaultMode: 'interior',
      href: "#estates",
      buttonText: "СМОТРЕТЬ УСАДЬБЫ"
    },
    {
      title: "LOUNGE-ЗОНЫ",
      subtitle: "(Статусные локации для приема гостей)",
      imageExterior: `${ASSET_PREFIX}/images/vitrina/lounge-ext_result.webp`,
      imageInterior: `${ASSET_PREFIX}/images/vitrina/lounge-inter_result.webp`,
      defaultMode: 'exterior',
      href: "#lounge",
      buttonText: "ОЦЕНИТЬ ЛАУНЖ-ЗОНЫ"
    }
  ]
};
