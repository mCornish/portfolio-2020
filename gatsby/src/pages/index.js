import { graphql, Link } from 'gatsby';
import React from 'react';

function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/post/${post.slug.current}`}>{post.title}</Link>
        </div>
      ))}
    </div>
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
    posts: allSanityPost {
      nodes {
        slug {
          current
        }
        id
        date(fromNow: true)
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
      }
    }
  }
`;
