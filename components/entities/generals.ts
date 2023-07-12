export interface Generals {
  setDarkMode: (darkMode: boolean) => void;
  darkMode: boolean;
  setSpanish?: (spanish: boolean) => void;
  spanish?: boolean;
}
export interface Spanish {
  spanish: boolean;
}
export interface DarkSpanish {
  darkMode: boolean;
  spanish: boolean;
}
