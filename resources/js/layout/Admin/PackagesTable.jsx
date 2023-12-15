import React from "react";
import styles from "./PackagesTable.module.css";

const PackagesTable = () => {
    return (
        <div>
            <div className={` ${styles.Positions_positions__rMFzW}`}>
                <div
                    className={` ${styles.PositionsResizer_resizer__jmF3T}`}
                ></div>
                <div className={` ${styles.Positions_heading__sxWu1}`}>
                    <h3>Orders</h3>
                    <div
                        className={` ${styles.PositionTypeSelect_container__Jh_VB}`}
                    >
                        <div className={` ${styles.Chips_chips__k9x6T}`}>
                            <button
                                data-key="open"
                                className={` ${styles.Button_button__fGgzW} ${styles.primary} ${styles.small} ${styles.ChipButton_chip__WFRKd}`}
                            >
                                <span
                                    className={` ${styles.Button_content__ZOwjQ}`}
                                >
                                    Open
                                </span>
                            </button>
                            <button
                                data-key="pending"
                                className={` ${styles.Button_button__fGgzW}  ${styles.small} ${styles.ChipButton_chip__WFRKd}`}
                            >
                                <span
                                    className={` ${styles.Button_content__ZOwjQ}`}
                                >
                                    Pending
                                </span>
                            </button>
                            <button
                                data-key="closed"
                                className={` ${styles.Button_button__fGgzW} ${styles.small} ${styles.ChipButton_chip__WFRKd}`}
                            >
                                <span
                                    className={` ${styles.Button_content__ZOwjQ}`}
                                >
                                    Closed
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={` ${styles.Table_container__nZ8ky} ${styles.scroll}`}
                >
                    <table className={` ${styles.Table_table__yJ6sm}`}>
                        <thead className={` ${styles.Table_head__63PL_}`}>
                            <tr>
                                <td
                                    className={` ${styles.common_col__MZ_tC} ${styles.common_symbol__KU1B8}`}
                                >
                                    Package
                                </td>
                                <td
                                    className={` ${styles.common_col__MZ_tC} ${styles.common_direction__HnCBk}`}
                                >
                                    Amount Invested
                                </td>
                                <td
                                    className={` ${styles.common_col__MZ_tC} ${styles.common_volume__Ac_il}`}
                                >
                                    Day Profit
                                </td>
                                <td
                                    className={` ${styles.common_col__MZ_tC} ${styles.common_time__DZZ0_}`}
                                >
                                    Date Opened
                                </td>
                                <td
                                    className={` ${styles.common_col__MZ_tC} ${styles.common_price_change__dXDqQ} `}
                                >
                                    Price change
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                className={` ${styles.OpenPosition_row__yyS77} ${styles.OpenPosition_selected__f4Y6x} `}
                                data-testid="opened-position-row"
                            >
                                <td
                                    className={` ${styles.common_col__MZ_tC} ${styles.common_symbol__KU1B8} ${styles.OpenPosition_col__aWKNU} ${styles.OpenPosition_symbol__Gk_oA}`}
                                >
                                    <div
                                        className={` ${styles.OpenPosition_wrapper__gBm1R} flex`}
                                    >
                                        <span
                                            className={` ${styles.OpenPosition_ico__O8jXB}`}
                                        >
                                            <img
                                                src="https://my.octafx.com/octatrader/_assets/instruments/BTCUSD.svg"
                                                alt="BTCUSD"
                                            />
                                        </span>
                                        <span>BTCUSD</span>
                                    </div>
                                </td>
                                <td
                                    className={` ${styles.common_col__MZ_tC} ${styles.common_direction__HnCBk} ${styles.OpenPosition_col__aWKNU} ${styles.OpenPosition_direction__0J6Q8}`}
                                >
                                    <span
                                        className={` ${styles.Colored_positive__QmizS} ${styles.colored}`}
                                    >
                                        <span
                                            className={` ${styles.Direction_buy__Y05td}`}
                                        >
                                            Buy
                                        </span>
                                    </span>
                                </td>
                                <td
                                    className={` ${styles.common_col__MZ_tC} ${styles.common_volume__Ac_il} ${styles.OpenPosition_col__aWKNU} ${styles.OpenPosition_volume__TlsZm}`}
                                >
                                    <span>0.01</span>
                                </td>
                                <td
                                    className={` ${styles.common_col__MZ_tC} ${styles.common_time__DZZ0_} ${styles.OpenPosition_col__aWKNU}`}
                                >
                                    <span>15/12/2023</span>
                                </td>
                                <td
                                    className={` ${styles.common_col__MZ_tC} ${styles.OpenPosition_col__aWKNU} ${styles.common_price_change__dXDqQ}`}
                                >
                                    <div
                                        className={` ${styles.OpenPosition_wrapper__gBm1R} flex items-center`}
                                    >
                                        <span>43048.61</span>
                                        <span
                                            className={` ${styles.OpenPosition_arrow__sPRvh}`}
                                        >
                                            <svg
                                                width="8"
                                                height="8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 4h6M4 1l3 3-3 3"
                                                    stroke="#848B9D"
                                                    stroke-linecap="round"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span>42966.16</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PackagesTable;
