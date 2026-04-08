import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/home/Home";
import Error from "../Pages/error/Error";
import Books from "../Pages/books/Books"
import BookDetails from "../Pages/bookDetails/BookDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json"),
      },
    ],

    errorElement: <Error />,
  },
]);
