import { Book } from '../../../domain/books';
import { OnBookClicked } from '../OnBookClicked';

export interface BookListItemProps {
  book: Book;
  onBookClicked: OnBookClicked;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookClicked }) => {
  return <div onClick={() => onBookClicked(book)}>{book.title}</div>;
};
