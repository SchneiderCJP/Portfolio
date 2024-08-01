import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'

// Routes the pages, so that the navigation can switch between pages in the website.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
