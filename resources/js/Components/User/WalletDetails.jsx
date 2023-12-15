import React from "react";
import {
    metamaskWallet,
    coinbaseWallet,
    trustWallet,
    useConnectionStatus,
    useCreateWalletInstance,
    useSetConnectionStatus,
    useSetConnectedWallet,
    useDisconnect,
    useAddress,
    ConnectWallet,
} from "@thirdweb-dev/react";
import Layout from "../../layout/Admin/Layout";

// const metamask = metamaskWallet();
// const coinbase = coinbaseWallet();
// const trust = trustWallet();

const WalletDetails = () => {
    // const createWalletInstance = useCreateWalletInstance();
    // const setConnectionStatus = useSetConnectionStatus();
    // const setConnectedWallet = useSetConnectedWallet();
    // const connectionStatus = useConnectionStatus();
    // const disconnect = useDisconnect();
    // const address = useAddress();

    // const handleConnect = async (walletConfig) => {
    //     // 1. create wallet instance
    //     const wallet = createWalletInstance(walletConfig);
    //     // console.log(wallet);

    //     // perform additional steps that needs to be done before connecting the wallet
    //     // here, we will generate a random wallet
    //     // await wallet.generate();

    //     try {
    //         setConnectionStatus("connecting");

    //         // 2. Call `connect` method on wallet instance
    //         await wallet.connect(
    //             // connectOptions // pass options required by the wallet (if any)
    //             walletConfig
    //         );

    //         // 3. Set wallet instance as the connected wallet
    //         setConnectedWallet(wallet);
    //     } catch (e) {
    //         setConnectionStatus("disconnected");
    //         console.error("failed to connect", e);
    //         // show error UI or close modal using props.close()
    //     }
    // };

    // if (connectionStatus === "connected") {
    //     console.log("connected to", wallet);
    //     return (
    //         <>
    //             <p> You are connected to {address}</p>
    //             <button onClick={disconnect}> Disconnect </button>
    //         </>
    //     );
    // }
    // if (connectionStatus === "disconnected") {
    return (
        <Layout>
            <div className=" bg-[#f0f0f0] py-[15px] h-full">
                <div className="cont w-[50%] h-[40%] mr-[50%] translate-y-[50%] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 p-3 text-blueGray-600 relative bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">
                    {/* <button onClick={() => handleConnect(metamask)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="212"
                                height="189"
                                viewBox="0 0 212 189"
                                id="metamask"
                            >
                                <g fill="none" fill-rule="evenodd">
                                    <polygon
                                        fill="#CDBDB2"
                                        points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"
                                    ></polygon>
                                    <polygon
                                        fill="#CDBDB2"
                                        points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
                                        transform="matrix(-1 0 0 1 256.5 0)"
                                    ></polygon>
                                    <polygon
                                        fill="#393939"
                                        points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"
                                    ></polygon>
                                    <polygon
                                        fill="#F89C35"
                                        points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"
                                    ></polygon>
                                    <polygon
                                        fill="#F89D35"
                                        points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                                    ></polygon>
                                    <polygon
                                        fill="#D87C30"
                                        points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                                    ></polygon>
                                    <polygon
                                        fill="#EA8D3A"
                                        points="46.125 101.813 65.25 119.813 65.25 137.813"
                                    ></polygon>
                                    <polygon
                                        fill="#F89D35"
                                        points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                                    ></polygon>
                                    <polygon
                                        fill="#EB8F35"
                                        points="65.25 138.375 60.75 173.25 90.563 152.438"
                                    ></polygon>
                                    <polygon
                                        fill="#EA8E3A"
                                        points="92.25 102.375 95.063 150.188 86.625 125.719"
                                    ></polygon>
                                    <polygon
                                        fill="#D87C30"
                                        points="39.375 138.938 65.25 138.375 60.75 173.25"
                                    ></polygon>
                                    <polygon
                                        fill="#EB8F35"
                                        points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                                    ></polygon>
                                    <polygon
                                        fill="#E8821E"
                                        points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                                    ></polygon>
                                    <polygon
                                        fill="#DFCEC3"
                                        points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"
                                    ></polygon>
                                    <polygon
                                        fill="#DFCEC3"
                                        points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
                                        transform="matrix(-1 0 0 1 272.25 0)"
                                    ></polygon>
                                    <polygon
                                        fill="#393939"
                                        points="70.313 112.5 64.125 125.438 86.063 119.813"
                                        transform="matrix(-1 0 0 1 150.188 0)"
                                    ></polygon>
                                    <polygon
                                        fill="#E88F35"
                                        points="12.375 .563 88.875 58.5 75.938 27"
                                    ></polygon>
                                    <path
                                        fill="#8E5A30"
                                        d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                                    ></path>
                                    <g transform="matrix(-1 0 0 1 211.5 0)">
                                        <polygon
                                            fill="#F89D35"
                                            points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                                        ></polygon>
                                        <polygon
                                            fill="#D87C30"
                                            points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                                        ></polygon>
                                        <polygon
                                            fill="#EA8D3A"
                                            points="46.125 101.813 65.25 119.813 65.25 137.813"
                                        ></polygon>
                                        <polygon
                                            fill="#F89D35"
                                            points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                                        ></polygon>
                                        <polygon
                                            fill="#EB8F35"
                                            points="65.25 138.375 60.75 173.25 90 153"
                                        ></polygon>
                                        <polygon
                                            fill="#EA8E3A"
                                            points="92.25 102.375 95.063 150.188 86.625 125.719"
                                        ></polygon>
                                        <polygon
                                            fill="#D87C30"
                                            points="39.375 138.938 65.25 138.375 60.75 173.25"
                                        ></polygon>
                                        <polygon
                                            fill="#EB8F35"
                                            points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                                        ></polygon>
                                        <polygon
                                            fill="#E8821E"
                                            points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                                        ></polygon>
                                        <polygon
                                            fill="#393939"
                                            points="70.313 112.5 64.125 125.438 86.063 119.813"
                                            transform="matrix(-1 0 0 1 150.188 0)"
                                        ></polygon>
                                        <polygon
                                            fill="#E88F35"
                                            points="12.375 .563 88.875 58.5 75.938 27"
                                        ></polygon>
                                        <path
                                            fill="#8E5A30"
                                            d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                            Connect to MetaMask wallet
                        </button>
                        <button onClick={() => handleConnect(coinbase)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                fill="none"
                                viewBox="0 0 48 48"
                                id="coinbase"
                            >
                                <path
                                    fill="#0052FF"
                                    d="M0 11.0769C0 4.95931 4.95931 0 11.0769 0H36.9231C43.0407 0 48 4.95931 48 11.0769V36.9231C48 43.0407 43.0407 48 36.9231 48H11.0769C4.95931 48 0 43.0407 0 36.9231V11.0769Z"
                                ></path>
                                <path
                                    fill="#fff"
                                    d="M23.9548 33C22.2558 32.9657 20.601 32.4534 19.181 31.5223C17.761 30.5911 16.6335 29.2788 15.9283 27.7365C15.2232 26.1943 14.969 24.4847 15.195 22.8047C15.4211 21.1246 16.1182 19.5424 17.2061 18.2402C18.294 16.938 19.7285 15.9687 21.3444 15.444C22.9602 14.9192 24.6918 14.8603 26.3398 15.2741C27.9878 15.6879 29.4851 16.5574 30.6594 17.7827C31.8337 19.008 32.6372 20.5392 32.9774 22.2H42C41.5371 17.6053 39.3215 13.3637 35.8114 10.3527C32.3014 7.34165 27.7655 5.79141 23.1418 6.02259C18.5181 6.25377 14.1604 8.2487 10.9698 11.5948C7.77927 14.9409 6 19.3821 6 24C6 28.6179 7.77927 33.0591 10.9698 36.4052C14.1604 39.7513 18.5181 41.7462 23.1418 41.9774C27.7655 42.2086 32.3014 40.6584 35.8114 37.6473C39.3215 34.6363 41.5371 30.3947 42 25.8H32.9774C32.9774 29.4 27.5638 33 23.9548 33Z"
                                ></path>
                            </svg>
                            Connect to coinbase wallet
                        </button>
                        <button onClick={() => handleConnect(trust)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                data-name="Layer 1"
                                viewBox="0 0 128 128"
                                id="trust-wallet-token"
                            >
                                <path d="M64 117.18a4.83 4.83 0 0 1-2.94-1s-3.69-2.78-13.89-8.37C31.56 99.26 24.38 89 22.39 72.4c-1.54-12.85-2.54-39.69-2.58-40.83a4.82 4.82 0 0 1 5.25-5c.1 0 10.54.88 19.52-1.64a48.46 48.46 0 0 0 16.31-8.3 4.84 4.84 0 0 1 6.22 0A48.51 48.51 0 0 0 83.42 25c9 2.52 19.42 1.64 19.53 1.64a4.81 4.81 0 0 1 5.24 5c0 1.14-1 28-2.58 40.83-2 16.6-9.17 26.86-24.77 35.4-10.2 5.59-13.87 8.36-13.91 8.39a4.82 4.82 0 0 1-2.93.92ZM29.65 36.39C30 45 30.87 62.12 32 71.26c1.4 11.68 5.09 20 19.83 28.09 6 3.27 9.86 5.65 12.21 7.18 2.35-1.53 6.24-3.91 12.21-7.18C91 91.28 94.64 82.94 96 71.26c1.13-9.14 2-26.26 2.35-34.87a67.44 67.44 0 0 1-17.54-2.15A58.54 58.54 0 0 1 64 26.33a58.54 58.54 0 0 1-16.81 7.91 67.44 67.44 0 0 1-17.54 2.15ZM64 20.34Z"></path>
                                <g
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Layer_x0020_1"
                                >
                                    <path
                                        class="st0"
                                        d="M84.1,426.3C-1,593.5-1,812.7-1,1250c0,438.4,0,656.5,85.1,823.7c75.1,147.1,195.2,266.2,341.3,341.3   C592.5,2500,811.7,2500,1249,2500c438.4,0,656.5,0,823.7-85.1c147.1-75.1,266.2-195.2,341.3-341.3   c85.1-167.1,85.1-386.3,85.1-823.7c0-438.4,0-656.5-85.1-823.7c-75.1-147.1-195.2-266.2-341.3-341.3C1905.5,0,1686.3,0,1249,0   C810.6,0,592.5,0,425.3,85.1C278.2,160.1,159.1,280.2,84.1,426.3z M1874.5,674.5c22,0,43,9,58,24c15,16,24,37,23,58   c-4,233.2-13,411.3-30,552.4c-16,141.1-41,246.2-78.1,330.3c-25,57-56,104.1-92.1,143.1c-49,53-105.1,91.1-166.1,127.1   c-26,16-53,31-82.1,47c-61,34-127.1,72.1-203.2,123.1c-27,18-63.1,18-90.1,0c-77.1-51-144.1-89.1-205.2-124.1c-14-8-27-15-40-23   c-71.1-41-136.1-81.1-192.2-138.1c-38-38-70.1-83.1-96.1-138.1c-35-73.1-59-161.1-77.1-274.2c-23-152.1-35-351.3-39-627.5   c0-21,8-43,23-58s36-24,58-24h34c104.1,0,332.3-10,530.4-164.1c29-23,70.1-23,100.1,0c198.2,154.1,426.3,164.1,530.4,164.1h34   V674.5z M1692.4,1588.3c25-52,47-125.1,63.1-229.2c19-124.1,31-293.2,36-523.4c-122.1-4-331.3-27-531.4-161.1   c-200.2,134.1-409.3,157.1-530.4,161.1c4,190.2,13,338.3,27,454.4c16,132.1,38,221.2,66.1,284.2c18,42,39,72.1,63.1,98.1   c32,36,73.1,65.1,129.1,98.1c23,14,49,28,77.1,44c50,28,106.1,60,170.1,100.1c62-40,118.1-71.1,167.1-99.1c15-8,29-16,42-24   c69.1-39,120.1-72.1,157.1-111.1c25-26,46-55,65.1-94.1L1692.4,1588.3z"
                                    />
                                </g>
                            </svg>
                            Connect to trust wallet
                        </button> */}
                        <h2 className="font-black text-left">Connect your wallet</h2>
                        <p>Sign-in with your wallet to manage your different cryptocurrency wallets or you can also create a wallet.</p>
                        <hr aria-orientation="horizontal" className=""></hr>

                    <ConnectWallet btnTitle="Connect" theme="dark" className="w-[60%] h-[20%] border-[1px] border-black border-solid"></ConnectWallet>
                    {/* <a href="bitcoin.com" target='blank'><button className="w-[90%] h-[40%] border-1 border-black border-solid">Buy Bitcoin</button></a> */}
                </div>
            </div>
        </Layout>
    );
    // }
};

export default WalletDetails;
//eth
{
    /* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#7880e7" d="M11,24L25,2l14,22l-14,8L11,24z"></path><path fill="#5c64c7" d="M25,2l14,22l-14,8V2z"></path><path fill="#7880e7" d="M11,27l14,8l14-8L25,46L11,27z"></path><path fill="#5c64c7" d="M25,35l14-8L25,46V35z M11,24l14-6l14,6l-14,8L11,24z"></path><path fill="#2a3192" d="M25,18l14,6l-14,8V18z"></path>
</svg> */
}

//btc

{
    /* <svg
    style="color: rgb(240, 184, 15);"
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-currency-bitcoin"
    viewBox="0 0 16 16"
>
    <path
        d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25L5.5 13zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28V4.487zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927V8.539z"
        fill="#f0b80f"
    ></path>
</svg> */
}
