import { CSSProperties } from 'react';
import { useCounter } from '../../domain/counter';

export interface CounterProps {}

export const Counter: React.FC<CounterProps> = () => {
  const { count, increment, decrement } = useCounter();

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
