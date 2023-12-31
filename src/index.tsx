import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css"
import { router } from "./Router/Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

    
    