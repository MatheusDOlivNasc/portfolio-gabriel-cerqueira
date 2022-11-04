import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import "./style.scss";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Home } from './pages/Home';
import { Item } from './pages/Item';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { App } from './App';

const router = createBrowserRouter([
  {path: "/", element: <App />, children: [
    {path: "/", element: <Home />},
    {path: "about", element: <About />},
    {path: "contact", element: <Contact />},
    {path: "i/:id", element: <Item />},  
    {path: "*", element: <NotFound />},
  ]}
], {
  basename: '/init'
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
