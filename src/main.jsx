import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Course from './Course'
import About from './About'
import Categori from './Categori'

const router= createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: async() => fetch('public/course.json')
      }, 
      {
        path: '/courses',
        element: <Course/>,
        loader: async() => fetch('public/course.json')
      },
      {
        path: '/categories',
        element: <Categori />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
