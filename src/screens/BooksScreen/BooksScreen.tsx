import { useBooks } from '../../domain/books';
import { BookList, OnBookClicked } from './BookList';

export interface BooksScreenProps {}

export const BooksScreen: React.FC<BooksScreenProps> = () => {
  const { books, reload } = useBooks();

  const onBookClicked: OnBookClicked = (book) => {
    alert(book.price);
  };

  return (
    <div>
      <h2>Books</h2>
      <button onClick={() => reload()}>Reload Books</button>
      {books ? (
        <BookList books={books} onBookClicked={onBookClicked} />
      ) : (
        <span>Loading books...</span>
      )}
    </div>
  );
};
