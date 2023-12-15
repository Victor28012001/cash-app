import {React, useState} from 'react'
import Navbar from './Navbar'
import AdminSidebar from './AdminSidebar'
import AdminSidebard from '../../Data/AdminSidebar.jsx';

const AdminLayout = ({ children }) => {

    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
      setDarkMode(prevDarkMode => !prevDarkMode);
    };

    const datas = AdminSidebard
  
    return (
        <>
            <div className="flex h-full">
                <AdminSidebar darkMode={darkMode} />
                <div className="relative w-full flex flex-col bg-blueGray-100">
                    <Navbar datas={datas} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                    <div className='mt-[6rem] h-full'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout
