import React, { useContext } from 'react';
import { Counter } from './Counter';

const CounterContext = React.createContext<Counter>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

export interface CounterProviderProps {
  children: React.ReactNode;
  counter: Counter;
}

export const CounterProvider: React.FC<CounterProviderProps> = ({ children, counter }) => {
  return <CounterContext.Provider value={counter}>{children}</CounterContext.Provider>;
};

export const useCounter = () => useContext(CounterContext);
