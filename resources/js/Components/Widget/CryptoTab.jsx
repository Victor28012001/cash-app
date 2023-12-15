import React, { useEffect, useRef } from "react";
import { MarketOverview } from "react-ts-tradingview-widgets";


const CryptoTab = () => {

    return (
      <div className={`h-[100%] w-[100%]`}>
          <div className='ticker-widget w-[100%] mx-[50%] translate-x-[-50%] overflow-y-auto'>
            <MarketOverview colorTheme="light" dateRange="1M" autosize = {true} height='100%' isTransparent = {true} width= '100%' showChart = {false} tabs = {[
    {
      title: "Crypto",
      symbols: [
        {
          "s": "COINBASE:BTCUSD",
          "d": "BTC"
        },
        {
          "s": "BITSTAMP:ETHUSD",
          "d": "ETH"
        },
        {
          "s": "BINANCE:DOGEUSD",
          "d": "DOGE"
        },
        {
          "s": "BINANCE:LTCUSD",
          "d": "LTC"
        }
      ]
    }
   ]}></MarketOverview>
          </div>

          
        </div>
    )
};

export default CryptoTab;
