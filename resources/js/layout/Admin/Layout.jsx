import {React, useState} from 'react'

import Navbar from "./Navbar.jsx";
import Title from './Title.jsx';
import Sidebar from "./Sidebar.jsx";
import UserSidebar from '../../Data/UserSidebar.jsx';


const Layout = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
      setDarkMode(prevDarkMode => !prevDarkMode);
    };
  
    const datas = UserSidebar

    return (
        <>
            <div className="flex">
                <Sidebar darkMode={darkMode} />
                <div className="relative w-full flex flex-col bg-blueGray-100">
                    <div className={`shadow-sm ${darkMode?'bg-white color-black':'bg-[#1e222d] color-white'}`}>
                        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                        <Title datas={datas} darkMode={darkMode} />
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
