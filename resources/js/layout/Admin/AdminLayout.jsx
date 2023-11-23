import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AdminSidebar from './AdminSidebar'
import AdminSidebard from '../../Data/AdminSidebar'
import Title from './Title'

const AdminLayout = ({ children }) => {

    const datas = AdminSidebard
    return (
        <>
            <div className="flex">
                <AdminSidebar />
                <div className="relative w-full flex flex-col bg-blueGray-100">
                    <Navbar />
                    <Title datas={datas} />
                    <div className='mt-[12rem]'>
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default AdminLayout
