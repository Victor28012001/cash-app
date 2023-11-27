import React from 'react'


const TablePackages = ({slice, records}) => {

    let conversations 
    
    if(records.length > 0){
        conversations = records
    }else{
        conversations = slice
    }

    return (
        conversations.map((item) => (<><tr className=" border-b-[1px]">
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.package}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.invested}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.ROI}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.status}</td>
        </tr>

            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
    // return console.log(conversations)
}

const TableMessages = ({slice, records}) => {

    let Agents 

    if(records.length > 0){
        Agents = records
    }else{
        Agents = slice
    }


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
const TableTranxlogs = ({slice, records}) => {

    let Contacts
    
    if(records.length > 0){
        Contacts = records
    }else{
        Contacts = slice
    }


    return (
        Contacts.map((item) => (<><tr className=" border-b-[1px]">
            {/* <td><img src={item.country} alt="" /></td> */}

        </tr>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.email}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.amount}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.mode}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.status}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.tranxId}</td>
            <td className="text-[#656375] font-['Poppins'] font-[700] text-[10px] leading-[15px]">{item.date}</td>
            {/* <hr className=" -ml-2 h-4 w-full bg-black-500 self-center" /> */}
        </>)
        )
    )
}


export { TablePackages, TableMessages, TableTranxlogs }
