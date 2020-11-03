import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/cornish-logo.svg';

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 0.25em;
  border-bottom: 0.25em solid var(--color-brand-1);

  div {
    position: relative;
    padding: 1em;
    padding-bottom: 0;
    text-align: center;
  }
  img {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-100%, -50%);
  }
  h1 {
    margin: 0;
    font-family: var(--font-title);
    font-size: 5rem;
    font-weight: normal;
  }
  h2 {
    margin: 0;
    font-family: var(--font-primary);
    font-size: 1rem;
  }
`;

export default function Footer() {
  const date = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateString = new Intl.DateTimeFormat('en-US', options).format(date);

  return (
    <HeaderStyles>
      <div>
        <img
          src={logo}
          width="80"
          alt="Logo depicting silhouette of cornish hen"
        />
        <h1>The Cornish Chronicle</h1>
      </div>
      <h2>{dateString}</h2>
    </HeaderStyles>
  );
}
