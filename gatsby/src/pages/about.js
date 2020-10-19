import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const AboutStyles = styled.article`
  width: var(--content-width);

  h1 {
    margin-top: 0;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 1em;
    color: var(--gray);
  }

  p {
    text-indent: 2em;
    font-size: 1rem;
  }
`;

export default function AboutPage({ data }) {
  console.log('AboutPage -> data', data);
  return (
    <AboutStyles>
      <ReactMarkdown>{data?.about?.text}</ReactMarkdown>
    </AboutStyles>
  );
}

export const query = graphql`
  query AboutQuery {
    about: sanitySettings(_id: { eq: "main" }) {
      text: about
    }
  }
`;
