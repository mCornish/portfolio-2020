import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import BlockContent from '@sanity/block-content-to-react';
import Img from 'gatsby-image';
import styled from 'styled-components';
// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
// import solarizedDark from 'react-syntax-highlighter/dist/esm/styles/hljs/solarized-dark';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import SEO from '../components/SEO';
import PostTitle from '../components/PostTitle';

const ContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  .gatsby-image-wrapper {
    width: 100%;
  }

  p {
    text-indent: 2em;
    font-size: 1rem;
  }
  p:first-child {
    margin-top: 0;
  }
  p:first-child:not(:last-child):first-letter {
    font-size: 3em;
    font-family: 'Courier';
  }
`;

const ContentStyles = styled.article`
  width: var(--content-width);
  margin-top: 1em;
`;

const serializers = {
  types: {
    code: ({ node }) => (
      <AceEditor mode="javascript" theme="solarized_dark" value={node.code} />
    ),
  },
};

export default function SinglePostPage({ data: { post } }) {
  console.log('SinglePostPage -> post', post);
  return (
    <ContainerStyles>
      <SEO title={post.title} image={post.image?.asset?.fluid?.src} />
      {post.image && <Img fluid={post.image.asset.fluid} />}
      <ContentStyles>
        <PostTitle post={post} align="center" datePosition="bottom" />
        <div>
          {post.text && (
            <BlockContent
              blocks={post.text}
              serializers={serializers}
              projectId={process.env.GATSBY_SANITY_PROJECT_ID}
              dataset={process.env.GATSBY_SANITY_DATASET}
            />
          )}
          {post.markdown && <ReactMarkdown>{post.markdown}</ReactMarkdown>}
        </div>
      </ContentStyles>
    </ContainerStyles>
  );
}

export const query = graphql`
  query SinglePostQuery($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      title
      subtitle
      date(formatString: "MMMM D, YYYY")
      text: _rawText
      markdown
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      type {
        chapter
        appendix
      }
    }
  }
`;
