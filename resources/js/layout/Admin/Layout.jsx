import React from 'react'

import Navbar from "./Navbar.jsx";
import Title from './Title.jsx';
import Sidebar from "./Sidebar.jsx";
import Footer from './Footer.jsx';
import UserSidebar from '../../Data/UserSidebar.jsx';


const Layout = ({ children }) => {

    const datas = UserSidebar
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="relative w-full flex flex-col bg-blueGray-100">
                    <div className="shadow-sm">
                        <Navbar />
                        <Title datas={datas} />
                    </div>
                    {/* Header */}
                    <div className='mt-[12rem] h-[100%]'>
                        {children}
                    </div>
                    {/* <Footer/> */}
                </div>
            </div>
        </>
    )
}

export default Layout
