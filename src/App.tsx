import { useState } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { CounterProvider } from './domain/counter';
import { ThemeProvider } from './domain/theme';
import { BookDetailsScreen } from './screens/BookDetailsScreen';
import { BooksScreen } from './screens/BooksScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <ThemeProvider
      theme={{
        primaryColor: 'green',
      }}
    >
      <CounterProvider
        counter={{
          count,
          increment,
          decrement,
        }}
      >
        <div>
          <h1>Book Manager</h1>
          <nav>
            <Link to="/books">Books</Link>
            <Link to="/playground">Playground</Link>
          </nav>
          <div>
            <Switch>
              <Route path="/books/:isbn" component={BookDetailsScreen} />
              <Route path="/books" component={BooksScreen} />
              <Route path="/playground" component={PlaygroundScreen} />
              <Redirect to="/books" />
            </Switch>
          </div>
        </div>
      </CounterProvider>
    </ThemeProvider>
  );
}

export default App;
