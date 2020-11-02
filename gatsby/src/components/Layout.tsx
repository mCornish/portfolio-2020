import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';

const ContainerStyles = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
`;

export default function Layout({ children }) {
  return (
    <ContainerStyles>
      <GlobalStyles />
      <Typography />
      {/* <Header /> */}
      {children}
      <Footer />
    </ContainerStyles>
  );
}
