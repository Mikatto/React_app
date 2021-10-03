import { createContext } from "react";

export const themes = {
    light: {
        background: '#ffffff',
        bodyBackground: '#f7f7f7',
        txtColor:'#242424',
        borderColor:'1px solid #dbdbdb',
    },
    dark: {
      background: '#323232',
      bodyBackground: '#1e1e1e',
      txtColor:'#f7f7f7',
      borderColor:'1px solid #4a4a4a',
    },
  };
  
  export const ThemeContext = createContext(themes.light);