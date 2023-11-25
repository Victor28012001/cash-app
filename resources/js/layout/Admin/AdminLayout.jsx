import React from 'react'
import Navbar from './Navbar'
// import Navbar from "./Navbar.jsx";
import Title from './Title.jsx';
import AdminSidebar from './AdminSidebar'
import AdminSidebard from '../../Data/AdminSidebar';

const AdminLayout = ({ children }) => {

    const datas = AdminSidebard

    return (
        <>
            <div className="flex h-[100vh] overflow-y-hidden">
                <AdminSidebar />
                <div className="relative w-full flex flex-col bg-blueGray-100">
                    <div className="shadow-sm">
                        <Navbar />
                        <Title datas={datas} />
                    </div>
                    <div className='bg-[#f0f0f0] mt-[12rem] h-[100%] overflow-y-scroll'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout
