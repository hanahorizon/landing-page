import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Projects",
        element: <Projects />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter;