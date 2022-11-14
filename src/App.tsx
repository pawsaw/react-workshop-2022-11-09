import { useState } from 'react';
import './App.css';
import { BookList, OnBookClicked } from './components/BookList';
import { Counter } from './components/Counter';
import { useBooks } from './domain/books';
import { CounterProvider } from './domain/counter';
import { ThemeProvider } from './domain/theme';

function App() {
  const { books, reload } = useBooks();
  // const { book } = useBook('');

  const onBookClicked: OnBookClicked = (book) => {
    alert(book.price);
  };

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
          <Counter />
          <button onClick={() => reload()}>Reload Books</button>
          {books ? (
            <BookList books={books} onBookClicked={onBookClicked} />
          ) : (
            <span>Loading books...</span>
          )}
          {/* {book ? <BookDetail book={book} /> : <span>Loading book...</span>} */}
        </div>
      </CounterProvider>
    </ThemeProvider>
  );
}

export default App;
