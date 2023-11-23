import { useState } from "react"
import { Link } from "react-router-dom";
import { RiAccountCircleFill } from "react-icons/ri";


export default function AdminSidebarItem({ item, key },{defaultActive}) {
    const [open, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(defaultActive || 1);


    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item p-[10px] flex flex-col place-items-center  hover:bg-[#DAEBFF] rounded"}>
                    <Link to={item.path} className="sidebar-title flex flex-row justify-between w-full items-center hover:bg-[rgba(218, 235, 255, 0.79)] hover:rounded" onClick={() => setOpen(!open)} active={key === activeIndex}>
                        {item.icon}
                        <p className="font-semibold text-[#818485] font-[600] text-[20px] leading-[30px]">{item.name}</p>
                        <RiAccountCircleFill onClick={() => setOpen(!open)} className="toggle-btn" />
                    </Link>

                <div className="sidebar-content h-0 overflow-hidden">
                    <hr className=" -ml-0.5 h-0.5 w-80 bg-black-600" />
                    {
                        item.childrens.map((child) => (
                            <Link to={child.path}>
                                <div className=" cursor-pointer hover:text-[#DAEBFF] hover:bg-[rgba(218, 235, 255, 0.79)] hover:rounded">
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
            <Link to={item.path || "#"} className="sidebar-item plain  flex flex-row p-[10px] justify-between w-full  hover:bg-[#DAEBFF] rounded" active={key === activeIndex}>
                {item.icon}
                <p className="font-semibold self-center text-[#818485] font-[600] text-[20px] leading-[30px]">{item.name}</p>
                <p></p>


            </Link>


        )
    }
}