import { Book } from '../../domain/books';

export interface BookDetailProps {
  book: Book;
}

export const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  return (
    <div>
      {book.isbn} - {book.title}
    </div>
  );
};
