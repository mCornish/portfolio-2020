// import { graphql, Link } from 'gatsby';
// import React from 'react';
// import Img from 'gatsby-image';
// import styled from 'styled-components';
// import Pagination from '../components/Pagination';
// import SEO from '../components/SEO';

// const SingleSlicemasterStyles = styled.div`
//   a {
//     text-decoration: none;
//   }
//   .gatsby-image-wrapper {
//     height: 400px;
//   }
//   h2 {
//     transform: rotate(-2deg);
//     text-align: center;
//     font-size: 4rem;
//     margin-bottom: -2rem;
//     position: relative;
//     z-index: 2;
//   }
//   .description {
//     background-color: var(--yellow);
//     padding: 1rem;
//     margin: 2rem;
//     margin-top: -6rem;
//     z-index: 2;
//     position: relative;
//     transform: rotate(1deg);
//   }
// `;

// const SlicemasterGridStyles = styled.div`
//   display: grid;
//   grid-gap: 2rem;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
// `;

// function SingleSlicemaster({ slicemaster }) {
//   return (
//     <SingleSlicemasterStyles>
//       <Link to={`/slicemaster/${slicemaster.slug.current}`}>
//         <h2>
//           <span className="mark">{slicemaster.name}</span>
//         </h2>
//         <Img fluid={slicemaster.image.asset.fluid} />
//         <p className="description">{slicemaster.description}</p>
//       </Link>
//     </SingleSlicemasterStyles>
//   );
// }

// function SlicemastersList({ slicemasters }) {
//   return (
//     <>
//       <SlicemasterGridStyles>
//         {slicemasters.map((slicemaster) => (
//           <SingleSlicemaster key={slicemaster.id} slicemaster={slicemaster} />
//         ))}
//       </SlicemasterGridStyles>
//     </>
//   );
// }

// export default function SlicemastersPage({
//   data: { slicemasters },
//   pageContext: { currentPage = 1, skip },
// }) {
//   return (
//     <>
//       <SEO title={`Slicermasters - Pages ${currentPage}`} />
//       <Pagination
//         pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
//         totalCount={slicemasters.totalCount}
//         currentPage={currentPage}
//         skip={skip}
//         base="/slicemasters"
//       />
//       <SlicemastersList slicemasters={slicemasters.nodes} />
//     </>
//   );
// }

// export const query = graphql`
//   query SlicemastersQuery($pageSize: Int = 2, $skip: Int = 0) {
//     slicemasters: allSanityPerson(limit: $pageSize, skip: $skip) {
//       totalCount
//       nodes {
//         image {
//           asset {
//             fluid(maxWidth: 410) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//         name
//         slug {
//           current
//         }
//         description
//         id
//       }
//     }
//   }
// `;
