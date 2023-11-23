import React from 'react';
import {BsSearch} from 'react-icons/bs'

import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
    return (
        <>
          {/* Navbar */}
          <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
            <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">

              <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                <div className="relative flex w-full flex-wrap items-stretch">
                  <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                    <BsSearch />
                  </span>
                  <input type="text" placeholder="Search here..." className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"/>
                </div>
              </form>
              {/* User */}
              
            </div>
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                <NotificationDropdown />
                <UserDropdown />
              </ul>
          </nav>
          {/* End Navbar */}
        </>
      )
}

export default Navbar
