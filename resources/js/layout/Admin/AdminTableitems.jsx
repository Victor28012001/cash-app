import React from 'react'
import items from '../../DummyData/Admin/AdminData'
import { useState, useEffect } from 'react';


const TableApproval = () => {
    let conversations = items[0].approval


    const [rows, setRows] = useState([])
    const [rowPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalRows, setTotalRows] = useState(0)

    setTotalRows(conversations.length)
    console.log(conversations);

    setRows(conversations)
    const lastIndexPage = rowPerPage + currentPage
    const firstIndexPage = lastIndexPage - rowPerPage
    console.log(firstIndexPage);
    const currentRows = conversations.slice(firstIndexPage, lastIndexPage)
    console.log(currentRows);

    const paginate = (pageNum) => setCurrentPage(pageNum)

    const prevPage = ()=> setCurrentPage(currentPage - 1)
    const nextPage = ()=> setCurrentPage(currentPage + 1)

    // const showPagination = () => {
    //     return <Row
    //     rowPerPage={rowPerPage}
    //     totalRows={totalRows}
    //     currentPage={currentPage}
    //     paginate={paginate}
    //     nextPage={nextPage}
    //     prevPage={prevPage}
    //     />
    // }


    return (
        rows.map((item) => (<><tr className=" border-b-[1px]">
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.email}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.emailStatus}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]"><img src={item.avatar} alt="" /></td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.userStatus}</td>
            <td className="flex flex-col text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] items-end">{item.time}<span className='self-end text-xs'>{item.date}</span></td>
        </tr>

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}

const TableInvestments = () => {

    let Agents = items[1].investments

    return (
        Agents.map((item) => (
            <><tr className=" border-b-[1px]">
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.username}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.package}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.invested}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.increase}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.ROI}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.status}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.investID}</td>
            </tr>

                {/* <hr className=" -ml-2 h-[8px] w-[80%] bg-black-500 self-center" /> */}
            </>)
        )
    )
}

const TableMessages = () => {

    let Contacts = items[2].messages

    return (
        Contacts.map((item) => (<><tr className=" border-b-[1px]">
            <td><img src={item.email} alt="" /></td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.message}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.title}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]"><img src={item.image} alt="" /></td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.status}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.date}</td>
        </tr>

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}
const TablePackages = () => {

    let ContactList = items[3].package

    return (
        ContactList.map((item) => (<><tr className=" border-b-[1px]">
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.name}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.dailyIncrease}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.bonus}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.status}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.MIN}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.MAX}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.duration}</td>
        </tr>

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}

const TableAllUsers = () => {

    let ContactList = items[4].allUsers

    return (
        ContactList.map((item) => (<><tr className=" border-b-[1px]">
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.username}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.refCode}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.planProfit}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.online}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.verified}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.accBalance}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.regDate}</td>
        </tr>

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}


const TableGateway = () => {

    let ContactList = items[5].paymentGateway

    return (
        ContactList.map((item) => (<><tr className=" border-b-[1px]">
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.paymentMethod}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.details}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.email}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]"><img src={item.icon} alt="" /></td>
        </tr>

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}



const TableUsers = () => {

    let ContactList = items[6].users

    return (
        ContactList.map((item) => (<><tr className=" border-b-[1px]">
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.username}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.email}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.refCode}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.balance}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.regDate}</td>
        </tr>

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}



const TabledepositOrder = () => {

    let ContactList = items[7].depositOrder

    return (
        ContactList.map((item) => (<><tr className=" border-b-[1px]">
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.email}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.amount}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.mode}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.status}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.referenceId}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.referrerPay}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.date}</td>
        </tr>

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}



const TablewithdrawalRequest = () => {

    let ContactList = items[8].withdrawalRequest

    return (
        ContactList.map((item) => (<><tr className=" border-b-[1px]">
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.email}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.walletAddressy}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.amount}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.mode}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.status}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.referenceID}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px] border-l-[1px]">{item.date}</td>
        </tr>

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}



export { TablePackages, TableApproval, TableInvestments, TableMessages, TableUsers, TableGateway, TableAllUsers, TabledepositOrder, TablewithdrawalRequest }
