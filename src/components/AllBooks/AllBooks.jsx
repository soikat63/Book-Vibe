import React, { use } from "react";
import BookCard from "../ui/BookCard";

const booksPromise = fetch("/public/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);

  return (
    <div className=" my-12 container mx-auto">
      <h2 className=" font-bold text-3xl text-center ">Books</h2>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book , i) => {
          return (
              <BookCard key={i} book={ book} />
          );
        })}
      </div>
    </div>
  );
};

export default AllBooks;
