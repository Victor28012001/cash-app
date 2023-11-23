import React from 'react'
import { FaCoins, FaWallet } from "react-icons/fa";
import { BiSolidBox } from "react-icons/bi";
import Layout from '../../layout/Admin/Layout'
import { CardContainer, IconContainer, ColoredLine } from '../Widget/CardContainer'
import TradingViewWidget from '../Widget/TradingViewWidget'


const Dashboard = () => {
  return (

    <Layout>
      <div className=' bg-[#f0f0f0] py-[15px] h-full'>
        <div className="flex pr-6">
          <CardContainer>
            <IconContainer color='blue'>
              <FaCoins size={25} />
            </IconContainer>
            <div className="Info absolute right-[12px] top-[13px] flex flex-col items-end align-self-end">
              <div className="title font-light text-xs">
                <h6>Investment Profit</h6>
              </div>
              <div className="amount font-black text-xl">
                <h2>N256</h2>
              </div>
            </div>
            <ColoredLine color="blue" />
            <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
              <h6>for today</h6>
            </div>
          </CardContainer>
          <CardContainer>
            <IconContainer color='orange'>
              <FaWallet size={25} />
            </IconContainer>
            <div className="Info absolute right-[12px] top-[13px] flex flex-col items-end align-self-end">
              <div className="title font-light text-xs">
                <h6>Wallet Balance</h6>
              </div>
              <div className="amount font-black text-xl">
                <h2>N256</h2>
              </div>
            </div>
            <ColoredLine color="orange" />
            <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
              <h6>since 3days ago</h6>
            </div>
          </CardContainer>
          <CardContainer>
            <IconContainer color='green'>
              <BiSolidBox size={25} />
            </IconContainer>
            <div className="Info absolute right-[12px] top-[13px] flex flex-col items-end align-self-end">
              <div className="title font-light text-xs">
                <h6>Referral Bonus</h6>
              </div>
              <div className="amount font-black text-xl">
                <h2>N256</h2>
              </div>
            </div>
            <ColoredLine color="green" />
            <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
              <h6>22 Referrals</h6>
            </div>
          </CardContainer>
        </div>
        <TradingViewWidget/>

      </div>



    </Layout>
  )
}

export default Dashboard
