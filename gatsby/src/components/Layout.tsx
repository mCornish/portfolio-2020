import React, { ReactElement } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Header from './Header';
import Footer from './Footer';

const ContainerStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 3em;
  /* align-items: center; */

  .content {
    /* width: 1200px; */
  }

  .texture {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: url('https://www.transparenttextures.com/patterns/textured-paper.png');
    opacity: 0.4;
    pointer-events: none;
    z-index: 100;
  }
`;

export default function Layout({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  return (
    <ContainerStyles>
      <GlobalStyles />
      <Typography />
      <div className="content">
        <Header />
        {children}
        <Footer />
      </div>
      <div className="texture" />
    </ContainerStyles>
  );
}
