import React from "react";
import profile from "../../Assets/team-1-800x800.jpg";
import {Link} from "react-router-dom";

const CopyTradingBlock = () => {
    return (
        <div>
            <div className="rounded-md h-[100%]flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Top Traders</h2>
                    <Link
                        to=""
                        className="text-indigo-700 text-sm rounded inline-flex items-center"
                    >
                        View More
                        <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            className="w-4 h-4 ml-2"
                        >
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col">
                    <div className="flex justify-between items-center  my-3">
                        <div className="flex items-center gap-2">
                            <div className="w-[40px] h-[40px] relative">
                                <img
                                    src={profile}
                                    alt="avatar"
                                    className="bg-black rounded-full w-[100%] h-[100%]"
                                />
                                <span className="absolute animate-pulse top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <div>
                                <h2 className="leading-snug text-sm text-gray-900 font-bold">Mbianou Bradon</h2>
                                <p className="leading-snug text-xs text-gray-600 font-bold">60% Win Rate</p>
                                <span className="leading-snug text-xs text-gray-600 font-bold">10% Profit Share</span>
                            </div>
                        </div>
                        {/* <div className="hover:text-green rounded-full cursor-pointer transition-all ease-linear duration-300">
                            <h2>Copy Trade</h2>
                        </div> */}
                        <div className="inline-block px-6 py-2 text-xs font-medium text-white bg-violet-600 border border-violet-600 rounded-md active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
                            <button className="">Copy</button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center my-3">
                        <div className="flex items-center gap-2">
                            <div className="w-[40px] h-[40px] relative">
                                <img
                                    src={profile}
                                    alt="avatar"
                                    className="bg-black rounded-full w-[100%] h-[100%]"
                                />
                                <span className="absolute animate-pulse top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>

                            <div>
                                <h2 className="leading-snug text-sm text-gray-900 font-bold">Marie Nzale</h2>
                                <p className="leading-snug text-xs text-gray-600 font-bold">60% Win Rate</p>
                                <span className="leading-snug text-xs text-gray-600 font-bold">10% Profit Share</span>
                            </div>
                        </div>
                        {/* <div className="hover:text-green rounded-full cursor-pointer transition-all ease-linear duration-300">
                            <h2>Copy Trade</h2>
                        </div> */}
                        <div className="inline-block px-6 py-2 text-xs font-medium text-white bg-violet-600 border border-violet-600 rounded-md active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
                            <button className="">Copy</button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center my-3">
                        <div className="flex items-center gap-2">
                            <div className="w-[40px] h-[40px] relative">
                                <img
                                    src={profile}
                                    alt="avatar"
                                    className="bg-black rounded-full w-[100%] h-[100%] "
                                />
                                <span className="absolute animate-pulse top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>

                            <div>
                                <h2 className="leading-snug text-sm text-gray-900 font-bold">Kimboh Lovette</h2>
                                <p className="leading-snug text-xs text-gray-600 font-bold">60% Win Rate</p>
                                <span className="leading-snug text-xs text-gray-600 font-bold">10% Profit Share</span>
                            </div>
                        </div>
                        {/* <div className="hover:text-green rounded-full cursor-pointer transition-all ease-linear duration-300">
                            <h2>Copy Trade</h2>
                        </div> */}
                        <div className="inline-block px-6 py-2 text-xs font-medium text-white bg-violet-600 border border-violet-600 rounded-md active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">
                            <button className="">Copy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CopyTradingBlock;
