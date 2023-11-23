import React from 'react'
// import items from '../data/tables.json'
import items from '../../DummyData/User/UserData.json'
import { useState } from 'react'


    const TablePackages = () => {
        const [rows, setRows] = useState([])
        let conversations = items[2].transactions
        return (
            conversations.map((item) => (<><tr className=" border-b-[1px]">
                <td><img src={item.email} alt="" /></td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.amount}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.mode}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.status}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.tranxId}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.date}</td>
            </tr>

                {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
            </>)
            )
        )
        // return console.log(conversations)
    }

    const TableMessages = () => {

        let Agents = items[1].TableMessages

        return (
            Agents.map((item) => (
            <><tr className=" border-b-[1px]">
                {/* <td className=""><img src={item.country} alt="" /></td> */}
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.email}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.message}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.title}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px] p-[10px]">{item.status}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]p-[10px]">{item.date}</td>
            </tr>

                {/* <hr className=" -ml-2 h-[8px] w-[80%] bg-black-500 self-center" /> */}
            </>)
            )
        )
    }
    const TableTranxlogs = () => {

        let Contacts = items[0].transactions

        return (
            Contacts.map((item) => (<><tr className=" border-b-[1px]">
                {/* <td><img src={item.country} alt="" /></td> */}
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.package}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.invested}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.ROI}</td>
                <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.status}</td>
            </tr>

                {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
            </>)
            )
        )
    }


export {TablePackages, TableMessages, TableTranxlogs}
