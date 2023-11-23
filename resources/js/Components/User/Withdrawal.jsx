import React from 'react'
import Layout from '../../layout/Admin/Layout'

const Withdrawal = () => {
  return (
    <Layout>
      <div className=' bg-[#f0f0f0] py-[15px] h-full'>
        <div className="cont w-[90%] gap-[60px] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-[90%] pl-10">


            <div id="USDT" className='flex items-center justify-center border-0 px-3 py-3 relative bg-white rounded text-sm shadow w-[90%] pl-10'>
              <h2>Balance: <span>98,000.00 USD</span></h2>
            </div>


          <button type="button"  className='w-[40%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none'>Request Withdrawal</button>
        </div>
      </div>
    </Layout>
  )
}

export default Withdrawal
