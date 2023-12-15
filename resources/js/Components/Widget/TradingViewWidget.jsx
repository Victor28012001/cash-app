
// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
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
        if (document.getElementById('tradingview_a2438') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "BITSTAMP:BTCUSD",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "3",
            locale: "en",
            enable_publishing: false,
            backgroundColor: "#f0f0f0",
            gridColor: "rgba(255, 255, 255, 0)",
            hide_top_toolbar: true,
            allow_symbol_change: true,
            hide_volume: true,
            container_id: "tradingview_a2438"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container h-[50%] p-1 rounded-lg' style={{ height: "50%", width: "100%", marginLeft:'50%', translate: '-50% 0' }}>
      <div id='tradingview_a2438' className='' style={{ height: "100%", width: "100%" }} />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a>
      </div>
    </div>
  );
}
