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
  }
  .gatsby-image-wrapper {
    width: 500px;
    height: auto;
  }

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
    grid-template-columns: 1fr 1fr 1fr;
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
    display: flex;
    align-items: flex-start;
    gap: 1em;
  }
`;

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

  // Get preview content for blog post
  // TODO: Handle "text" content (currently only markdown)
  const getContent = ({ markdown, text }) => {
    const endingChars = [' ', ','];
    const maxLength = 500;
    let cleaned = '';
    let skipping = false;
    let ending = false;
    for (const char of markdown) {
      if (cleaned.length === maxLength) ending = true;
      if (char === '<') skipping = true;
      else if (char === '>') skipping = false;
      else if (ending && endingChars.includes(char)) break;
      else if (!skipping) cleaned += char;
    }
    if (cleaned.length >= maxLength) cleaned += '...';
    return <ReactMarkdown>{cleaned}</ReactMarkdown>;
  };
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
          {posts.map(({ _id, subtitle, markdown, text, slug }) => (
            <article key={_id}>
              <h4 className="post-header">{subtitle}</h4>
              <div className="post-content">
                {getContent({ markdown, text })}
                {/* {text && (
                  <BlockContent
                    blocks={text}
                    serializers={serializers}
                    projectId={process.env.GATSBY_SANITY_PROJECT_ID}
                    dataset={process.env.GATSBY_SANITY_DATASET}
                  />
                )}
                {markdown && <ReactMarkdown>{markdown}</ReactMarkdown>} */}
              </div>
              <a
                href={`https://blog.mikecornish.me/post/${slug.current}`}
                target="_blank"
                rel="noreferrer"
              >
                Keep reading
              </a>
            </article>
          ))}
        </div>
        <div>
          <h1>How can you contact me?</h1>
          <ul>
            <li>
              <a href={`mailto:${info.contact.email}`}>Email</a>
            </li>
            <li>
              <a href={`https://twitter.com/${info.contact.twitter}`}>
                Twitter
              </a>
            </li>
            <li>
              <a href={`https://github.com/${info.contact.github}`}>Github</a>
            </li>
            <li>
              <a href={`https://linkedin.com/in/${info.contact.linkedin}`}>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <h1 className="name">MIKE CORNISH</h1>
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
