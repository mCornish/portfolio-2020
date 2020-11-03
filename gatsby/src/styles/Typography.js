import { createGlobalStyle } from 'styled-components';

import merriweather from '../assets/fonts/Merriweather-Regular.ttf';
import merriweatherBold from '../assets/fonts/Merriweather-Bold.ttf';
import merriweatherItalic from '../assets/fonts/Merriweather-Italic.ttf';
import merriweatherBoldItalic from '../assets/fonts/Merriweather-BoldItalic.ttf';
import merriweatherSans from '../assets/fonts/MerriweatherSans-Regular.ttf';
import merriweatherSansBold from '../assets/fonts/MerriweatherSans-Bold.ttf';
import merriweatherSansBoldItalic from '../assets/fonts/MerriweatherSans-BoldItalic.ttf';

import oldLondon from '../assets/fonts/OldLondon.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: OldLondon;
    src: url(${oldLondon});
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

  :root {
    --font-title: OldLondon, Merriweather, Georgia, serif;
    --font-primary: Merriweather, Georgia, serif;
    --font-secondary: Merriweather Sans, Helvetica, Arial, sans-serif;
  }

  html {
    font-family: var(--font-primary);
    color: var(--black);
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-primary);
    color: var(--dark-gray);
    font-weight: bold;
    line-height: 1.3;
    margin: 0;
    padding: 0;

    @include mobile {
        line-height: 1.4;
    }
  }

  h1 {
    font-size: 3rem;
    a {
      color: inherit;
    }
  }
  h2 {
    font-size: 1.5rem;
    font-weight: normal;
    font-style: italic;
  }
  h3 {
    padding: 1em 0;
    font-size: 1.2rem;
    white-space: nowrap;
    border: 1px solid var(--black);
    border-left: 0;
    border-right: 0;
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
