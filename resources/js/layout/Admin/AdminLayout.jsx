import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AdminSidebar from './AdminSidebar'
import AdminSidebard from '../../Data/AdminSidebar'

const AdminLayout = ({ children }) => {

    const datas = AdminSidebard
    return (
        <>
            <div className="flex">
                <AdminSidebar />
                <div className="relative w-full flex flex-col bg-blueGray-100">
                    <Navbar />
                    <div className='mt-[6rem]'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout
