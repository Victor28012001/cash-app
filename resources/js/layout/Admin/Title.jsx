import React from 'react'
import { useState, useRef } from 'react';
import { useLocation } from "react-router-dom";
import { TickerTape } from "react-ts-tradingview-widgets";
import { FcInspection } from "react-icons/fc";

const Title = (datas) => {


  const [copySuccess, setCopySuccess] = useState('');
  const [text, setText] = useState('your referral link here');
  let timeoutID = null;


  async function copyToClipboard() {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        setCopySuccess('Copied!');
        timeoutID = setTimeout(() => {
          setCopySuccess('');
        }, 1000);
      }
    } catch (err) {
      console.error(err);
    }
  }


  const titleData = datas.datas


  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //   let textCopy = navigator.clipboard.writeText(text)

  let title

  titleData.forEach((item, index) => {
    // title = pathname == item.path ? item.name : `Dashboard`
    if (pathname == item.path) {
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
            <input type="text" name="refer-code" id="refer-code" value={text} className='text-blueGray-300 pl-2 w-[250px] border-[1px] border-[#f0f0f0] border-solid h-[75%] rounded-tl-[4px] rounded-bl-[4px] outline-none focus:outline-none focus:ring' readOnly onChange={e => setText(e.target.value)} />
            {
              /* Logical shortcut for only displaying the 
                 button if the copy command exists */
              navigator?.clipboard?.writeText &&
              <div className='relative'>
                <button className="flex items-center text-sm bg-[#000] text-[#fff] h-[35px] p-[4px] rounded-tr-[4px] rounded-br-[4px]" onClick={copyToClipboard}><FcInspection/>copy</button>
                <div className="absolute text-[#0fffdf] ">{copySuccess}</div>
              </div>
            }
          </div>
        </div>
        <div className='ticker-widget h-[80%]'>
          <TickerTape colorTheme="dark" symbols={[{
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          },
          {
            "description": "TESLA",
            "proName": "NASDAQ:TSLA"
          }]}></TickerTape>
        </div>
      </div>
    </div>
  )
}

export default Title
