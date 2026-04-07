import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes/Routes.jsx";

import BookContextProvider from "./components/context/BookContextProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookContextProvider>
      <RouterProvider router={router} />
    </BookContextProvider>
  </StrictMode>,
);
