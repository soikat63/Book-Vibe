import React, { useContext } from 'react'
import { BookContext } from '../../components/context/BookContextProvider';

const Books = () => {


  const { storeBooks } = useContext(BookContext);
  console.log( storeBooks, "Book-Context");

  return (
    <div>Books</div>
  )
}

export default Books