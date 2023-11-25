import { useState } from "react"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdExpandCircleDown } from "react-icons/md";


export default function AdminSidebarItem({ item, key },{defaultActive}) {
    //assigning location variable
    const location = useLocation();
  
    //destructuring pathname from location
    const { pathname } = location;
  
    //Javascript split method to get the name of the path in array
    // const splitLocation = pathname.split("/");
    const active = pathname == item.path ? `bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800` : `hover:bg-indigo-50 text-gray-600`
    const [open, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(defaultActive || 1);
    let iconStyles = { color: "rgba(25,0,250,0.6)", fontSize: "1.5em" };

    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item flex flex-col place-items-center rounded"}>
                    <Link to={item.path} className={`sidebar-title p-[10px] flex flex-row justify-between w-full items-center hover:bg-[rgba(218, 235, 255, 0.79)] hover:rounded ${active}`} onClick={() => setOpen(!open)}>
                        {item.icon}
                        <p className="font-semibold text-[#818485] font-[600] text-[20px] leading-[30px]">{item.name}</p>
                        <MdExpandCircleDown onClick={() => setOpen(!open)} className="toggle-btn" style={iconStyles} />
                    </Link>

                <div className="sidebar-content h-0 overflow-hidden">
                    <hr className=" -ml-0.5 h-0.5 w-80 bg-black-600" />
                    {
                        item.childrens.map((child) => (
                            <Link to={child.path}>
                                <div className={`cursor-pointer hover:text-[#DAEBFF] hover:bg-[rgba(218, 235, 255, 0.79)] hover:rounded ${active}`}>
                                    <p className="font-semibold text-[#818485] font-[500] text-[14px] leading-[21px] mt-[15px] self-center">{child.name}</p>
                                    <hr className=" -ml-0.5 h-0.5 w-80 bg-black-600" />
                                </div>
                            </Link>
                        ))
                    }


                </div>
            </div>
        )
    } else {
        return (
            <Link to={item.path || "#"} className={`sidebar-item plain  flex flex-row p-[10px] justify-between w-full  hover:bg-[#DAEBFF] rounded ${active}`}>
                {item.icon}
                <p className="font-semibold self-center text-[#818485] font-[600] text-[20px] leading-[30px]">{item.name}</p>
                <p></p>


            </Link>


        )
    }
}