import { useEffect, useState } from 'react';

const gql = String.raw;
const deets = gql`
  _id
  name
  image {
    asset {
      url
      metadata {
        lqip
      }
    }
  }
`;

export default function useLatestData() {
  const [hotSlices, setHotSlices] = useState();

  const [slicemasters, setSlicemasters] = useState();

  useEffect(() => {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemasters {
                ${deets}
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setHotSlices(data?.StoreSettings?.hotSlices);
        setSlicemasters(data?.StoreSettings?.slicemasters);
      });
  }, []);

  return { hotSlices, slicemasters };
}
