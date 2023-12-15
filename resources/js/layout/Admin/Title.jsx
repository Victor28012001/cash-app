import React from 'react'
import { TickerTape } from "react-ts-tradingview-widgets";

const Title = (darkMode) => {


  return (
    <div className={`absolute top-[60px] py-2 w-[100%] ${darkMode ? 'bg-white' : 'bg-[#0f0f00]'}`}>
          <div className='ticker-widget w-[100%]'>
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
  )
}

export default Title
