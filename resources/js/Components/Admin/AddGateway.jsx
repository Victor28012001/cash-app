import React from 'react'
import AdminLayout from '../../layout/Admin/AdminLayout'

const AddGateway = () => {
  return (
    <AdminLayout>
      <div className='bg-[#f0f0f0] py-[15px] h-full'>
        <div className="cont w-[90%] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">

          <form action="" method="post" className=" flex flex-col gap-[28px] w-[90%] py-[5px]">


            <h2 className='font-black text-xl'>Add Payment Gateway</h2>

            <label htmlFor="Method" className='text-[#8f8f8f]'>Payment Method</label>
            <input placeholder='Payment Method' type="text" name="Method" id="Method" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="Address" className='text-[#8f8f8f]'>Payment Address</label>
            <input placeholder='Payment Address' type="text" name="Address" id="Address" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />

            <label htmlFor="Icon" className='text-[#8f8f8f]'>Payment Icon *</label>
            <input type="file" name="Icon" id="Icon" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <input type="submit" value="Add Payment" className='w-[20%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none' />
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AddGateway
