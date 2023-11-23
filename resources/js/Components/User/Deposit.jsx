import React from 'react'
import Layout from '../../layout/Admin/Layout'

const Deposit = () => {
  return (
    <Layout>
      <div className=' bg-[#f0f0f0] py-[15px] h-full'>
        <div className="cont w-[90%] mb-[20px] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">

          <form action="" method="post" className=" flex flex-col gap-[18px] w-[90%] py-[5px]">


          <h2 className='font-black text-xl'>USD (TRC 20)</h2>


            <div className='refer-code flex items-center'>
                {/* <input type="text" name="refer-code" id="refer-code" className='border-[1px] border-[#f0f0f0] border-solid h-[75%] rounded-tl-[4px] rounded-bl-[4px]' /> */}
                <textarea name="" id="" cols="50" rows="1" className='border-[1px] border-[#f0f0f0] border-solid h-[75%] rounded-tl-[4px] rounded-bl-[4px] outline-none focus:outline-none focus:ring'></textarea>
                <button type="button" className="bg-[#000] text-[#fff] h-[130%] p-[4px] rounded-tr-[4px] rounded-br-[4px]">copy</button>
            </div>


            <label htmlFor="TransID" className='text-[#8f8f8f]'>Transaction ID</label>
            <input  placeholder="Transaction ID" type="text" name="TransID" id="TransID" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />

            <label htmlFor="Amount" className='text-[#8f8f8f]'>USD Amount</label>
            <input  placeholder="USD Amount" type="text" name="Amount" id="Amount" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />

            <label htmlFor="proof" className='text-[#8f8f8f]'>Upload Payment Proof *</label>
            <input type="file" name="proof" id="proof" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <input type="submit" value="Deposit" className='w-[20%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none' />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Deposit
