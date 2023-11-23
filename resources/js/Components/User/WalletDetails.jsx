import React from 'react'
import Layout from '../../layout/Admin/Layout'

const WalletDetails = () => {
  return (
    <Layout>
      <div className=' bg-[#f0f0f0] py-[15px] h-full'>
        <div className="cont w-[90%] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">
          
            <form action="" method="post" className=" flex flex-col gap-[18px] w-[90%] py-[5px]">
              
              <label htmlFor="Perfect" className='text-[#8f8f8f]'>Perfect Money</label>
              <input type="text" placeholder='Enter your Perfect Money details' name="Perfect" id="Perfect" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10'/>


              <label htmlFor="Ethereum" className='text-[#8f8f8f]'>Ethereum Address</label>
              <input type="text" placeholder='Enter your Ethereum address' name="Ethereum" id="Ethereum" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10'/>


              <label htmlFor="Bitcoin" className='text-[#8f8f8f]'>Bitcoin Address</label>
              <input type="text" placeholder='Enter your Bitcoin Address' name="Bitcoin" id="vBitcoin" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10'/>


              <label htmlFor="USDT" className='text-[#8f8f8f]'>USDT Address</label>
              <input type="text" placeholder='Enter your USDT Address' name="USDT" id="USDT" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10'/>


              <input type="submit" value="Update Wallet" className='w-[20%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none'/>
            </form>
        </div>
      </div>
    </Layout>
  )
}

export default WalletDetails
