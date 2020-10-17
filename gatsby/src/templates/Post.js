import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
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

// SyntaxHighlighter.registerLanguage('javascript', js);

// function TextSpan({ span }) {
//   let element = <span>{span.text}</span>;

//   if (span.marks.includes('strong')) element = <strong>{element}</strong>;
//   if (span.marks.includes('em')) element = <em>{element}</em>;

//   return element;
// }

// function TextBlock({ block, children }) {
//   switch (block.style) {
//     case 'h1':
//       return <h3>{children}</h3>;
//     case 'h2':
//       return <h4>{children}</h4>;
//     case 'h3':
//       return <h5>{children}</h5>;
//     default:
//       return <p>{children}</p>;
//   }
// }
//
// function PostText({ text }) {
//   console.log('PostText -> text', text);
//   return (
//     <div>
//       {text.map((block) => (
//         <TextBlock key={block._key} block={block}>
//           {block.children.map((child) => (
//             <TextSpan key={child._key} span={child} />
//           ))}
//         </TextBlock>
//       ))}
//     </div>
//   );
// }

const serializers = {
  types: {
    code: ({ node }) => (
      // <SyntaxHighlighter language="javascript" style={solarizedDark}>
      //   {node.code}
      // </SyntaxHighlighter>
      <AceEditor mode="javascript" theme="solarized_dark" value={node.code} />
    ),
  },
};

export default function SinglePostPage({ data: { post } }) {
  console.log('SinglePostPage -> post', post);
  return (
    <>
      <SEO title={post.title} image={post.image?.asset?.fluid?.src} />
      <div>
        <Img fluid={post.image.asset.fluid} />
        <div>
          <h1>{post.title}</h1>
          <h2>{post.subtitle}</h2>
          {/* <PostText text={post.text} /> */}
          <BlockContent
            blocks={post.text}
            serializers={serializers}
            projectId={process.env.GATSBY_SANITY_PROJECT_ID}
            dataset={process.env.GATSBY_SANITY_DATASET}
          />
        </div>
      </div>
    </>
  );
}

export const query = graphql`
  query SinglePostQuery($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      title
      subtitle
      text: _rawText
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
