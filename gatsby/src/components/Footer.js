import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaHome, FaGithub, FaTwitter } from 'react-icons/fa';

const FooterStyles = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--content-width);
  margin-top: 5em;
  font-size: 1rem;

  p {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
  }

  a {
    font-size: 1.5rem;

    & + a {
      margin-left: 0.5em;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; devStory {new Date().getFullYear()}</p>
      <div>
        <a
          role="button"
          href="https://www.mikecornish.me"
          target="_blank"
          rel="noreferrer"
        >
          <FaHome />
        </a>
        <a
          role="button"
          href="https://twitter.com/MikeWCornish"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          role="button"
          href="https://github.com/mCornish/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          role="button"
          href="mailto:cornishmw@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
    </FooterStyles>
  );
}
