import { useState, useEffect } from 'react';
import './App.css';
import { BookDetail } from './components/BookDetail';
import { BookList, OnBookClicked } from './components/BookList';
import { Book } from './domain/books';

function App() {
  const [book, setBook] = useState<Book | null>(null);
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:4730/books/1001606140805');
      const _book = await response.json();
      setBook(_book);
    })();
  }, []);

  const [books, setBooks] = useState<Book[] | null>(null);
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:4730/books');
      const _books = await response.json();
      setBooks(_books);
    })();
  }, []);

  const onBookClicked: OnBookClicked = (book) => {
    alert(book.price);
  };

  return (
    <div>
      <h1>Book Manager</h1>
      {books ? (
        <BookList books={books} onBookClicked={onBookClicked} />
      ) : (
        <span>Loading books...</span>
      )}
      {/* {book ? <BookDetail book={book} /> : <span>Loading book...</span>} */}
    </div>
  );
}

export default App;
