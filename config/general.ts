
/**
 * Глобальный переключатель источников ресурсов.
 * true — использовать внешние URL (для AI Studio)
 * false — использовать локальные пути (для продакшена)
 */
export const useExternalAssets = true;
export const ASSET_PREFIX = useExternalAssets ? "https://platine0-crypto.github.io/Srub" : "";

/**
 * Глобальные цвета проекта NORD-LINE
 */
export const COLORS = {
  primaryGold: "#C5A059",
  background: "#0B1221",
  glassPanelBg: "10, 15, 44",
  accentButton: "#B35B3E",
  white: "#FFFFFF",
  textMuted: "rgba(255, 255, 255, 0.4)",
  borderWhite: "rgba(255, 255, 255, 0.1)",
};

export interface NavLink {
  label: string;
  href: string;
}

export interface GeneralConfig {
  brand: {
    name: string;
    subtext: string;
  };
  header: {
    desktop: {
      height: number;
      logoSize: number;
      paddingX: number;
      navGap: number;
    };
    mobile: {
      height: number;
      logoSize: number;
      paddingX: number;
      navGap: number;
      paddingBottom: number;
    };
    blur: number;
    opacity: number;
  };
  headerStyles: {
    navTextShadow: string;
    logoShadow: string;
    iconShadow: string;
    smallTextShadow: string;
  };
  layout: {
    containerMaxWidth: number;
    visualCorrection: number;
    visualCorrectionMobile: number;
    mobileDesignWidth: number;
    desktopDesignWidth: number;
    baseFontSize: number;
  };
  typography: {
    menuFontSize: number;
    menuFontWeight: string;
    menuLetterSpacing: string;
  };
  contacts: {
    phone: string;
    phoneRaw: string;
    tgLink: string;
  };
  navigation: NavLink[];
  icons: {
    telegram: string;
    phone: string;
    calendar: string;
  };
  animations: {
    fadeInSpeed: string;
    shimmerInterval: string;
    reveal: {
      yOffset: number;
      duration: number;
      delayStep: number;
      easing: string;
    };
  };
}

export const generalConfig: GeneralConfig = {
  brand: {
    name: "NORD LINE",
    subtext: "от СК Срубы для всех",
  },
  header: {
    desktop: {
      height: 72,
      logoSize: 56,
      paddingX: 60,
      navGap: 48
    },
    mobile: {
      height: 64,
      logoSize: 32,
      paddingX: 20,
      navGap: 16,
      paddingBottom: 15
    },
    blur: 30,
    opacity: 0.75
  },
  headerStyles: {
    navTextShadow: "0px 1px 3px rgba(0, 0, 0, 0.6), 0px 0px 10px rgba(0, 112, 255, 0.2)",
    logoShadow: "0px 2px 8px rgba(0, 0, 0, 0.5), 0px 0px 15px rgba(255, 255, 255, 0.1)",
    iconShadow: "0px 1px 4px rgba(0, 0, 0, 0.8), 0px 0px 8px rgba(0, 112, 255, 0.3)",
    smallTextShadow: "0px 1px 2px rgba(0, 0, 0, 0.9)"
  },
  layout: {
    containerMaxWidth: 1680,
    visualCorrection: 1,      
    visualCorrectionMobile: 0.75, 
    mobileDesignWidth: 375,   
    desktopDesignWidth: 1920, 
    baseFontSize: 16          
  },
  typography: {
    menuFontSize: 16,
    menuFontWeight: "600",
    menuLetterSpacing: "0.04em"
  },
  contacts: {
    phone: "+7 (3452) 288-199",
    phoneRaw: "+73452288199",
    tgLink: "https://t.me/nordline"
  },
  navigation: [
    { label: "КАТАЛОГ", href: "#katalog" },
    { label: "ЭКСКУРСИИ", href: "#ekskurs" },
    { label: "ТЕХНОЛОГИИ", href: "#tech" },
    { label: "СПОСОБЫ ПРИОБРЕТЕНИЯ", href: "#oplata" },
    { label: "О НАС", href: "#contacts" }
  ],
  icons: {
    telegram: `${ASSET_PREFIX}/images/icons/tg.svg`,
    phone: `${ASSET_PREFIX}/images/icons/phone-call.svg`,
    calendar: `${ASSET_PREFIX}/images/icons/calendar.svg`
  },
  animations: {
    fadeInSpeed: "0.8s",
    shimmerInterval: "5s",
    reveal: {
      yOffset: 2.5,
      duration: 800,
      delayStep: 150,
      easing: 'ease-out'
    }
  }
};
