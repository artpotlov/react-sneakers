import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import FavoritePage from "./pages/Favorite";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: 'favorite',
      element: <FavoritePage/>,
    },
  ],
}]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
