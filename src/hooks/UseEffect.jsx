import { Fragment, useState, useEffect } from 'react';

const UseEffect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //   useEffect(() => {
  //     console.log('done');
  //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //       .then((response) => response.json())
  //       .then((json) => setItems(json));
  //   }, [resourceType]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Fragment>
      <h4>{windowWidth}</h4>
    </Fragment>
  );
};

export default UseEffect;
