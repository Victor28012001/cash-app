import React from 'react'
import Layout from '../../layout/Admin/Layout'

const InvestmentPackages = () => {
  return (
    <Layout>
      <div className=' bg-[#f0f0f0] py-[15px] h-full'>
        <div className='flex flex-wrap px-[15px] gap-[20px]'>
          <div className="cont w-[30%] text-bold m-[20px] flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">

            <form action="" method="post" className=" flex flex-col gap-[28px] w-[90%] py-[5px]">

              <h2 className='font-black text-xl'>VIP 15</h2>

              <hr />

              <h2 className='font-black text-xl'>30% <span className='font-bold text-lg text-[#d0d0d0]'>daily profit</span></h2>

              <ul className='font-bold text-md text-[#d0d0d0]'>
                <li>7 Days Investment</li>
                <li>$0.7 Purchase Bonus</li>
                <li>$5 MIN</li>
                <li>$100 MAX</li>
              </ul>

              <input type="number" placeholder='Amount to Invest' name="USDT" id="USDT" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


              <input type="submit" value="Select Plan" className='w-[70%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none' />
            </form>
          </div>



          <div className="cont w-[30%] text-bold m-[20px] flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">

            <form action="" method="post" className=" flex flex-col gap-[28px] w-[90%] py-[5px]">

              <h2 className='font-black text-xl'>DIAMOND</h2>

              <hr />

              <h2 className='font-black text-xl'>10% <span className='font-bold text-lg text-[#d0d0d0]'>daily profit</span></h2>

              <ul className='font-bold text-md text-[#d0d0d0]'>
                <li>10 Days Investment</li>
                <li>$49.96 Purchase Bonus</li>
                <li>$150 MIN</li>
                <li>$5000 MAX</li>
              </ul>

              <input type="number" placeholder='Amount to Invest' name="USDT" id="USDT" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


              <input type="submit" value="Select Plan" className='w-[70%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none' />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default InvestmentPackages
