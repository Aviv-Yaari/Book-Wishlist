import { BookList } from './BookList';
import { WishBookList } from './WishBookList';
import DUMMY_BOOKS from './data.json';
import { useCallback, useEffect, useState } from 'react';
import { storageService } from './services/storageService';

export const App = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(storageService.loadFromStorage('favorites') || []);
    DUMMY_BOOKS.books.forEach(book => {
      book.price = +book.price;
      book.rating = +book.rating;
    });
  }, []);

  const handleFavorite = (book, isFavorite) => {
    setFavorites(prev => {
      let res;
      if (!isFavorite) res = [book, ...prev];
      else res = prev.filter(prevBook => prevBook.id !== book.id);
      storageService.saveToStorage('favorites', res);
      return res;
    });
  };

  const handleSortFavorites = useCallback(sortBy => {
    const key = Object.keys(sortBy)[0];
    const value = Object.values(sortBy)[0];
    setFavorites(prev => {
      const res = prev.sort((a, b) => (a[key] < b[key] ? value : value * -1));
      return [...res];
    });
  }, []);

  return (
    <main>
      <div className="books-wishbooks-container">
        {DUMMY_BOOKS && <BookList books={DUMMY_BOOKS.books} handleFavorite={handleFavorite} favorites={favorites} />}
        <WishBookList handleFavorite={handleFavorite} favorites={favorites} handleSortFavorites={handleSortFavorites} />
      </div>
    </main>
  );
};
