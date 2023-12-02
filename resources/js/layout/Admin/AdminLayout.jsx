import {React, useState} from 'react'
import Navbar from './Navbar'
import AdminSidebar from './AdminSidebar'

const AdminLayout = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
      setDarkMode(prevDarkMode => !prevDarkMode);
    };
  
    return (
        <>
            <div className="flex h-full">
                <AdminSidebar darkMode={darkMode} />
                <div className="relative w-full flex flex-col bg-blueGray-100">
                    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                    <div className='mt-[6rem] h-full'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout
