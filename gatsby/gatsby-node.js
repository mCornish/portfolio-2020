import path from 'path';

async function turnPostsIntoPages({ graphql, actions }) {
  const postTemplate = path.resolve('./src/templates/Post.js');

  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  data.posts.nodes.forEach((post) =>
    actions.createPage({
      path: `post/${post.slug.current}`,
      component: postTemplate,
      context: {
        slug: post.slug.current,
      },
    })
  );
}

async function turnTopicsIntoPages({ graphql, actions }) {
  const topicsTemplate = path.resolve('./src/pages/pizzas.js');

  const { data } = await graphql(`
    query {
      toppings: allSanityTopic {
        nodes {
          name
          id
        }
      }
    }
  `);

  data.toppings.nodes.forEach((topic) =>
    actions.createPage({
      path: `topic/${topic.name}`,
      component: topicsTemplate,
      context: {
        topic: topic.name,
      },
    })
  );
}

export async function createPages(params) {
  await Promise.all([turnPostsIntoPages(params), turnTopicsIntoPages(params)]);
}
