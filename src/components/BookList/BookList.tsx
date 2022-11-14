import { Book } from '../../domain/books';
import { BookListItem } from './BookListItem/BookListItem';
import { OnBookClicked } from './OnBookClicked';

export interface BookListProps {
  books: Book[];
  onBookClicked: OnBookClicked;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookClicked }) => {
  return (
    <div>
      {books.map((book) => (
        <BookListItem key={book.title} book={book} onBookClicked={onBookClicked} />
      ))}
    </div>
  );
};
