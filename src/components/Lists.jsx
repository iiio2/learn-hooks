import { useEffect, useState } from 'react';

const Lists = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('run useEffect');
    setItems(getItems());
  }, [getItems]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default Lists;
