import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllLists } from '../src/pages/AllLists/AllLists'
import { ErrorPage } from './errorPage'
import { AddOrEditVideogame } from './pages/AddVideogame/AddVideogame'
import { SeriesList } from './pages/SeriesList/SeriesList'

const router = createBrowserRouter([
  { path: "/", element: <App/>, errorElement: <ErrorPage /> },
  { path: "/listVideogames", element: <AllLists /> },
  { path: '/addOrEditVideogame', element: <AddOrEditVideogame/> },
  { path: '/listSeries', element: <SeriesList/>}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);