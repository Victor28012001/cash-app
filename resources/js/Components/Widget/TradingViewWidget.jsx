// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

const TradingViewWidget = () => {
    const onLoadScriptRef = useRef();

    useEffect(
        () => {
            onLoadScriptRef.current = createWidget;

            if (!tvScriptLoadingPromise) {
                tvScriptLoadingPromise = new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.id = 'tradingview-widget-loading-script';
                    script.src = 'https://s3.tradingview.com/tv.js';
                    script.type = 'text/javascript';
                    script.onload = resolve;

                    document.head.appendChild(script);
                });
            }

            tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

            return () => onLoadScriptRef.current = null;

            function createWidget() {
                if (document.getElementById('tradingview_b6a0a') && 'TradingView' in window) {
                    new window.TradingView.widget({
                        autosize: true,
                        symbol: "NASDAQ:AAPL",
                        interval: "D",
                        timezone: "Africa/Lagos",
                        theme: "light",
                        style: "1",
                        locale: "en",
                        enable_publishing: false,
                        backgroundColor: "rgba(0, 0, 0, 1)",
                        allow_symbol_change: true,
                        container_id: "tradingview_b6a0a"
                    });
                }
            }
        },
        []
    );

    return (
        <div className='tradingview-widget-container bg-white rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]' style={{ height: "45vh", width: "95%", marginLeft:'50%', translate: '-50% 0' }}>
            <div id='tradingview_b6a0a' style={{ height: "calc(100% - 32px)", width: "100%" }} />
            {/* <div className="tradingview-widget-copyright">
                <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a>
            </div> */}
        </div>
    );
}


export default TradingViewWidget