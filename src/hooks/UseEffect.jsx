import { Fragment, useState, useEffect } from 'react';

const UseEffect = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  console.log('render');

  useEffect(() => {
    console.log('done');
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <Fragment>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <h3>{resourceType}</h3>
      {items.map((item) => (
        <pre>{JSON.stringify(item)}</pre>
      ))}
    </Fragment>
  );
};

export default UseEffect;
