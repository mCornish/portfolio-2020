import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({
  children,
  location,
  description,
  title,
  image,
}: {
  children: ReactElement[];
  location: string;
  description: string;
  title: string;
  image: string;
}): ReactElement {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
        }
      }
    }
  `);

  return (
    <Helmet
      defaultTitle="Mike Cornish"
      titleTemplate={title ? `%s | ${site.siteMetadata.title}` : 'Mike Cornish'}
    >
      <html lang="en" />
      <title>{title}</title>

      {/* Fav Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />

      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />

      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || '/logo.svg'} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={site.siteMetadata.title}
        key="ogsitename"
      />
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </Helmet>
  );
}
