import { useEffect, useState } from 'react';

const gql = String.raw;

export default function useBlogPosts() {
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
            posts: allPost(sort: { _createdAt: DESC }, limit: 5) {
              _id
              title
              subtitle
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
        setPosts(newPosts);
      });
  }, []);

  return { posts };
}
