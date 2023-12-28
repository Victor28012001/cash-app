import { React, useState } from 'react'
import styles from "./PackagesTable.module.css";


const PackagesTableItems = (data) => {

    const [selected, setSelected] = useState(false)

    // console.log(data)
    const datas = data.data
  return (
    <>
      {datas.map((item) => (
      <tr
                                className={` ${styles.OpenPosition_row__yyS77} ${styles.OpenPosition_selected__f4Y6x} `}
                                data-testid="opened-position-row"
                                onClick={()=> setSelected(true)}
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
                            ))}
    </>
  )
}

export {PackagesTableItems}
