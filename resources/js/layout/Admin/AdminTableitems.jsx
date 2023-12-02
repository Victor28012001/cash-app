import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'


const TableApproval = ({ slice, records }) => {
    let conversations

    if (records.length > 0) {
        conversations = records
    } else {
        conversations = slice
    }


    return (
        conversations.map((item) => (<><tr className=" border-b-[1px]" key={item.id}>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.email}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.emailStatus}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]"><img src={item.avatar} alt="" /></td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.userStatus}</td>
            <td className="flex flex-col text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] items-end">{item.time}<span className='self-end text-xs'>{item.date}</span></td>
            <td className="flex flex-col text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] items-end">{item.time}<span className='self-end text-xs'>{item.date}</span>
                <div className="flex">
                    <Link to='/'>
                        < button type="button" className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-900 text-white shadow-md shadow-green-900/10 hover:shadow-lg hover:shadow-green-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z">
                                </path>
                            </svg>
                            EDIT
                        </button>
                    </Link>
                    <button type="button" className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-900 text-white shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                            </path>
                        </svg>
                        DELETE</button>
                </div>
            </td>
        </tr >

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}

const TableInvestments = ({ slice, records }) => {

    let ContactList

    if (records.length > 0) {
        ContactList = records
    } else {
        ContactList = slice
    }

    const deleteUser = (e, id) => {
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = 'Deleting'
        console.log(id);

        axios.delete(`/api/investments/${id}`)
            .then(res => {
                if (res.data.status === 200) {
                    swal("Success!", res.data.message, "success");
                    thisClicked.closest('tr').remove()
                }
                else if (res.data.status === 500) {
                    swal("Success!", res.data.message, "success");
                    thisClicked.innerText = 'Delete'
                }
            })
    }


    return (
        ContactList.map((item) => (
            <><tr className=" border-b-[1px]" key={item.id}>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.id}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.username}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.packageName}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.invested}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.increase}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.ROI}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.status}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.investId}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">
                    <div className="flex">
                        <Link to={`/EditInvestment/${item.id}`}>
                            < button type="button" className='mx-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1 px-2 rounded-lg bg-green-900 text-white shadow-md shadow-green-900/10 hover:shadow-lg hover:shadow-green-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                    className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z">
                                    </path>
                                </svg>
                                EDIT
                            </button>
                        </Link>
                        <button type="button" onClick={(e) => deleteUser(e, item.id)} className='mx-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1 px-2 rounded-lg bg-red-900 text-white shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                                </path>
                            </svg>
                            DELETE
                        </button>
                    </div>
                </td>
            </tr>

                {/* <hr className=" -ml-2 h-[8px] w-[80%] bg-black-500 self-center" /> */}
            </>)
        )
    )
}

const TableMessages = ({ slice, records }) => {

    let Contacts

    if (records.length > 0) {
        Contacts = records
    } else {
        Contacts = slice
    }


    return (
        Contacts.map((item) => (<><tr className=" border-b-[1px]" key={item.id}>
            <td><img src={item.email} alt="" /></td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.message}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.title}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]"><img src={item.image} alt="" /></td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.status}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.date}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.date}
                <div className="flex">
                    <Link to='/'>
                        < button type="button" className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-900 text-white shadow-md shadow-green-900/10 hover:shadow-lg hover:shadow-green-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z">
                                </path>
                            </svg>
                            EDIT
                        </button>
                    </Link>
                    <button type="button" className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-900 text-white shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                            </path>
                        </svg>
                        DELETE</button>
                </div>
            </td>
        </tr >

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}
const TablePackages = ({ slice, records }) => {

    let ContactList

    if (records.length > 0) {
        ContactList = records
    } else {
        ContactList = slice
    }

    
    const deleteUser = (e, id) => {
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = 'Deleting'
        console.log(id);

        axios.delete(`/api/investments/${id}`)
            .then(res => {
                if (res.data.status === 200) {
                    swal("Success!", res.data.message, "success");
                    thisClicked.closest('tr').remove()
                }
                else if (res.data.status === 500) {
                    swal("Success!", res.data.message, "success");
                    thisClicked.innerText = 'Delete'
                }
            })
    }




    return (
        ContactList.map((item) => (<><tr className=" border-b-[1px]" key={item.id}>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.id}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.name}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.increase}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.bonus}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.status}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.MIN}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.MAX}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.duration}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">
                <div className="flex">
                    <Link to={`/EditPackage/${item.id}`}>
                        < button type="button" className='mx-3 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1 px-2 rounded-lg bg-green-900 text-white shadow-md shadow-green-900/10 hover:shadow-lg hover:shadow-green-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z">
                                </path>
                            </svg>
                            EDIT
                        </button>
                    </Link>
                    <button type="button" onClick={(e) => deleteUser(e, item.id)} className='mx-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1 px-2 rounded-lg bg-red-900 text-white shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                            </path>
                        </svg>
                        DELETE
                    </button>
                </div>
            </td>
        </tr >

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}

const TableAllUsers = ({ slice, records }) => {

    let ContactList

    if (records.length > 0) {
        ContactList = records
    } else {
        ContactList = slice
    }


    return (
        ContactList.map((item) => (<><tr className=" border-b-[1px]" key={item.id}>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.username}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.refCode}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.planProfit}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.online}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.verified}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.accBalance}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.regDate}</td>
        </tr >

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}


const TableGateway = ({ slice, records }) => {

    let ContactList

    if (records.length > 0) {
        ContactList = records
    } else {
        ContactList = slice
    }


    return (
        ContactList.map((item) => (<><tr className=" border-b-[1px]" key={item.id}>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.paymentMethod}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.details}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.email}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]"><img src={item.icon} alt="" /></td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]"><img src={item.icon} alt="" />
                <div className="flex">
                    <Link to='/'>
                        < button type="button" className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-900 text-white shadow-md shadow-green-900/10 hover:shadow-lg hover:shadow-green-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z">
                                </path>
                            </svg>
                            EDIT
                        </button>
                    </Link>
                    <button type="button" className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-900 text-white shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                            </path>
                        </svg>
                        DELETE</button>
                </div>
            </td>
        </tr >

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}



const TableUsers = ({ slice, records }) => {

    let ContactList

    if (records.length > 0) {
        ContactList = records
    } else {
        ContactList = slice
    }

    const deleteUser = (e, id) => {
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = 'Deleting'
        console.log(id);

        axios.delete(`/api/users/${id}`)
            .then(res => {
                if (res.data.status === 200) {
                    swal("Success!", res.data.message, "success");
                    thisClicked.closest('tr').remove()
                }
                else if (res.data.status === 500) {
                    swal("Success!", res.data.message, "success");
                    thisClicked.innerText = 'Delete'
                }
            })
    }

    let date


    return (
        ContactList.map((item) => (
            <>
                <div className="hidden">{date = item.regDate.split('.')}</div>
                <tr className=" border-b-[1px]" key={item.id}>
                    <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.id}</td>
                    <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.username}</td>
                    <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.email}</td>
                    <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.refbonus}</td>
                    <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.balance}</td>
                    <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.regDate.split('.') ? date[0] : date[1]}</td>
                    <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">
                        <div className="flex">
                            <Link to={`/EditUser/${item.id}`}>
                                < button type="button" className='mx-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1 px-2 rounded-lg bg-green-900 text-white shadow-md shadow-green-900/10 hover:shadow-lg hover:shadow-green-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z">
                                        </path>
                                    </svg>
                                    EDIT
                                </button>
                            </Link>
                            <button type="button" onClick={(e) => deleteUser(e, item.id)} className='mx-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-1 px-2 rounded-lg bg-red-900 text-white shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                    className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                                    </path>
                                </svg>
                                DELETE</button>
                        </div>
                    </td>
                </tr >

                {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
            </>)
        )
    )
}



const TabledepositOrder = ({ slice, records }) => {

    let ContactList

    if (records.length > 0) {
        ContactList = records
    } else {
        ContactList = slice
    }


    return (
        ContactList.map((item) => (<><tr className=" border-b-[1px]" key={item.id}>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.email}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.amount}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.mode}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.status}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.referenceId}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.referrerPay}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.date}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.date}
                <div className="flex">
                    <Link to='/'>
                        < button type="button" className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-900 text-white shadow-md shadow-green-900/10 hover:shadow-lg hover:shadow-green-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z">
                                </path>
                            </svg>
                            EDIT
                        </button>
                    </Link>
                    <button type="button" className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-900 text-white shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                            </path>
                        </svg>
                        DELETE</button>
                </div>
            </td>
        </tr >

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}



const TablewithdrawalRequest = ({ slice, records }) => {

    let ContactList

    if (records.length > 0) {
        ContactList = records
    } else {
        ContactList = slice
    }


    return (
        ContactList.map((item) => (<><tr className=" border-b-[1px]" key={item.id}>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.email}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.walletAddressy}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.amount}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.mode}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.status}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.referenceID}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.date}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.date}
                <div className="flex">
                    <Link to='/'>
                        < button type="button" className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-900 text-white shadow-md shadow-green-900/10 hover:shadow-lg hover:shadow-green-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z">
                                </path>
                            </svg>
                            EDIT
                        </button>
                    </Link>
                    <button type="button" className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-900 text-white shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                            class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                            </path>
                        </svg>
                        DELETE</button>
                </div>
            </td>
        </tr >

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}



export { TablePackages, TableApproval, TableInvestments, TableMessages, TableUsers, TableGateway, TableAllUsers, TabledepositOrder, TablewithdrawalRequest }
