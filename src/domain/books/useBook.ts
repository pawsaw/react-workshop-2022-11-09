import { useState, useEffect } from 'react';
import { Book } from './Book';

export interface UseBookResult {
  book: Book | null;
  reload: (isbn: string) => Promise<void>;
}

export const useBook = (isbn: string): UseBookResult => {
  const [book, setBook] = useState<Book | null>(null);

  const reload = async (isbn: string) => {
    const response = await fetch(`http://localhost:4730/books/${isbn}`);
    const _book = await response.json();
    setBook(_book);
  };

  useEffect(() => {
    reload(isbn);
  }, [isbn]);

  return {
    book,
    reload,
  };
};
