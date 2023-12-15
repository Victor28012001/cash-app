import React from "react";
import { useState, useRef } from 'react';
// import { useLocation } from "react-router-dom";
import { FcInspection } from "react-icons/fc";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import profile from '../../Assets/team-1-800x800.jpg'

const UserDropdown = () => {

    const { authData } = useContext(AuthContext);



    const [copySuccess, setCopySuccess] = useState('');
    const [text, setText] = useState('your referral link here');
    let timeoutID = null;


    async function copyToClipboard() {
        try {
            if (navigator?.clipboard?.writeText) {
                await navigator.clipboard.writeText(text);
                setCopySuccess('Copied!');
                timeoutID = setTimeout(() => {
                    setCopySuccess('');
                }, 1000);
            }
        } catch (err) {
            console.error(err);
        }
    }


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
                <div className='refer-code flex items-center'>
                    <input type="text" name="refer-code" id="refer-code" value={text} className='text-blueGray-300 pl-2 w-[250px] border-[1px] border-[#f0f0f0] border-solid h-[75%] rounded-tl-[4px] rounded-bl-[4px] outline-none focus:outline-none focus:ring' readOnly onChange={e => setText(e.target.value)} />
                    {
                        /* Logical shortcut for only displaying the 
                           button if the copy command exists */
                        navigator?.clipboard?.writeText &&
                        <div className='relative'>
                            <button className="flex items-center text-sm bg-[#000] text-[#fff] h-[35px] p-[4px] rounded-tr-[4px] rounded-br-[4px]" onClick={copyToClipboard}><FcInspection />copy</button>
                            <div className="absolute text-[#0fffdf] ">{copySuccess}</div>
                        </div>
                    }
                </div>
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
