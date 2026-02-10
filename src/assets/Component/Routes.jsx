import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import AddCar from "../pages/AddCar";
import MyListings from "../pages/MyListings";
import MyBookings from "../pages/MyBookings";
import BrowseCars from "../pages/BrowseCars";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../auth/PrivateRoute";
import CarDetails from "../pages/CarDetails";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />, // ✅ 404
    children: [
      { index: true, element: <Home /> },

      { path: "browseCars", element: <BrowseCars /> },

      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      // ✅ Private routes
      {
        path: "addCar",
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      {
        path: "myListings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },
      {
        path: "myBooking",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "cars/:id",
        element: (
          <PrivateRoute>
            <CarDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
