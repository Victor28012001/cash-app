import { React } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";


function SidebarItem({ item, index, expanded }) {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  // const splitLocation = pathname.split("/");
  const active = pathname == item.path ? `bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800` : `hover:bg-indigo-50 text-gray-600`


  return (
    <Link

      to={item.path}

      key={index}
      className={`
          relative flex items-center py-2 px-3 my-1
          font-medium rounded-md cursor-pointer ml-[6px]
          transition-colors group
          ${active}
      `}
    >
      {item.icon}
      <span
        className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 hidden"
          }`}
      >
        {item.name}
      </span>
      {item.alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"
            }`}
        />
      )}

      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-[999]
        `}
        >
          {item.name}
        </div>
      )}
    </Link>
  )
}

export default SidebarItem
