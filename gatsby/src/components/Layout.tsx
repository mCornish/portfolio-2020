import React, { ReactElement } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Header from './Header';
import Footer from './Footer';

const ContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 1000px;
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
    </ContainerStyles>
  );
}
