import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Academics,
  Admissions,
  ContactUs,
  Faculty,
  Gallery,
  Home,
  Students,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/academics",
        element: <Academics />,
      },
      {
        path: "/admission",
        element: <Admissions />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/faculty/:id",
        element: <Faculty />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/students",
        element: <Students />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
