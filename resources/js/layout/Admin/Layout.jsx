import {React, useState} from 'react'

import Navbar from "./Navbar.jsx";
import Title from './Title.jsx';
import Sidebar from "./Sidebar.jsx";
import UserSidebar from '../../Data/UserSidebar.jsx';


const Layout = ({ children }) => {

    const [darkMode, setDarkMode] = useState(true)

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
                        <Navbar datas={datas} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                        <Title darkMode={darkMode} />
                    </div>
                    {/* Header */}
                    <div className='mt-[6rem] h-[100%] py-3'>
                        {children}
                    </div>
                    {/* <Footer/> */}
                </div>
            </div>
        </>
    )
}

export default Layout
