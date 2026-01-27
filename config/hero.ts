
import { ASSET_PREFIX } from './general';

/**
 * Интерфейс стилизации элементов Hero-блока
 */
export interface HeroPlatformStyle {
  typography: {
    h1Size: number;
    h2Size: number;
    h1Weight: number | string;
    h2Weight: number | string;
    h1LineHeight: number;
    h2LineHeight: number;
    h1LetterSpacing: string;
    h2LetterSpacing: string;
    h2Shadow: string;
  };
  background: {
    positionY: string | number;
  };
  glass: {
    panelWidth: number | string;
    padding: number;
    blur: number;
    opacity: number;
    background: string;
    borderWidthTop: number;
    borderWidthBottom: number;
    borderWidthSides: number;
    borderGradient: string;
    outerBorderBlur: number;
    innerStroke: string;
    innerStrokeWidth: number;
    edgeGlow: string;
    edgeGlowOffset: number;
    edgeGlowBlur: number;
  };
  bullets: {
    fontSize: number;
    spacingY: number;
    coreSize: number;
    ringSize: number;
    textShadow: string;
    color: string;
    fontWeight: number | string;
  };
  buttons: {
    height: number;
    marginTop: number;
    borderRadius: number;
    background: string;
    boxShadow: string;
    textShadow: string;
    fontSize: number;
    fontWeight: number | string;
    letterSpacing: string;
  };
  textFogH2: {
    filter: number;
    paddingX: number;
    paddingY: number;
    gradient: string;
  };
}

export interface HeroStyleConfig {
  desktop: HeroPlatformStyle;
  mobile: HeroPlatformStyle;
  common: {
    shadows: {
      h1: string;
    };
  };
}

export interface HeroConfig {
  title: {
    white: string;
    gold: string;
  };
  subtitleLines: string[];
  subtitleLinesMobile: string[];
  bullets: { text: string }[];
  buttonText: string;
  buttonSubtext: string;
  images: {
    desktop: string;
    mobile: string;
    logo: string;
    telegramHeader: string;
  };
  layout: {
    desktop: {
      marginTop: number;
      stackSpacing: number;
      panelOffset: number;
    };
    mobile: {
      marginTop: string | number;
      stackSpacing: string | number;
      panelOffset: number;
      minHeight: number;
      "hero-mobile-spacer-Height": string;
    };
  };
}

export const HERO_STYLE_CONFIG: HeroStyleConfig = {
  desktop: {
    typography: {
      h1Size: 74,
      h2Size: 24,
      h1Weight: 800,
      h2Weight: 700,
      h1LineHeight: 0.95,
      h2LineHeight: 1.35,
      h1LetterSpacing: "-0.02em",
      h2LetterSpacing: "0.02em",
      h2Shadow: "0px 1px 3px rgba(0, 0, 0, 1), 0px 3px 8px rgba(11, 18, 33, 0.9)",
    },
    background: {
      positionY: "100%", // Фиксация фундамента дома по нижнему краю
    },
    glass: {
      panelWidth: 600,
      padding: 64,
      blur: 40,
      opacity: 0.4,
      background: "5, 10, 20",
      borderWidthTop: 2.2,
      borderWidthBottom: 0.6,
      borderWidthSides: 0.4,
      borderGradient: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.2) 8%, transparent 20%)",
      outerBorderBlur: 0.9,
      innerStroke: "rgba(255, 255, 255, 0.1)",
      innerStrokeWidth: 0.7,
      edgeGlow: "rgba(255, 255, 255, 0.25)",
      edgeGlowOffset: 4,
      edgeGlowBlur: 2,
    },
    bullets: {
      fontSize: 24,
      spacingY: 28,
      coreSize: 20,
      ringSize: 32,
      textShadow: "0px 1px 3px rgba(0, 0, 0, 0.9)",
      color: "#FFFFFF",
      fontWeight: 600,
    },
    buttons: {
      height: 80,
      marginTop: 40,
      borderRadius: 40,
      background: "linear-gradient(175deg, #8B3A15 0%, #F8B57B 25%, #B05024 50%, #F8B57B 85%, #C1531E 100%)",
      boxShadow: "inset 0px 2px 8px rgba(255, 255, 255, 0.4), 0 12px 24px rgba(0, 0, 0, 0.6), 0px 15px 45px rgba(193, 83, 30, 0.4)",
      textShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)",
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: "0.12em",
    },
    textFogH2: {
      paddingX: 20, 
      paddingY: 15, 
      gradient: "linear-gradient(90deg, rgba(11, 18, 33, 0) 0%, rgba(11, 18, 33, 0.85) 15%, rgba(11, 18, 33, 0.85) 85%, rgba(11, 18, 33, 0) 100%)",
      filter: 20 
    }
  },
  mobile: {
    typography: {
      h1Size: 30,
      h2Size: 16,
      h1Weight: 800,
      h2Weight: 600,
      h1LineHeight: 1.15,
      h2LineHeight: 1.2,
      h1LetterSpacing: "-0.02em",
      h2LetterSpacing: "0.02em",
      h2Shadow: "0px 2px 10px rgba(0, 0, 0, 0.45)",
    },
    background: {
      positionY: "+45%", 
    },
    glass: {
      panelWidth: "calc(100vw - 40px)",
      padding: 24,
      blur: 20,
      opacity: 0.65,
      background: "26, 43, 69",
      borderWidthTop: 1.5,
      borderWidthBottom: 0.5,
      borderWidthSides: 0.3,
      borderGradient: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 15%, transparent 30%)",
      outerBorderBlur: 0.5,
      innerStroke: "rgba(255, 255, 255, 0.1)",
      innerStrokeWidth: 0.5,
      edgeGlow: "rgba(255, 255, 255, 0.2)",
      edgeGlowOffset: 2,
      edgeGlowBlur: 1,
    },
    bullets: {
      fontSize: 16,
      spacingY: 16,
      coreSize: 14,
      ringSize: 22,
      textShadow: "0px 1px 2px rgba(0, 0, 0, 0.8)",
      color: "#FFFFFF",
      fontWeight: 600,
    },
    buttons: {
      height: 64,
      marginTop: 24,
      borderRadius: 32,
      background: "linear-gradient(175deg, #8B3A15 0%, #F8B57B 25%, #B05024 50%, #F8B57B 85%, #C1531E 100%)",
      boxShadow: "inset 0px 1px 4px rgba(255, 255, 255, 0.4), 0 8px 16px rgba(0, 0, 0, 0.5)",
      textShadow: "0px 1px 2px rgba(0, 0, 0, 0.6)",
      fontSize: 16,
      fontWeight: 800,
      letterSpacing: "0.1em",
    },
    textFogH2: {
      filter: 12,
      paddingX: 8,
      paddingY: 4,
      gradient: "linear-gradient(90deg, rgba(11, 18, 33, 0) 0%, rgba(11, 18, 33, 0.98) 15%, rgba(11, 18, 33, 0.98) 85%, rgba(11, 18, 33, 0) 100%)"
    }
  },
  common: {
    shadows: {
      h1: `
        0px 2px 4px rgba(0, 0, 0, 0.7),
        0px 8px 20px rgba(0, 25, 80, 0.35),
        0px 20px 80px rgba(0, 5, 20, 0.4),
        0px 0px 45px rgba(0, 100, 255, 0.2)
      `
    }
  }
};

export const heroConfig: HeroConfig = {
  title: {
    white: "Ваш личный курорт",
    gold: "бизнес-класса"
  },
  subtitleLines: [
    "Заводские SPA-резиденции и Усадьбы NORD-LINE.",
    "Капитальная надежность клееного бруса. Сборка за 60 дней."
  ],
  subtitleLinesMobile: [
    "Заводские SPA-резиденции и усадьбы.",
    "Серия NORD-LINE. Сборка за 60 дней."
  ],
  bullets: [
    { text: "12 лет безупречной практики" },
    { text: "0 судебных претензий" },
    { text: "1000+ резиденций построено" },
    { text: "Гарантия фиксации цены" }
  ],
  buttonText: "Записаться на тест-драйв",
  buttonSubtext: "Увидите качество, недоступное на фото",
  images: {
    desktop: `${ASSET_PREFIX}/images/hero/bg-hero-desktop.webp`,
    mobile: `${ASSET_PREFIX}/images/hero/bg-hero-mobile.webp`,
    logo: `${ASSET_PREFIX}/images/icons/logo.svg`,
    telegramHeader: `${ASSET_PREFIX}/images/icons/icon-telegram.svg`
  },
  layout: {
    desktop: {
      marginTop: 100,
      stackSpacing: 30,
      panelOffset: 50
    },
    mobile: {
      marginTop: "2.5vh",
      stackSpacing: "1.7vh",
      panelOffset: 105,
      "hero-mobile-spacer-Height": "40vh",
      minHeight: 612
    }
  }
};
