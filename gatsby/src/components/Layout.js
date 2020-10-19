import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Logo from './Logo';

const ContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--content-width);
  margin-top: 2em;
  font-family: 'Courier New', Courier, monospacemonospace;
  font-size: 1rem;

  .description {
    font-family: var(--font-primary);
    color: var(--gray);
  }
`;

const ContentStyles = styled.main`
  margin-top: 2em;
`;

export default function Layout({ children }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);
  return (
    <ContainerStyles>
      <GlobalStyles />
      <Typography />
      <HeaderStyles>
        <div>
          <Logo />
          <div className="description">{site.siteMetadata.description}</div>
        </div>
        <Nav />
      </HeaderStyles>
      <ContentStyles>{children}</ContentStyles>
      <Footer />
    </ContainerStyles>
  );
}
