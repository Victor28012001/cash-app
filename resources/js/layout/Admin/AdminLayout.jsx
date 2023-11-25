import React from 'react'
import Navbar from './Navbar'
import AdminSidebar from './AdminSidebar'

const AdminLayout = ({ children }) => {

    return (
        <>
            <div className="flex h-full">
                <AdminSidebar />
                <div className="relative w-full flex flex-col bg-blueGray-100">
                    <Navbar />
                    <div className='mt-[6rem] h-full'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout
