import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/about">mikeCornish</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
