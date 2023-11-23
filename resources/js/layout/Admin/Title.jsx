import React from 'react'
import { useLocation } from "react-router-dom";

const Title = (datas) => {

    const titleData = datas.datas

    //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

//   let textCopy = navigator.clipboard.writeText(text)

  let title

  titleData.forEach((item, index)=>{
    // title = pathname == item.path ? item.name : `Dashboard`
    if(pathname == item.path){
        title = item.name
    }
  })
  
  return (
    <div className="absolute top-[80px] w-[100%]">
      <div className="cont">
        <div className='title flex justify-between px-[12px]'>
            <div className='welcome'>
                <h2 className="font-black">{title}</h2>
                <marquee behavior="" direction="" className="w-[100%] text-sm font-[#f0f0f0] font-black"><p>thanks for investing with us at cash app </p></marquee>
            </div>
            <div className='refer-code flex items-center'>
                {/* <input type="text" name="refer-code" id="refer-code" className='border-[1px] border-[#f0f0f0] border-solid h-[75%] rounded-tl-[4px] rounded-bl-[4px]' /> */}
                <textarea name="" id="" cols="40" rows="1" className='border-[1px] border-[#f0f0f0] border-solid h-[75%] rounded-tl-[4px] rounded-bl-[4px] outline-none focus:outline-none focus:ring'></textarea>
                <button type="button" className="bg-[#000] text-[#fff] h-[75%] p-[4px] rounded-tr-[4px] rounded-br-[4px]">copy</button>
            </div>
        </div>
        <div className='ticker-widget'></div>
      </div>
    </div>
  )
}

export default Title
