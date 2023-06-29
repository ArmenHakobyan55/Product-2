import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import { Home, About, Contact, Products, Product} from "../Pages"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }, 
  {
    path: "Home",
    element: <Home/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
  {
    path: "Products",
    element: <Products/>,
  },
  {
    path: "Products/:id",
    element: <Product/>,
  },
]);
