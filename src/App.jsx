import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './Components/HomeLayout'
import NewsLetter from './Pages/NewsLetter'
import About from './Pages/About'

const router = createBrowserRouter([
  {
    path : "/",
    element: <HomeLayout />,
    children: [
      {
        path: "newsletter",
        element: <NewsLetter />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
])

const App = () => {
  return (
     <RouterProvider router={router} />
  )
}

export default App
