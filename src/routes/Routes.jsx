import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/home/Home";
import Error from "../Pages/error/Error";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
      {
        path: '/books',
        element:'/books'
      }
        ],
    
    errorElement : <Error/>
  },
  
]);
