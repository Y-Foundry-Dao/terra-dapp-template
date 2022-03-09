import { createGlobalStyle } from 'styled-components';

import ThemeType from './ThemeType';

const GlobalCss = createGlobalStyle<{ theme: ThemeType }>` 
html{
  font-family: 'Kodchasan', sans-seri f;
  background: radial-gradient(53% 108% at -12% 17%, rgba(70, 56, 4, 0.2) 0%, rgba(0, 0, 0, 0) 98.24%), linear-gradient(111.53deg, #060E1B 0.63%, #1F0D0E 98.4%);
  color: ${(props) => `${props.theme.colors.white}`};
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden !important;

  &::-webkit-scrollbar {
    width: 16px; 
    background: ${(props) =>
      `${props.theme.colors.black}`};               /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #202833;  
    border-radius: 10px;      /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background:  linear-gradient(186deg, #DA5F37 5%, #805446 90%);    /* color of the scroll thumb */
    border-radius: 10px; 
    border: 3px solid #202833;
  }
}
`;

export default GlobalCss;
