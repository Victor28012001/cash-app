import React from 'react'
import AdminLayout from '../../layout/Admin/AdminLayout'

const Settings = () => {
  return (
    <AdminLayout>
      <div className='bg-[#f0f0f0] py-[15px] h-full'>
        <div className="cont w-[90%] mb-[20px] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">

          <form action="" method="post" className=" flex flex-col gap-[18px] w-[90%] py-[5px]">

            <label htmlFor="f-name" className='text-[#8f8f8f]'>Site URL</label>
            <input  placeholder="First Name" type="text" name="f-name" id="f-name" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="email" className='text-[#8f8f8f]'>Name</label>
            <input  placeholder="Email" type="email" name="email" id="email" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="password" className='text-[#8f8f8f]'>Withdrawal Limit</label>
            <input  placeholder="Password" type="password" name="password" id="password" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="Address" className='text-[#8f8f8f]'>Registration Bonus</label>
            <input  placeholder="Contact Address" type="text" name="Address" id="Address" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="country" className='text-[#8f8f8f]'>Referral Bonus %</label>
            <input  placeholder="Home Country" type="text" name="country" id="country" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            
            
            <label htmlFor="f-name" className='text-[#8f8f8f]'>Site Email</label>
            <input  placeholder="First Name" type="text" name="f-name" id="f-name" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="email" className='text-[#8f8f8f]'>Phone</label>
            <input  placeholder="Email" type="email" name="email" id="email" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="password" className='text-[#8f8f8f]'>Site Title</label>
            <input  placeholder="Password" type="password" name="password" id="password" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="Address" className='text-[#8f8f8f]'>Copyright Year</label>
            <input  placeholder="Contact Address" type="text" name="Address" id="Address" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />

            <label htmlFor="country" className='text-[#8f8f8f]'>Logo</label>
            <img src="" alt="" className='w-[140px] h-[140px] rounded-full bg-[#000]'/>
            
            <label htmlFor="logo" className='text-[#8f8f8f]'>Select New logo*</label>
            <input type="file" name="logo" id="logo" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <input type="submit" value="Update Settings" className='w-[20%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none' />
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}

export default Settings
