import React from "react";
import { FaCoins, FaWallet } from "react-icons/fa";
import { BiSolidBox } from "react-icons/bi";
import Layout from "../../layout/Admin/Layout";
import {
    CardContainer,
    IconContainer,
    ColoredLine,
} from "../Widget/CardContainer";
import TradingViewWidget from "../Widget/TradingViewWidget";
import CopyTradingBlock from "../../layout/Admin/CopyTradingBlock";
import CryptoTab from "../Widget/CryptoTab";
import { MiniChart } from "react-ts-tradingview-widgets";
// import ApexLineChart from "../../layout/Admin/ApexLineChart";
import PackagesTable from '../../layout/Admin/PackagesTable'

const Dashboard = () => {
    return (
        <Layout>
            <div className=" bg-[#f0f0f0] py-[20px] h-full">
                <div className="flex">
                    <CardContainer>
                        <IconContainer color="orange">
                            <FaCoins size={25} />
                        </IconContainer>
                        <div className="Info absolute right-[12px] top-[13px] flex flex-col items-end align-self-end">
                            <div className="title font-light text-xs">
                                <h6>Investment Profit</h6>
                                {/* <ApexLineChart/> */}
                            </div>
                            <div className="amount font-black text-xl">
                                <h2>N256</h2>
                            </div>
                        </div>
                        {/* <ColoredLine color="blue" /> */}
                        <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
                            <h6>for today</h6>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <IconContainer color="red">
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
                        {/* <ColoredLine color="orange" /> */}
                        <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
                            <h6>since 3days ago</h6>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <IconContainer color="purple">
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
                        {/* <ColoredLine color="green" /> */}
                        <div className="title font-bold text-xs absolute right-[12px] bottom-[12px]">
                            <h6>22 Referrals</h6>
                        </div>
                    </CardContainer>
                    <CardContainer>
                        <MiniChart symbol="BITSTAMP:BTCUSD" height='100%' width='100%' trendLineColor="rgba(255, 152, 0, 1)" underLineColor="rgba(255, 152, 0, 1)" isTransparent={true} autosize={true}/>
                    </CardContainer>
                </div>
                <div className="flex h-[60vh]">
                    <div className="w-[70%] h-[full] px-2 gap-4">
                        <TradingViewWidget />
                        <div className="w-[100%] h-[50%] rounded-md bg-[#f9f9f9] font-black shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] m-1 ">
                            <div className="relative overflow-x-auto">
                                <PackagesTable />
                            </div>
                        </div>
                    </div>
                    <div className="flex h-[100%] flex-col w-[40%] justify-between pr-4">
                        <div className="w-[100%] rounded-md h-[35%] flex flex-col justify-around bg-[#f9f9f9] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                            <CryptoTab />
                        </div>
                        <div className="w-[100%] bg-[rgba(0,0,0,0)] rounded-md h-[65%] p-2 justify-around bg-[#f9f9f9] m-1 ">
                            <CopyTradingBlock />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
