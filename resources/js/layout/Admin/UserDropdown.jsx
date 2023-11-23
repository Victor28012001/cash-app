import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import profile from '../../Assets/team-1-800x800.jpg'

const UserDropdown = () => {

    const {authData} = useContext(AuthContext);


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
            <Link
                className="text-blueGray-500 block"
                to=''
                ref={btnDropdownRef}
                onClick={e => {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
            >
                <div className="items-center flex gap-[4px]">
                    <span className="w-8 h-8 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                        <img
                            alt="..."
                            className="w-full rounded-full align-middle border-none shadow-lg"
                            src={profile}
                        />
                    </span>
                    <span className=''><p className="nav-link text-sm" to="">Hi, Victor</p></span>
                </div>
            </Link>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") +
                    "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                }
                style={{ minWidth: "12rem" }}
            >
                <Link
                    to="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                    onClick={e => e.preventDefault()}
                >
                    Profile
                </Link>
                <Link
                    to="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                    onClick={e => e.preventDefault()}
                >
                    Settings
                </Link>
                <div className="h-0 my-2 border border-solid border-blueGray-100" />
                <Link
                    to="#pablo"
                    className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                    onClick={e => e.preventDefault()}
                >
                    Logout
                </Link>
            </div>
        </>
    );
};

export default UserDropdown;
