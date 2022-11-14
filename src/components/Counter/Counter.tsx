import { CSSProperties, useState } from 'react';

export interface OnValueChanged {
  (value: number): void;
}

export interface CounterProps {
  onValueChanged?: OnValueChanged;
  value: number;
}

export const Counter: React.FC<CounterProps> = ({ onValueChanged, value }) => {
  const increment = () => {
    const newValue = value + 1;

    onValueChanged?.(newValue);
  };

  const decrement = () => {
    const newValue = value - 1;
    onValueChanged?.(newValue);
  };

  return (
    <div style={style.container}>
      <button onClick={decrement}>-</button>
      <span style={style.value}>{value}</span>
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
