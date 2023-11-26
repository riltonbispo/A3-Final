import React from 'react';
import ReactDOM from "react-dom/client";
import "./styles/variables.css";
import "./styles/global-styles.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './routes/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>root</div>
  },
  {
    path: "signup",
    element: <SignUp/>
  },
  {
    path: "/home",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
