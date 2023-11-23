import React from 'react'
import Layout from '../../layout/Admin/Layout'
import { TablesTranxlogs } from '../../layout/Admin/Tables'

const TransactionLogs = () => {
  return (
    <Layout>
      <div className=' bg-[#f0f0f0] py-[15px] h-full'>
      <div className='flex flex-col w-[75%] mt-[80px]'>
        <TablesTranxlogs />
        <button className="h-[41px] w-full bg-[#DAEBFF] rounded-[10px] text-[#17106B] font-['Poppins'] font-[700] text-[12px] leading-[18px] mb-[15px]">+ Add New Agent</button>
        <button className="text-[#656375] font-['Poppins'] font-[700] text-[12px] leading-[18px]">See All</button>
      </div>
      </div>
    </Layout>
  )
}

export default TransactionLogs
