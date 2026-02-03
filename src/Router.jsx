import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Outlet'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

const Router = () => {
  return (
    <>
        <RouterProvider router={createBrowserRouter([

            {
                path: "/",
                element: <Layout/>,
                children: [
                    {
                        path: "/",
                        element: <Home/>
                    },
                    {
                        path: "/Projects",
                        element: <Projects/>
                    },
                    {
                        path: "/Contact",
                        element: <Contact/>
                    }
                ]
                
            },
            
        ])} />
    </>
  )
}

export default Router