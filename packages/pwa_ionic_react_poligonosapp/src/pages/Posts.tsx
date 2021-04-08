import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Posts = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [posts, setPosts] = useState(require('./polygons.geojson'));

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: 'https://poligonosapp.herokuapp.com/',
          scope: 'read:poligonos',
        });
        const response = await fetch('https://poligonosapp.herokuapp.com/api/vi/poligonos', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(await response.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {posts.map((post:[], index:number) => {
        return <li key={index}>{post}</li>;
      })}
    </ul>
  );
};

export default Posts;
