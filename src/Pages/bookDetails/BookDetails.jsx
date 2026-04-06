import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const books = useLoaderData();
  // console.log(books);

  const { bookId: bookParamsID } = useParams();
  // console.log(id, "id");

  const expectedBooks = books.find((book) => book.bookParamsID == bookParamsID);
  // console.log(expectedBooks);

  const {
    bookId,
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
              <button className="btn ">Read</button>
              <button className="btn btn-primary">WishList</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
