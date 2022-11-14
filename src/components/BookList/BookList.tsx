import { Book } from '../../domain/books';
import { useCounter } from '../../domain/counter';
import { BookListItem } from './BookListItem/BookListItem';
import { OnBookClicked } from './OnBookClicked';

export interface BookListProps {
  books: Book[];
  onBookClicked: OnBookClicked;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookClicked }) => {
  const { count } = useCounter();

  return (
    <div>
      <p>Counter: {count}</p>
      {books.map((book) => (
        <BookListItem key={book.title} book={book} onBookClicked={onBookClicked} />
      ))}
    </div>
  );
};
