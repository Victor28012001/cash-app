import { BsArrowBarRight, BsArrowBarLeft, BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import SidebarItem from "./SidebarItem"
import UserSidebar from "../../Data/UserSidebar"

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)

  return (
    <aside className="h-screen">
      <nav className="relative h-full flex flex-col bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"
              }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <BsArrowBarLeft size={20} /> : <BsArrowBarRight size={20} />}
          </button>
        </div>


        <ul className="sidebar flex flex-col space-y-2 h-[84%] w-[85%] self-center justify-around">
          {UserSidebar.map((item, index) => <SidebarItem key={index} myKey={index} item={item} expanded={expanded} />)}
        </ul>

        <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] left-0 w-[100%] flex p-3 absolute bottom-0">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-full bg-[#000]"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <BsThreeDotsVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

