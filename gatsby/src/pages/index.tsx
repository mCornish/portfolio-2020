import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import useBlogPosts from '../utils/useBlogPosts';
import SEO from '../components/SEO';

const HomePageStyles = styled.div`
  ul {
    /* list-style: none; */
  }

  li + li {
    margin-top: 1em;
  }

  a {
    border-bottom: 1px dotted black;
    padding-bottom: 0.1em;
  }

  .headline {
    margin-top: 0.1em;
    text-align: center;
  }

  .blurb {
    margin-top: 0.1em;
    margin-bottom: 1em;
    text-align: center;
  }

  .project-header {
    white-space: nowrap;
    border: var(--header-border);
    border-left: 0;
    border-right: 0;
  }

  .main-image {
    border: 2px solid var(--black);
    width: clamp(10em, 100%, 20em);
  }
  /* .gatsby-image-wrapper {
    width: 500px;
    height: auto;
  } */

  .intro {
    border-top: var(--header-border);

    p:first-letter {
      float: left;
      margin-right: 0.1em;
      font-size: 4em;
      font-family: var(--font-secondary);
      font-weight: bold;
      color: var(--color-brand-1);
      line-height: 1;
    }
  }

  .row-one {
    display: grid;
    grid-template-columns: 8em 1fr 1fr;
    justify-items: center;
    align-items: flex-start;
    gap: 1em;
  }

  .blog-header {
    font-size: 1em;
  }

  .post-header {
    font-size: 1rem;
  }
  .post-content {
    h1,
    h2,
    h3,
    h4 {
      font-size: 1rem;
    }
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    gap: 1em;
  }

  .post-contact-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: flex-start;
    gap: 1em;
  }

  .contact {
    padding: 2em;
    border: 0.5em solid var(--black);
    grid-column: 1/-1;
    font-size: 0.7rem;

    h1 {
      font-size: 1.5rem;
    }
  }
`;

type Post = {
  _id: string;
  subtitle: string;
  markdown: string;
  text: string;
  slug: string;
};
const Post = ({
  post: { _id, subtitle, markdown, text, slug },
  contentLength = 500,
}: {
  post: Post;
  contentLength: number;
}) => {
  // Get preview content for blog post
  // TODO: Handle "text" content (currently only markdown)
  const getContent = ({
    markdown,
    text,
  }: {
    markdown: string;
    text: string;
  }): ReactElement => {
    const endingChars = [' ', ','];
    let cleaned = '';
    let skipping = false;
    let ending = false;
    for (const char of markdown) {
      if (cleaned.length === contentLength) ending = true;
      if (char === '<') skipping = true;
      else if (char === '>') skipping = false;
      else if (ending && endingChars.includes(char)) break;
      else if (!skipping) cleaned += char;
    }
    if (cleaned.length >= contentLength) cleaned += '...';
    return <ReactMarkdown>{cleaned}</ReactMarkdown>;
  };
  return (
    <article key={_id}>
      <h4 className="post-header">{subtitle}</h4>
      <div className="post-content">{getContent({ markdown, text })}</div>
      <a
        href={`https://blog.mikecornish.com/post/${slug.current}`}
        target="_blank"
        rel="noreferrer"
      >
        Keep reading
      </a>
    </article>
  );
};

type FluidImage = {
  asset: {
    fluid: {
      src: string;
    };
  };
};

type Contact = {
  email: string;
  github: string;
  twitter: string;
  linkedin: string;
};

type Settings = {
  headline: string;
  blurb: string;
  intro: string;
  photo: FluidImage;
  contact: Contact;
};

type Project = {
  id: string;
  _createdAt: Date;
  name: string;
  description: string;
  link: string;
};

type HomePageProps = PageProps<{
  info: Settings;
  projects: { nodes: Project[] };
}>;
export default function HomePage({
  data: { info, projects },
}: HomePageProps): ReactElement {
  const { posts } = useBlogPosts();
  return (
    <>
      <SEO image={info?.photo?.asset?.fluid?.src} />
      <HomePageStyles>
        <h1 className="headline">{info.headline}</h1>
        <h2 className="blurb">{info.blurb}</h2>
        <div className="row-one">
          <article>
            <h3 className="project-header">What has he even built?</h3>
            <p>
              When asked about his alleged creations, Mr. Cornish glady
              presented a list:
            </p>
            <ul>
              {projects.nodes.map(({ id, name, description, link }) => (
                <li key={id}>
                  <a href={link} target="_blank" rel="noreferrer">
                    <strong>{name}</strong>: {description}
                  </a>
                </li>
              ))}
            </ul>
          </article>
          <div className="main-image">
            <Img
              fluid={info.photo.asset.fluid}
              alt="Mike Cornish sitting in a chair, smiling at the camera"
            />
          </div>
          <article className="intro">
            <ReactMarkdown>{info.intro}</ReactMarkdown>
          </article>
        </div>
        <h3 className="blog-header">
          "I have thoughts on a lot of different things."
        </h3>
        <div className="row">
          {posts.slice(0, 2).map((post: Post) => (
            <Post key={post._id} post={post} contentLength={500} />
          ))}
          <div className="post-contact-container">
            {posts.slice(2).map((post: Post) => (
              <Post key={post._id} post={post} contentLength={300} />
            ))}
            <div className="contact">
              <h1>
                Have feedback, praise, or general inquiries? Make yourself
                heard!
              </h1>
              <p>
                This is Mike Cornish, owner of{' '}
                <strong>The Cornish Chronicle</strong>. I know that no one is
                perfect, and I'm always striving to make this publication
                better. I want to hear how I can do that. Then again, maybe you{' '}
                <em>do</em> think this publication perfect; I want to hear that
                too. Whatever you have to say, make yourself heard using the
                contact info below. I'll get back to you before you can say
                bawk-bawk-bawk!
              </p>
              <ul>
                <li>
                  Email me at{' '}
                  <a href={`mailto:${info.contact.email}`}>
                    {info.contact.email}
                  </a>
                </li>
                <li>
                  Tweet-tweet-tweet me{' '}
                  <a href={`https://twitter.com/${info.contact.twitter}`}>
                    @MikeWCornish
                  </a>
                </li>
                <li>
                  Watch me work on{' '}
                  <a href={`https://github.com/${info.contact.github}`}>
                    Github
                  </a>
                </li>
                <li>
                  Link up with me on{' '}
                  <a href={`https://linkedin.com/in/${info.contact.linkedin}`}>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </HomePageStyles>
    </>
  );
}

export const query = graphql`
  query {
    info: sanitySettings(_id: { eq: "main" }) {
      headline
      blurb
      intro
      photo {
        asset {
          fluid(maxWidth: 400, maxHeight: 300) {
            ...GatsbySanityImageFluid
          }
        }
      }
      contact {
        email
        twitter
        linkedin
      }
    }
    projects: allSanityProject(limit: 5) {
      nodes {
        id
        _createdAt
        name
        description
        link
      }
    }
  }
`;
