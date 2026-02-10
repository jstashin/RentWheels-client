import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import AddCar from '../pages/AddCar';
import MyListings from '../pages/MyListings';
import MyBookings from '../pages/MyBookings';
import BrowseCars from '../pages/BrowseCars';
import PrivateRoute from "../auth/PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index:true,
        path:"/",
        Component:Home,
      },
      {
  path: "/addCar",
  element: (
    <PrivateRoute>
      <AddCar />
    </PrivateRoute>
  ),
},
{
  path: "/myListings",
  element: (
    <PrivateRoute>
      <MyListings />
    </PrivateRoute>
  ),
},
{
  path: "/myBookings",
  element: (
    <PrivateRoute>
      <MyBookings />
    </PrivateRoute>
  ),
},

       {
         path:"/browseCars",
        Component:BrowseCars,
      },

    ]
  },
]);

