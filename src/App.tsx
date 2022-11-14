import './App.css';
import { BookList, OnBookClicked } from './components/BookList';
import { useBooks } from './domain/books';
import { ThemeProvider } from './domain/theme';

function App() {
  const { books, reload } = useBooks();
  // const { book } = useBook('');

  const onBookClicked: OnBookClicked = (book) => {
    alert(book.price);
  };

  return (
    <ThemeProvider
      theme={{
        primaryColor: 'green',
      }}
    >
      <div>
        <h1>Book Manager</h1>
        <button onClick={() => reload()}>Reload Books</button>
        {books ? (
          <BookList books={books} onBookClicked={onBookClicked} />
        ) : (
          <span>Loading books...</span>
        )}
        {/* {book ? <BookDetail book={book} /> : <span>Loading book...</span>} */}
      </div>
    </ThemeProvider>
  );
}

export default App;
