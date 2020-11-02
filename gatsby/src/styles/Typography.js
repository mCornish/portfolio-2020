import { createGlobalStyle } from 'styled-components';

import merriweather from '../assets/fonts/Merriweather-Regular.ttf';
import merriweatherBold from '../assets/fonts/Merriweather-Bold.ttf';
import merriweatherItalic from '../assets/fonts/Merriweather-Italic.ttf';
import merriweatherBoldItalic from '../assets/fonts/Merriweather-BoldItalic.ttf';
import merriweatherSans from '../assets/fonts/MerriweatherSans-Regular.ttf';
import merriweatherSansBold from '../assets/fonts/MerriweatherSans-Bold.ttf';
import merriweatherSansBoldItalic from '../assets/fonts/MerriweatherSans-BoldItalic.ttf';
// import merriweatherSans from '../assets/fonts/MerriweatherSans-VariableFont_wght.ttf';

const Typography = createGlobalStyle`
  :root {
    --font-primary: Merriweather, Georgia, serif;
    --font-secondary: Merriweather Sans, Helvetica, Arial, sans-serif;
  }
  @font-face {
    font-family: Merriweather;
    src: url(${merriweather});
  }
  @font-face {
    font-family: Merriweather;
    src: url(${merriweatherBold});
    font-weight: bold;
  }
  @font-face {
    font-family: Merriweather;
    src: url(${merriweatherItalic});
    font-style: italic;
  }
  @font-face {
    font-family: Merriweather;
    src: url(${merriweatherBoldItalic});
    font-weight: bold;
    font-style: italic;
  }
  
  @font-face {
    font-family: Merriweather Sans;
    src: url(${merriweatherSans});
  }
  @font-face {
    font-family: Merriweather Sans;
    src: url(${merriweatherSansBold});
    font-weight: bold;
  }
  @font-face {
    font-family: Merriweather Sans;
    src: url(${merriweatherSansBoldItalic});
    font-weight: bold;
    font-style: italic;
  }

  html {
    font-family: var(--font-primary);
    color: var(--black);
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
    color: var(--dark-gray);
    font-weight: bold;
    line-height: 1.3;
    margin: 1.5em 0 .5em;
    padding: 0;

    @include mobile {
        line-height: 1.4;
    }
  }

  h1 {
    font-size: 1.5rem;
    a {
      color: inherit;
    }
    margin-top: 2em;
  }

  p, li {
    color: var(--color-text-dark);
    font-size: 1rem;
  }

  a {
    color: var(--color-link);
    text-decoration: none;
    cursor: pointer;
    transition: color .2s;
  }
  a:hover, 
  a:active,
  a:visited:hover,
  a:visited:active {
      color: var(--color-brand-1);
      border-bottom-color: var(--color-brand-1);
  }
  a:visited {
    color: var(--color-text-dark);
  }
  p a {
      border-bottom: 1px dotted var(--color-link);
  }

  .center {
    text-align: center;
  }

  strong {
    font-family: "Merriweather-Bold";
  }
`;

export default Typography;
