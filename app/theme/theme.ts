// theme/theme.ts

export type ThemeMode = "light" | "dark";

/* =========================
   LIGHT THEME
   ========================= */

const light = {
  page: {
    bg: "#f6f7f4",
  },

  surface: {
    card: "#ffffff",
    modal: "#ffffff",
    elevated: "#f0f1ec",
  },

  text: {
    primary: "#1a1d18",
    secondary: "#3c4237",
    muted: "#6b5545",
    disabled: "#9a9a9a",
  },

  icon: {
    primary: "#3c4237",
    muted: "#6b5545",
    disabled: "#b5b5b5",
  },

  border: {
    default: "#d6d8d0",
    subtle: "#e4e6df",
    strong: "#c1c4ba",
  },

  button: {
    primary: {
      bg: "#1a1d18",
      text: "#ffffff",
      hover: "#2a2e26",
    },
    secondary: {
      bg: "#e6e1d7",
      text: "#1a1d18",
      hover: "#d8d2c6",
    },
    ghost: {
      text: "#1a1d18",
      hoverBg: "#eaece6",
    },
  },
};

/* =========================
   DARK THEME
   ========================= */

const dark = {
  page: {
    bg: "#1a1d18",
  },

  surface: {
    card: "#23261f",
    modal: "#2a2e26",
    elevated: "#2f332b",
  },

  text: {
    primary: "#e6e1d7",
    secondary: "#c8b4a0",
    muted: "#a89080",
    disabled: "#7a7a7a",
  },

  icon: {
    primary: "#e6e1d7",
    muted: "#c8b4a0",
    disabled: "#6a6a6a",
  },

  border: {
    default: "#3c4237",
    subtle: "#2a2e26",
    strong: "#544237",
  },

  button: {
    primary: {
      bg: "#e6e1d7",
      text: "#1a1d18",
      hover: "#d8d2c6",
    },
    secondary: {
      bg: "#3c4237",
      text: "#e6e1d7",
      hover: "#4a4f44",
    },
    ghost: {
      text: "#e6e1d7",
      hoverBg: "#2a2e26",
    },
  },
};

/* =========================
   EXPORT
   ========================= */

export const themes = {
  light,
  dark,
};

/* 🔒 HARD-CODE APP THEME HERE */
export const APP_THEME: ThemeMode = "dark"; // change to "dark" later

export const theme = themes[APP_THEME];

// theme/mode.ts
export const THEME_MODE: "light" | "dark" = "dark";
