import { Fragment, useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(() => {
    console.log('run function');
    return 4;
  });

  const dec = () => {
    setCounter((prevState) => prevState - 1);
    setCounter((prevState) => prevState - 1);
    setCounter((prevState) => prevState - 1);
  };

  return (
    <Fragment>
      <button>+</button>
      <h4>{counter}</h4>
      <button onClick={dec}>-</button>
    </Fragment>
  );
};

export default Counter;
