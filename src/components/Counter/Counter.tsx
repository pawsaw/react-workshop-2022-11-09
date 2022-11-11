import { CSSProperties, useState } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div style={style.container}>
      <button onClick={decrement}>-</button>
      <span style={style.value}>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

const style: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  value: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
