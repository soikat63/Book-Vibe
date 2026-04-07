import React, { createContext, useState } from 'react'

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {

    const [storeBooks, setStoreBooks] = useState([]);

    const handleMarkRead = (currentBook) => {
      const isExistBook = storeBooks.find(
        (book) => book.bookId === currentBook.bookId,
      );

      if (isExistBook) {
        alert("The Book is already exist.");
      } else {
          setStoreBooks([...storeBooks, currentBook]);
          alert (`${currentBook.bookName} is added to list`)
      }

      console.log(currentBook, storeBooks, "bookId");
    };

    const BookContextData = {
      storeBooks,
      setStoreBooks,
      handleMarkRead,
    };

    return (
      <BookContext.Provider value={ BookContextData }>
        {children}
      </BookContext.Provider>
    );
}

export default BookContextProvider


