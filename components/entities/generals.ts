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
export interface DarkSpaImg {
  darkMode: boolean;
  spanish: boolean;
  img: any;
  title: string;
  icon1: any;
  icon2?: any;
  icon3?: any;
  icon1D: any;
  icon2D?: any;
  icon3D?: any;
  text: string;
  textSpa: string;
}
