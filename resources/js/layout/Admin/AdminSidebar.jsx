import React from 'react'

import AdminSidebarItem from './AdminSidebarItem'
import AdminSidebard from '../../Data/AdminSidebar'


export default function AdminSidebar() {
  return (
    <div className="flex flex-col w-[20%] h-full justify-between items-center font-black py-12">
      <img
        src="https://img.logoipsum.com/243.svg"
        className={`overflow-hidden transition-all w-[70%]`}
        alt="logo"
      />
      <div className="sidebar flex flex-col space-y-2 h-5/8 w-[85%]">
        <hr className=" -ml-0.5 h-0.5 w-[80%] bg-black-600 mb-[15px]" />
        {AdminSidebard.map((item, index) => <AdminSidebarItem key={index} item={item} />)}
      </div>
    </div>
  )
}