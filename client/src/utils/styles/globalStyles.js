import { createGlobalStyle } from 'styled-components';
import Raleway from '../assets/fonts/Raleway-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
  * { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; margin: 0; padding: 0}
  
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fonts.fontFamily};
  }

  body {
    font-size: ${props => props.theme.fonts.fontSize};
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2.25rem;
  }

  h3 {
    font-size: 1.9rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.85rem;
  }

  a, button {
    cursor: pointer;
    width: max-content;
    text-decoration: none;
    border: none;
    font-size: 0.85rem;
    font-weight: 200;
  }

  span {
    font-size: 0.75rem;
    font-weight: 500;
  }

  p {
    font-size: 1.1rem;
  }

  ul, li, ol {
    list-style-type: disc;
    font-size: 1rem;
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${Raleway}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
