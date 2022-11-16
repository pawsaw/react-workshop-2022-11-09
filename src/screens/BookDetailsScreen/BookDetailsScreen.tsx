import { useParams } from 'react-router-dom';

export interface BookDetailScreenParams {
  isbn: string;
}

export const BookDetailsScreen: React.FC = () => {
  const { isbn } = useParams<BookDetailScreenParams>();

  return (
    <div>
      <h2>Book {isbn}</h2>
    </div>
  );
};
