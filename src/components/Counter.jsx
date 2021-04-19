import { Fragment, useState } from 'react';

const Counter = () => {
  const [state, setState] = useState({ count: 4, theme: 'blue' });

  const count = state.count;
  const theme = state.theme;

  const dec = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 2 };
    });
  };

  const chThm = () => {
    setState((prevState) => {
      return { ...prevState, theme: 'red' };
    });
  };

  return (
    <Fragment>
      <button>+</button>
      <h4>{count}</h4>
      <h4 onClick={chThm}>{theme}</h4>
      <button onClick={dec}>-</button>
    </Fragment>
  );
};

export default Counter;
