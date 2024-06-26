import React from 'react';
import { createPopper } from "@popperjs/core";
import {MdCircleNotifications} from 'react-icons/md'

// import AuthContext from "../context/authContext";
// import {useAuth} from "../hooks/useAuth";


const NotificationDropdown = (darkMode) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-end"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    return (
        <>
            <a
                className="text-blueGray-500 block py-1 px-3"
                href="#pablo"
                ref={btnDropdownRef}
                onClick={e => {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <MdCircleNotifications size={30} className={` ${darkMode?'color-white':'color-black'}`}/>
            </a>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                }
                style={{ minWidth: "12rem" }}
            >
                <a
                    href="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                    onClick={e => e.preventDefault()}
                >
                    Action
                </a>
                <a
                    href="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                    onClick={e => e.preventDefault()}
                >
                    Another action
                </a>
                <a
                    href="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                    onClick={e => e.preventDefault()}
                >
                    Something else here
                </a>
                <div className="h-0 my-2 border border-solid border-blueGray-100" />
                <a
                    href="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                    onClick={e => e.preventDefault()}
                >
                    Seprated link
                </a>
            </div>
        </>
    );
}

export default NotificationDropdown
