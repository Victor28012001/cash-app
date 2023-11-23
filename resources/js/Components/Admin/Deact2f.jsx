import React from 'react';
import AdminLayout from '../../layout/Admin/AdminLayout'

const Deact2f = () => {
  return (
    <AdminLayout>
      <div>
        <div className="cont w-[90%] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">
          
            <form action="" method="post" className=" flex flex-col gap-[28px] w-[90%] py-[5px]">
              

            <h2 className='font-black text-xl'>DEACTIVATE GOOGLE AUTHENTICATOR</h2>

              <input placeholder="enter Investor's email to deactivate google authenticator" type="email" name="deactemail" id="New" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10'/>


              <input type="submit" value="Deactivate 2FA" className='w-[20%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none'/>
            </form>
        </div>
      </div>
    </AdminLayout>
  )
}

export default Deact2f;