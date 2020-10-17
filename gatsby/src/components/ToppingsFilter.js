// import React from 'react';
// import { graphql, Link, useStaticQuery } from 'gatsby';
// import styled from 'styled-components';

// const ToppingsStyles = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1rem;
//   margin-bottom: 4rem;

//   a {
//     display: grid;
//     grid-template-columns: auto 1fr;
//     grid-gap: 0 1rem;
//     align-items: center;
//     padding: 5px;
//     background: var(--grey);
//     border-radius: 2px;

//     .count {
//       background: white;
//       padding: 2px 5px;
//     }

//     &[aria-current='page'] {
//       background: var(--yellow);
//     }
//   }
// `;

// const countPizzasInToppings = (pizzas) => {
//   const counts = pizzas
//     .map(({ toppings }) => toppings)
//     .flat()
//     .reduce((acc, topping) => {
//       if (!acc[topping.id])
//         acc[topping.id] = {
//           id: topping.id,
//           name: topping.name,
//           count: 0,
//         };
//       acc[topping.id].count += 1;
//       return acc;
//     }, {});

//   return Object.values(counts).sort((a, b) => b.count - a.count);
// };

// export default function ToppingsFilter() {
//   const { pizzas } = useStaticQuery(graphql`
//     query {
//       toppings: allSanityTopping {
//         nodes {
//           name
//           id
//           vegetarian
//         }
//       }
//       pizzas: allSanityPost {
//         nodes {
//           toppings {
//             name
//             id
//           }
//         }
//       }
//     }
//   `);

//   const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);

//   return (
//     <ToppingsStyles>
//       <Link to="/pizzas">
//         <span className="name">All</span>
//         <span className="count">{pizzas.nodes.length}</span>
//       </Link>
//       {toppingsWithCounts.map((topping) => (
//         <Link key={topping.id} to={`/topping/${topping.name}`}>
//           <span className="name">{topping.name}</span>
//           <span className="count">{topping.count}</span>
//         </Link>
//       ))}
//     </ToppingsStyles>
//   );
// }
