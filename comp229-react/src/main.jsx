import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Page } from "./pages/components/Page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World from Line 9!</div>
  },
  {
    path: "/home",
    element: <Page>Home Page</Page>
  },
  {
    path: "/about-me",
    element: <Page>About Me</Page>
  },
  {
    path: "/projects",
    element: <Page>Projects</Page>
  },
  {
    path: "/legacy",
    element: <App></App>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
