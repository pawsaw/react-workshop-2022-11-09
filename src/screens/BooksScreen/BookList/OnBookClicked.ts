import { Book } from '../../../domain/books';

export interface OnBookClicked {
  (book: Book): void;
}
