import React, { useEffect, useState } from "react";
import Layout from "../../layout/Admin/Layout";
import SendMessage from './SendMessage'
import { Tablessers } from "../../layout/Admin/AdminTables";

const Messages = () => {
    const [status, setStatus] = useState('send')

    const getBackgroundColor = (status) => {
        if (status === 'send') {
            return <SendMessage />;
        }
        if (status === 'Messages') {
            return <Tablessers />;
        }
    }


    return (
        <Layout>
            <div className=" bg-[#f0f0f0] py-[15px] h-full">
                <div className="cont w-[90%] mb-[20px] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">
                    <div class="inline-flex rounded-md shadow-sm" role="group">
                        <button
                            type="button"
                            onClick={() => setStatus('send')}
                            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                        >
                            send message
                        </button>
                        <button
                            type="button"
                            onClick={() => setStatus('Messages')}
                            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                        >
                            Messages
                        </button>
                    </div>

                    {getBackgroundColor(status)}

                </div>
            </div>
        </Layout>
    );
};

export default Messages;
