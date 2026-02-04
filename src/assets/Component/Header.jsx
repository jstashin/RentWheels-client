import React from 'react';
import { FaCar } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
import logoImg from '/logo.jpg'

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-fuchsia-600 font-bold" : ""}
        > Home</NavLink></li>
      <li>
        <NavLink 
          to="/addCar"
          className={({ isActive }) => isActive ? "text-fuchsia-600 font-bold" : ""}
        >
          Add Car
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/myListings"
          className={({ isActive }) => isActive ? "text-fuchsia-600 font-bold" : ""}
        >
          My listings
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/myBooking"
          className={({ isActive }) => isActive ? "text-fuchsia-600 font-bold" : ""}
        >
          My Bookings
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/browseCars"
          className={({ isActive }) => isActive ? "text-fuchsia-600 font-bold" : ""}
        >
          Browse Cars
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
<div className="navbar-start">
  
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className='text-2xl text-fuchsia-900 font-bold'><img src={logoImg} className='w-20'></img></span>
            <h1 className="text-2xl bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-transparent font-bold">
  RentWheels
</h1>

          </Link>
        </div>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Header;
