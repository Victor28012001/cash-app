import React from 'react'

const TradingviewTickerWidget = () => {
    // if (document.getElementById("chart")) {
    //     const script = document.createElement('script');
    //     script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
    //     script.async = true;
    //     script.innerHTML = JSON.stringify({
    //         "symbols": [
    //             {
    //                 "proName": "FOREXCOM:SPXUSD",
    //                 "title": "S&P 500"
    //             },
    //             {
    //                 "proName": "FOREXCOM:NSXUSD",
    //                 "title": "US 100"
    //             },
    //             {
    //                 "proName": "FX_IDC:EURUSD",
    //                 "title": "EUR to USD"
    //             },
    //             {
    //                 "proName": "BITSTAMP:BTCUSD",
    //                 "title": "Bitcoin"
    //             },
    //             {
    //                 "proName": "BITSTAMP:ETHUSD",
    //                 "title": "Ethereum"
    //             },
    //             {
    //                 "description": "TESLA",
    //                 "proName": "NASDAQ:TSLA"
    //             }
    //         ],
    //         "showSymbolLogo": true,
    //         "colorTheme": "dark",
    //         "isTransparent": false,
    //         "displayMode": "adaptive",
    //         "locale": "en"
    //     });

    //     document.getElementById("chart")!.appendChild(script);
    // }
    return (
        <div id="chart">
            <div>
                Chart test
                <div className="tradingview-widget-container">
                    <div className="tradingview-widget-container__widget"></div>

                    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
                        {JSON.stringify({
                            "symbols": [
                                {
                                    "proName": "FOREXCOM:SPXUSD",
                                    "title": "S&P 500"
                                },
                                {
                                    "proName": "FOREXCOM:NSXUSD",
                                    "title": "US 100"
                                },
                                {
                                    "proName": "FX_IDC:EURUSD",
                                    "title": "EUR to USD"
                                },
                                {
                                    "proName": "BITSTAMP:BTCUSD",
                                    "title": "Bitcoin"
                                },
                                {
                                    "proName": "BITSTAMP:ETHUSD",
                                    "title": "Ethereum"
                                },
                                {
                                    "description": "TESLA",
                                    "proName": "NASDAQ:TSLA"
                                }
                            ],
                            "showSymbolLogo": true,
                            "colorTheme": "dark",
                            "isTransparent": false,
                            "displayMode": "adaptive",
                            "locale": "en"
                        })}
                    </script>
                </div>
            </div>
        </div>
    )
}

export default TradingviewTickerWidget
