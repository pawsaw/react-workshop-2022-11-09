import { Book } from '../../../domain/books';
import { useTheme } from '../../../domain/theme';
import { OnBookClicked } from '../OnBookClicked';

export interface BookListItemProps {
  book: Book;
  onBookClicked: OnBookClicked;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookClicked }) => {
  const { primaryColor } = useTheme();

  return (
    <div onClick={() => onBookClicked(book)}>
      <span
        style={{
          color: primaryColor,
        }}
      >
        {book.title}
      </span>
    </div>
  );
};
