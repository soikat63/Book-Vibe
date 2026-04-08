import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../components/context/BookContextProvider";

const BookDetails = () => {
  const books = useLoaderData();
  // console.log(books);

  const { bookId } = useParams();

  const expectedBooks = books.find((book) => book.bookId === parseInt(bookId));
  // console.log(expectedBooks);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBooks;

  const { handleMarkRead, handleWishList } = useContext(BookContext);
// console.log(handleMarkRead, handleWishList, "Book-Context");


  

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-sm container mx-auto">
        <figure className=" flex-1">
          <img src={image} alt="Album" className="h-[500px] w-[800px]" />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title">{bookName}</h2>
          <h2 className="card-title">By:{author}</h2>
          <p>{category}</p>
          <p>review:{review}</p>
          <div className="flex gap-2">
            tag:
            {tags.map((tag, i) => {
              return (
                <div
                  key={i}
                  className="badge text-green-500 font-bold bg-green-100"
                >
                  {tag}
                </div>
              );
            })}
          </div>

          <div className="card-actions border-t flex flex-col">
            <div className="flex justify-between items-center gap-2 ">
              <span>Number of pages:</span>
              <span>{totalPages}</span>
            </div>
            <div className="flex justify-between items-center gap-2 ">
              <span>Publisher:</span>
              <span>{publisher}</span>
            </div>
            <div className="flex justify-between items-center gap-2 ">
              <span>publish time:</span>
              <span>{yearOfPublishing}</span>
            </div>

            <div className=" flex items-center gap-2">
              <button className="btn " onClick={ ()=>handleMarkRead(expectedBooks)}> Mark as Read</button>
              <button className="btn btn-primary" onClick={()=> handleWishList(expectedBooks)}>Add to WishList</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
