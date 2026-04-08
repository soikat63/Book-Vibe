import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [storeBooks, setStoreBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  // This function is write for marks as read btn.
  const handleMarkRead = (currentBook) => {
    const isExistBook = storeBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.warning("The Book is already exist.");
    } else {
      setStoreBooks([...storeBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to  read list`);
    }

    console.log(currentBook, storeBooks, "bookId");
  };

  // This function is written for wish list btn.
  const handleWishList = (currentBook) => {
    const isExistInReadList = storeBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistInReadList) {
      toast.warning(" The book is already exist in read list");
      return;
    }

    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.warning(" The book is already exit in  wish list.");
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to wish list`);
    }
  };

  const BookContextData = {
    storeBooks,
    setStoreBooks,
    handleMarkRead,
    wishList,
    setWishList,
    handleWishList,
  };

  return (
    <BookContext.Provider value={BookContextData}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
