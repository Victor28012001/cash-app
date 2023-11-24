import React from 'react'
import Layout from '../../layout/Admin/Layout'
import { TablesPackges } from '../../layout/Admin/Tables'

const MyPackages = () => {
  return (
    <Layout>
      <div className=' bg-[#f0f0f0] py-[15px] h-full'>
        <div className='cont w-[90%] mb-[20px] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10'>
          <TablesPackges />
        </div>
      </div>
    </Layout>
  )
}

export default MyPackages
