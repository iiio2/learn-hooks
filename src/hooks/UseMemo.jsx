import { Fragment, useState, useMemo, useEffect } from 'react';

const UseMemo = () => {
  const [number, setNumber] = useState('');
  const [dark, setDark] = useState(false);

  const doubleNum = useMemo(() => {
    return slowFunc(number);
  }, [number]);

  const themeStyle = useMemo(() => {
    return {
      background: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);

  useEffect(() => {
    console.log('run useEffect');
  }, [themeStyle]);

  return (
    <Fragment>
      <h3>use memo</h3>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setDark((prevState) => !prevState)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNum}</div>
    </Fragment>
  );
};

const slowFunc = (num) => {
  console.log('slow func');
  for (let i = 0; i <= 1000000; i++) {
    return num * 2;
  }
};

export default UseMemo;
