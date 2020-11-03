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

const CardGridStyles = styled.div``;

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
      <h1>{info.headline}</h1>
      <h2>{info.blurb}</h2>
      <div className="row">
        <article>
          <h3>What has he even built?</h3>
          <p>
            When asked about his alleged creations, Mr. Cornish glady presented
            a list:
          </p>
          <ul>
            {projects.nodes.map(({ id, name, description, link }) => (
              <li key={id}>
                <a href={link} target="_blank" rel="noreferrer">
                  {name}: {description}
                </a>
              </li>
            ))}
          </ul>
        </article>
        <Img
          fluid={info.photo.asset.fluid}
          alt="Mike Cornish sitting in a chair, smiling"
        />
        <article>
          <ReactMarkdown>{info.intro}</ReactMarkdown>
        </article>
      </div>
      <h3>"I have thoughts on a lot of different things."</h3>
      <div className="row">
        {posts.map(({ _id, subtitle, slug }) => (
          <article key={_id}>
            <h4>{subtitle}</h4>
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
            <a href={`https://twitter.com/${info.contact.twitter}`}>Twitter</a>
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
