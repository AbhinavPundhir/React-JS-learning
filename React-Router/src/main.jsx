import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/AboutUs/About.jsx'

// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout/>,
//       children: [ //for the outlet present in Layout.jsx
//         {
//           path: '',
//           element: <Home />
//         },
//         {
//           path: 'about',
//           element: <About/>
//         }
//       ]
//     }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
