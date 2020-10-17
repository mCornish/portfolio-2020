import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `devStory`,
    siteUrl: 'https://devstory.mikecornish.me',
    description: 'Tales of development',
    twitter: '@MikeWCornish',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
