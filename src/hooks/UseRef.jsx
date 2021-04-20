import { useState, useRef, useEffect } from 'react';

// State vs Refs = State re-renders but Refs do not re-render.

const UseRef = () => {
  const [name, setName] = useState('');
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h4>my name is {name}</h4>
      <p>I rendered {renderCount.current} times.</p>
    </div>
  );
};

export default UseRef;
