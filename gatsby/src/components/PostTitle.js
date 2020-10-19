import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ContainerStyles = styled.div`
  text-align: center;
  transition: background-color 0.2s;

  &.align-left h1 {
    text-align: left;
  }

  h2 {
    margin-top: 0.5em;
    font-size: 1rem;
    font-weight: normal;
  }
  h1 {
    margin: 0;
    font-size: 1.5rem;
  }
  .chapter {
    font-weight: normal;
    font-family: 'Courier New', Courier, monospace;
  }
  .title {
    padding: 0 1em;
    font-family: var(--font-secondary);
    font-weight: 800;
  }
  .subtitle {
    font-weight: normal;
    color: #666;
  }
`;

function typeString({ appendix, bibliography, chapter }) {
  if (appendix != null) return `appendix${appendix}`;
  if (chapter != null) return `chapter${chapter}`;
  if (bibliography != null) return 'bibliography';
}

export default function PostTitle({
  post,
  align = 'left',
  datePosition = 'top',
}) {
  return (
    <ContainerStyles className={`align-${align}`}>
      <Link to={`/post/${post?.slug?.current}`}>
        <div>
          {datePosition === 'top' && <h2>{post.date}</h2>}
          <h1>
            <span className="chapter">
              {typeString(post.type)}(
              <span className="title">{post.title}</span>)
            </span>
            <div className="subtitle">{post.subtitle}</div>
          </h1>
          {datePosition === 'bottom' && <h2>{post.date}</h2>}
        </div>
      </Link>
    </ContainerStyles>
  );
}
