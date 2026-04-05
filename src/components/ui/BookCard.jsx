import React from 'react'
import { FaRegStar } from 'react-icons/fa';

const BookCard = ({ book }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className="p-6 w-full">
          <img
            src={book.image}
            alt={book.bookName}
            className="rounded h-[520px] w-full object-cover "
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-2">
            {book.tags.map((tag, i) => {
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

          <h2 className="card-title text-2xl font-bold">{book.bookName}</h2>
          <p>{book.author}</p>
          <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4">
            <div className=" font-semibold ">{book.category}</div>
            <div className=" font-semibold  flex gap-1 items-center">
              {book.rating} <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard