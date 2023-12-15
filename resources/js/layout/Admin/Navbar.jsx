import { React, useState } from 'react';
import { useLocation } from "react-router-dom";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { BsSearch } from 'react-icons/bs'

import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";

const Navbar = (datas, darkMode, toggleDarkMode) => {

  const titleData = datas.datas


  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //   let textCopy = navigator.clipboard.writeText(text)

  let title

  titleData.forEach((item, index) => {
    // title = pathname == item.path ? item.name : `Dashboard`
    if (pathname == item.path) {
      title = item.name
    }
  })

  return (
    <>
      {/* Navbar */}
      <nav className={`absolute top-0 left-0 w-full z-10 ${darkMode ? 'bg-transparent color-black' : 'bg-[#1e222d] color-white'}  md:flex-row md:flex-nowrap md:justify-start flex items-center py-4`}>
        <div className="w-[100%] mx-[2%] items-center flex justify-between md:flex-nowrap flex-wrap md:px-5">
          <div>
            <h1 className="font-black">{title}</h1>
          </div>

          <div className='w-[70%] flex items-center'>
            <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
              <div className="relative flex w-full flex-wrap items-stretch">
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  <BsSearch />
                </span>
                <input type="text" placeholder="Search here..." className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10" />
              </div>
            </form>
            {/* User */}

            {darkMode ? <FaToggleOn onClick={toggleDarkMode} size={30} color='rgba(50, 0, 250, 0.6)' /> : <FaToggleOff onClick={toggleDarkMode} size={30} color='rgba(50, 0, 255, 1)' />}
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
              <NotificationDropdown darkMode={darkMode} />
              <UserDropdown />
            </ul>

          </div>

        </div>
      </nav>
      {/* End Navbar */}
    </>
  )
}

export default Navbar
