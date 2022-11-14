import './App.css';
import { BookList, OnBookClicked } from './components/BookList';
import { books } from './data/books';

function App() {
  const onBookClicked: OnBookClicked = (book) => {
    alert(book.price);
  };

  return (
    <div>
      <h1>Book Manager</h1>
      <BookList books={books} onBookClicked={onBookClicked} />
    </div>
  );
}

export default App;
