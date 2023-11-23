import React from 'react'
import AdminLayout from '../../layout/Admin/AdminLayout'
import { CardContainer, IconContainer, ColoredLine } from '../Widget/CardContainer'
import { FaCoins, FaWallet } from "react-icons/fa";
import { BiSolidBox } from "react-icons/bi";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className=''>
        <div className="flex flex-wrap items-center ml-[50%] translate-x-[-50%] w-[100%]">
          <CardContainer>
            <IconContainer color='blue'>
              <FaCoins size={25} />
            </IconContainer>
            <div className="Info absolute right-[12px] top-[13px] flex flex-col items-end align-self-end">
              <div className="title font-light text-xs">
                <h6>Total Users</h6>
              </div>
              <div className="amount font-black text-xl">
                <h2>256</h2>
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
                <h6>Total Trades</h6>
              </div>
              <div className="amount font-black text-xl">
                <h2>56</h2>
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
                <h6>Withdrawal Requests</h6>
              </div>
              <div className="amount font-black text-xl">
                <h2>26</h2>
              </div>
            </div>
            <ColoredLine color="green" />
            <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
              <h6>since 3days ago</h6>
            </div>
          </CardContainer>
          <CardContainer>
            <IconContainer color='blue'>
              <FaCoins size={25} />
            </IconContainer>
            <div className="Info absolute right-[12px] top-[13px] flex flex-col items-end align-self-end">
              <div className="title font-light text-xs">
                <h6>Deposit Requests</h6>
              </div>
              <div className="amount font-black text-xl">
                <h2>6</h2>
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
                <h6>Online Users</h6>
              </div>
              <div className="amount font-black text-xl">
                <h2>0</h2>
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
                <h6>Total Withdrawals</h6>
              </div>
              <div className="amount font-black text-xl">
                <h2>$8,903,450.00</h2>
              </div>
            </div>
            <ColoredLine color="green" />
            <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
              <h6>since last year</h6>
            </div>
          </CardContainer>
          <CardContainer>
            <IconContainer color='green'>
              <BiSolidBox size={25} />
            </IconContainer>
            <div className="Info absolute right-[12px] top-[13px] flex flex-col items-end align-self-end">
              <div className="title font-light text-xs">
                <h6>Total Deposits</h6>
              </div>
              <div className="amount font-black text-xl">
                <h2>$8,903,450.00</h2>
              </div>
            </div>
            <ColoredLine color="green" />
            <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
              <h6>since last year</h6>
            </div>
          </CardContainer>
        </div>

      </div>
    </AdminLayout>
  )
}

export default AdminDashboard
