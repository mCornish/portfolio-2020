import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-brand-1: rgb(57,154,234);
    --color-brand-2: rgb(135,102,219);
    --color-text-dark: rgba(30,30,30);
    --color-text-light: rgba(255,255,255,90);
    --color-link: rgb(0,0,0);
    --color-link-visited: rgba(0,0,0,40);

    --black: rgba(0,0,0,.9);
    --dark-gray: #333;
    --gray: #666;

    --header-border: 1px solid var(--color-text-dark);
  }

  body {
    min-height: 100vh;
    font-size: 2rem;
    background-color: rgb(230,230,250);
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: blurred;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
