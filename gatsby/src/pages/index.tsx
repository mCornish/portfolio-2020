import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import useBlogPosts from '../utils/useBlogPosts';

const HomePageStyles = styled.div`
  ul {
    list-style: none;
  }

  li + li {
    margin-top: 1em;
  }

  a {
    border-bottom: 1px dotted black;
    padding-bottom: 0.1em;
  }

  .row {
    display: flex;
    align-items: flex-start;
  }

  .gatsby-image-wrapper {
    width: 400px;
    height: 400px;
    margin-left: 1em;
  }
`;

const CardGridStyles = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  /* Border color */
  background-color: rgba(0, 0, 0, 0.1);

  > div {
    padding: 2em;
    background-color: rgba(255, 255, 255, 0.9);
  }

  .name {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
    font-size: 1.2em;
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
    <HomePageStyles>
      <CardGridStyles>
        <div>
          <h1>Who am I?</h1>
          <div className="row">
            <ReactMarkdown>{info.intro}</ReactMarkdown>
            {/* <Img
              fluid={info.photo.asset.fluid}
              alt="Mike Cornish sitting in a chair, smiling"
            /> */}
          </div>
        </div>
        <div>
          <h1>What have I made?</h1>
          <ul>
            {projects.nodes.map(({ id, name, description, link }) => (
              <li key={id}>
                <a href={link} target="_blank" rel="noreferrer">
                  {name}: {description}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>What do I think about?</h1>
          <ul>
            {posts.map(({ _id, subtitle, slug }) => (
              <li key={_id}>
                <a
                  href={`https://blog.mikecornish.me/post/${slug.current}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {subtitle}
                </a>
              </li>
            ))}
          </ul>
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
      </CardGridStyles>
    </HomePageStyles>
  );
}

export const query = graphql`
  query {
    info: sanitySettings(_id: { eq: "main" }) {
      intro
      photo {
        asset {
          fluid(maxWidth: 400) {
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
