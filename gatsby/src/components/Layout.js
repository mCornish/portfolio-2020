import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Logo from './Logo';

const HeaderStyles = styled.header`
  display: flex;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <HeaderStyles>
        <Logo />
        <Nav />
      </HeaderStyles>
      {children}
      <Footer />
    </>
  );
}
