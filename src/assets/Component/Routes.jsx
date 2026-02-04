import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import AddCar from '../pages/AddCar';
import MyListings from '../pages/MyListings';
import MyBookings from '../pages/MyBookings';
import BrowseCars from '../pages/BrowseCars';


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
         path:"/addCar",
        Component:AddCar,
      },
       {
         path:"/myListings",
        Component:MyListings,
      },
       {
         path:"/myBooking",
        Component:MyBookings,
      },
       {
         path:"/browseCars",
        Component:BrowseCars,
      },

    ]
  },
]);

