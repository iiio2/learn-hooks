import { Fragment, useState, useCallback } from 'react';
import Lists from '../components/Lists';

const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    background: dark ? '#333' : '#fff',
    color: dark ? 'fff' : '#333',
  };

  return (
    <Fragment>
      <div style={theme}>
        <h3>callback</h3>
        <input
          type='number'
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <button onClick={() => setDark((prevState) => !prevState)}>
          Toggle Theme
        </button>
        <Lists getItems={getItems} />
      </div>
    </Fragment>
  );
};

export default UseCallback;
