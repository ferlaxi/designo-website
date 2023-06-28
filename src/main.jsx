import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/Home';
import WebDesign from './components/pages/WebDesign';
import AppDesign from './components/pages/AppDesign';
import GraphicDesign from './components/pages/GraphicDesign';
import OurCompany from './components/pages/OurCompany';
import Location from './components/pages/Location';
import Contact from './components/pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/webdesign',
    element: <WebDesign />
  },
  {
    path: '/appdesign',
    element: <AppDesign />
  },
  {
    path: '/graphicdesign',
    element: <GraphicDesign />
  },
  {
    path: '/ourcompany',
    element: <OurCompany />
  },{
    path: '/location',
    element: <Location />
  },
  {
    path: '/contact',
    element: <Contact />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
