import { useEffect, useState } from 'react';

const gql = String.raw;

export default function useBlogPosts({ count = 5, limit = 20 } = {}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://ftec7ll7.api.sanity.io/v1/graphql/production/default', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GATSBY_BLOG_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            posts: allPost(sort: { _createdAt: DESC }, limit: ${limit}) {
              _id
              title
              subtitle
              # rawText
              markdown
              slug {
                current
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then(({ data: { posts: newPosts = [] } }) => {
        // TODO: Add ability to render non-markdown posts
        const markdownPosts = newPosts.filter(({ markdown }) => !!markdown);
        setPosts(markdownPosts.slice(0, count));
      });
  }, [count]);

  return { posts };
}
