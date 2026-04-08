import React, { useContext } from 'react'
import { BookContext } from '../../components/context/BookContextProvider';

const Books = () => {


  const { storeBooks, wishList } = useContext(BookContext);
  // console.log( storeBooks, wishList, "Book-Context");

  return (
    <div>Books</div>
  )
}

export default Books