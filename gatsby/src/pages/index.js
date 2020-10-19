import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PostTitle from '../components/PostTitle';

const PostListStyles = styled.div`
  > * + * {
    margin-top: 2em;
  }
`;

function PostList({ posts }) {
  return (
    <PostListStyles>
      {posts.map((post) => (
        <PostTitle key={post.id} post={post} />
      ))}
    </PostListStyles>
  );
}

export default function HomePage({ data }) {
  return (
    <div className="center">
      <PostList posts={data.posts.nodes} />
    </div>
  );
}

export const query = graphql`
  query PostsQuery {
    posts: allSanityPost(sort: { fields: [date], order: DESC }) {
      nodes {
        slug {
          current
        }
        id
        date(formatString: "MMMM D, YYYY")
        image {
          asset {
            fluid {
              src
            }
          }
        }
        title
        subtitle
        text {
          style
          children {
            text
            marks
          }
        }
        type {
          chapter
          appendix
        }
      }
    }
  }
`;
