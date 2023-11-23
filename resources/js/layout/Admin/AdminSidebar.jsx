import React from 'react'

import AdminSidebarItem from './AdminSidebarItem'
import AdminSidebard from '../../Data/AdminSidebar'


export default function AdminSidebar() {
  return (
    <div className="flex flex-col w-[20%] h-full justify-items-end items-center mt-[80px] font-black">
      <hr className=" -ml-0.5 h-0.5 w-80 bg-black-600 mb-[15px]" />
      <div className="sidebar flex flex-col space-y-2 h-5/8 w-[65%]">
        {AdminSidebard.map((item, index) => <AdminSidebarItem key={index} item={item} />)}
      </div>
    </div>
  )
}