import React from 'react';
import ReactDOM from "react-dom/client";
import "./styles/variables.css";
import "./styles/global-styles.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './routes/SignUp';
import Login from './routes/Login';
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "signup",
    element: <SignUp />
  },
  {
    path: "/home",
    element: <Home />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
