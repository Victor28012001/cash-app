import { React, useState, useEffect } from "react";
import styles from "./PackagesTable.module.css";
import { PackagesTableItems } from "./PackagesTableItems";

const PackagesTable = () => {
    const [status, setStatus] = useState("approved");
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    let data;

    const getBackgroundColor = (status) => {
        useEffect(() => {
            const fetchApi = async () => {
                await axios
                    .get(
                        `http://localhost:8000/api/investments/filterByType/${status}`
                    )
                    .then((res) => {
                        setLoading(false);
                        setUsers(res.data.investments);
                    })
                    .catch(() => {});
            };

            fetchApi();
        }, [status]);

        data = users;

        return <PackagesTableItems data={data} />;
    };

    if (loading) {
        return (
            <div role="status">
                <svg
                    aria-hidden="true"
                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        );
    }

    console.log(loading);

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
                                data-key="approved"
                                className={` ${styles.Button_button__fGgzW} ${
                                    status === "approved" && styles.primary
                                } ${styles.small} ${
                                    styles.ChipButton_chip__WFRKd
                                }`}
                                onClick={() => setStatus("approved")}
                            >
                                <span
                                    className={` ${styles.Button_content__ZOwjQ}`}
                                >
                                    Open
                                </span>
                            </button>
                            <button
                                data-key="pending"
                                className={` ${styles.Button_button__fGgzW} ${
                                    status === "pending" && styles.primary
                                }  ${styles.small} ${
                                    styles.ChipButton_chip__WFRKd
                                }`}
                                onClick={() => setStatus("pending")}
                            >
                                <span
                                    className={` ${styles.Button_content__ZOwjQ}`}
                                >
                                    Pending
                                </span>
                            </button>
                            <button
                                data-key="unapproved"
                                className={` ${styles.Button_button__fGgzW} ${
                                    status === "unapproved" && styles.primary
                                } ${styles.small} ${
                                    styles.ChipButton_chip__WFRKd
                                }`}
                                onClick={() => setStatus("unapproved")}
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
                            {/* {loading ? <h4>Loading....</h4> : <PackagesTableItems data={data}/>} */}
                            {loading && (
                                getBackgroundColor(status)
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PackagesTable;
