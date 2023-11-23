import React from 'react'
import { FaCoins, FaWallet } from "react-icons/fa";
import { BiSolidBox } from "react-icons/bi";
import Layout from '../../layout/Admin/Layout'
import { CardContainer, IconContainer, ColoredLine } from '../Widget/CardContainer'

const Package = () => {
  return (
    <Layout>
      <div className=' bg-[#f0f0f0] py-[15px] h-full'>
      <div className="flex pr-6 flex-wrap">
          <CardContainer>
            <IconContainer color='blue'>
              <FaCoins size={25} />
            </IconContainer>
            <div className="Info absolute right-[12px] top-[13px] flex flex-col items-end align-self-end">
              <div className="amount font-black text-xl">
                <h2>DIAMOND</h2>
              </div>
            </div>
            <ColoredLine color="blue" />
            <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
              <h6>Investment Type</h6>
            </div>
          </CardContainer>
          <CardContainer>
            <IconContainer color='orange'>
              <FaWallet size={25} />
            </IconContainer>
            <div className="Info absolute right-[12px] top-[13px] flex flex-col items-end align-self-end">
              <div className="amount font-black text-xl">
                <h2>10%</h2>
              </div>
            </div>
            <ColoredLine color="orange" />
            <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
              <h6>Daily Profit</h6>
            </div>
          </CardContainer>
          <CardContainer>
            <IconContainer color='green'>
              <BiSolidBox size={25} />
            </IconContainer>
            <div className="Info absolute right-[12px] top-[13px] flex flex-col items-end align-self-end">
              <div className="amount font-black text-xl">
                <h2>$900</h2>
              </div>
            </div>
            <ColoredLine color="green" />
            <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
              <h6>Total Profit</h6>
            </div>
          </CardContainer>
          <CardContainer>
            <IconContainer color='blue'>
              <FaCoins size={25} />
            </IconContainer>
            <div className="Info absolute right-[12px] top-[13px] flex flex-col items-end align-self-end">
              <div className="amount font-black text-xl">
                <h2>2023-10-06 04:08:45</h2>
              </div>
            </div>
            <ColoredLine color="blue" />
            <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
              <h6>Activation Date</h6>
            </div>
          </CardContainer>
          <CardContainer>
            <IconContainer color='orange'>
              <FaWallet size={25} />
            </IconContainer>
            <div className="Info absolute right-[12px] top-[13px] flex flex-col items-end align-self-end">
              <div className="amount font-black text-xl">
                <h2>2023-10-16 19:29:22</h2>
              </div>
            </div>
            <ColoredLine color="orange" />
            <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
              <h6>End Date</h6>
            </div>
          </CardContainer>
          <CardContainer>
            <IconContainer color='green'>
              <BiSolidBox size={25} />
            </IconContainer>
            <div className="Info absolute right-[12px] top-[13px] flex flex-col items-end align-self-end">
              <div className="amount font-black text-xl">
                <h2>10 Days</h2>
              </div>
            </div>
            <ColoredLine color="green" />
            <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
              <h6>Duration</h6>
            </div>
          </CardContainer>
          <CardContainer>
            <IconContainer color='blue'>
              <FaCoins size={25} />
            </IconContainer>
            <div className="Info absolute right-[12px] top-[13px] flex flex-col items-end align-self-end">
              <div className="amount font-black text-xl">
                <h2>$1000</h2>
              </div>
            </div>
            <ColoredLine color="blue" />
            <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
              <h6>Amount Invested</h6>
            </div>
          </CardContainer>
          <CardContainer>
            <IconContainer color='orange'>
              <FaWallet size={25} />
            </IconContainer>
            <div className="Info absolute right-[12px] top-[13px] flex flex-col items-end align-self-end">
              <div className="amount font-black text-xl">
                <h2>Ended</h2>
              </div>
            </div>
            <ColoredLine color="orange" />
            <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
              <h6>Status</h6>
            </div>
          </CardContainer>
        </div>
      </div>
    </Layout>
  )
}

export default Package
