import {React, useState, useEffect} from "react";
import styles from "./PackagesTable.module.css";
import {PackagesTableItems} from "./PackagesTableItems";

const PackagesTable = () => {


    const [status, setStatus] = useState('approved')
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([]);
  
  
    let data


    useEffect(() => {
        const fetchApi = async () => {
          await axios.get(`http://localhost:8000/api/investments`)
            .then(res => {
              setUsers(res.data.allinvestments)
              console.log(res.data.allinvestments);
            }
            )
            .catch(() => {
              console.log('ok')
            });
        }
    
        fetchApi()
      }, [])
    
    
      data = users


console.log(data);



    const getBackgroundColor = (status) => {
        
            useEffect(() => {
              const fetchApi = async () => {
                await axios.get(`http://localhost:8000/api/investments/filterByType/${status}`)
                  .then(res => {
                    setUsers(res.data.investments)
                    console.log(users);
                  }
                  )
                  .catch(() => {
                    console.log('ok')
                  });
              }
          
              fetchApi()
            }, [])
          
          
            data = users


    console.log(data);

        
            return <PackagesTableItems data={data}/>;
        
    }


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
                                className={` ${styles.Button_button__fGgzW} ${status === 'approved' && styles.primary} ${styles.small} ${styles.ChipButton_chip__WFRKd}`}
                                onClick={() => setStatus('approved')}
                            >
                                <span
                                    className={` ${styles.Button_content__ZOwjQ}`}
                                >
                                    Open
                                </span>
                            </button>
                            <button
                                data-key="pending"
                                className={` ${styles.Button_button__fGgzW} ${status === 'pending' && styles.primary}  ${styles.small} ${styles.ChipButton_chip__WFRKd}`}
                                onClick={() => setStatus('pending')}
                            >
                                <span
                                    className={` ${styles.Button_content__ZOwjQ}`}
                                >
                                    Pending
                                </span>
                            </button>
                            <button
                                data-key="unapproved"
                                className={` ${styles.Button_button__fGgzW} ${status === 'unapproved' && styles.primary} ${styles.small} ${styles.ChipButton_chip__WFRKd}`}
                                onClick={() => setStatus('unapproved')}
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
                        {loading ? <h4>Loading....</h4> : getBackgroundColor(status)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PackagesTable;
