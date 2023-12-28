import {React, useState, useEffect, useRef} from "react";
import Layout from "../../layout/Admin/Layout";
import { createPopper } from "@popperjs/core";
import profile from "../../Assets/team-1-800x800.jpg";
import styles from "../../layout/Admin/PackagesTable.module.css";

const TopTraders = () => {
    

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);


  const [modal, setModal] = useState(false);


  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();
  const openDropdownPopover = () => {
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
          placement: "bottom-end"
      });
      setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
      setDropdownPopoverShow(false);
  };


  let data

  useEffect(() => {
    const fetchApi = async () => {
      await axios.get("http://localhost:8000/api/Toptraders/")
        .then(res => {
          setUsers(res.data.allTopTraders)
        }
        )
        .catch(() => {
          console.log('ok')
        });
    }

    fetchApi()
  }, [])


  data = users


  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;


// Records to be displayed on the current page
  const currentRecords = data.slice(indexOfFirstRecord, 
  indexOfLastRecord);

  const indexNow = currentPage - 1
  const beginNo = (indexNow * recordsPerPage) + 1
  const endNo = (indexNow * recordsPerPage) + currentRecords.length


  const nPages = Math.ceil(data.length / recordsPerPage)



//create this array inside the paginate component
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);



data = currentRecords



const goToNextPage = () => {
  if(currentPage !== nPages) 
      setCurrentPage(currentPage + 1)
}


const goToPrevPage = () => {
  if(currentPage !== 1) 
      setCurrentPage(currentPage - 1)
}

const toggleModal = () => {
  setModal(!modal)
}

    return (
        <Layout>
            <div className=" bg-[#f0f0f0] py-[15px] h-full overflow-y-hidden">
                <div className="cont w-[90%] mb-[20px] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">
                    {/* <div>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg"> */}
                            <div className="flex items-center w-[100%] justify-between flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
                                <div>
                                    <button
                ref={btnDropdownRef}
                onClick={e => {
                    e.preventDefault();
                    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                }}
                                        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                    >
                                        <span className="sr-only">
                                            Action button
                                        </span>
                                        Action
                                        <svg
                                            className="w-2.5 h-2.5 ms-2.5"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="m1 1 4 4 4-4"
                                            />
                                        </svg>
                                    </button>
                                    {/* <!-- Dropdown menu --> */}
                                    <div
                                        id="dropdownAction"
                                        className={(dropdownPopoverShow ? "block " : "hidden ") + "absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"}
                                    >
                                        <ul
                                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownActionButton"
                                        >
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    Reward
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    Promote
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    Activate account
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="py-1">
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                Delete User
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <label for="table-search" className="sr-only">
                                    Search
                                </label>
                                <div className="relative flex items-center">
                                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="table-search-users"
                                        className="block ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Search a top trader"
                                    />
                                </div>
                            </div>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        {/* <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="checkbox-all-search"
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label
                                                    for="checkbox-all-search"
                                                    className="sr-only"
                                                >
                                                    checkbox
                                                </label>
                                            </div>
                                        </th> */}
                                        <th scope="col" className="px-6 py-3">
                                            Username
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            All Time Gain
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Active
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Copiers
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Commission
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                        profit and loss
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {data.map((item) => (<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                                            onClick={toggleModal}
                                            >
                                        {/* <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="checkbox-table-search-1"
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label
                                                    for="checkbox-table-search-1"
                                                    className="sr-only"
                                                >
                                                    checkbox
                                                </label>
                                            </div>
                                        </td> */}
                                        <th
                                            scope="row"
                                            className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src={profile}
                                                alt="Jese"
                                            />
                                            <div className="ps-3">
                                                <div className="text-base font-semibold">
                                                {item.firstName} {item.lastName}
                                                </div>
                                                <div className="font-normal text-gray-500">
                                                    neil.sims@flowbite.com
                                                </div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.winRate}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                                                {item.active}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            17
                                        </td>
                                        <td className="px-6 py-4">
                                                {item.profitShare}
                                        </td>
                                        <td className="px-6 py-4">
                                            {/* <!-- Modal toggle --> */}
                                            {/* <button
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                Edit user
                                            </button> */}
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
                                        <span>42.16</span>
                                    </div>
                                        </td>  
                                        {/* <!-- Edit user modal --> */}
                            {modal && (<div
                                id="editUserModal"
                                tabindex="-1"
                                aria-hidden="true"
                                className="fixed top-0 left-0 z-50 items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                            >
                                {console.log(item.firstName)}
                                <div className="relative w-full max-h-full">
                                    {/* <!-- Modal content --> */}
                                    <form className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        {/* <!-- Modal header --> */}
                                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                Edit user
                                            </h3>
                                            <button
                                                type="button"
                                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                data-modal-hide="editUserModal"
                                                onClick={toggleModal}
                                            >
                                                <svg
                                                    className="w-3 h-3"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 14 14"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                    />
                                                </svg>
                                                <span className="sr-only">
                                                    Close modal
                                                </span>
                                            </button>
                                        </div>
                                        {/* <!-- Modal body --> */}
                                        <div className="p-6 space-y-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        for="first-name"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        First Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder={item.firstName}
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        for="last-name"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Last Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder={item.lastName}
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        for="email"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="example@company.com"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        for="phone-number"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="phone-number"
                                                        id="phone-number"
                                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="e.g. +(12)3456 789"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        for="department"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Department
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="department"
                                                        id="department"
                                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Development"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        for="company"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Company
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="company"
                                                        id="company"
                                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="123456"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        for="current-password"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Current Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        name="current-password"
                                                        id="current-password"
                                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="••••••••"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        for="new-password"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        New Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        name="new-password"
                                                        id="new-password"
                                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="••••••••"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Modal footer --> */}
                                        <div className="flex items-center p-6 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                                            <button
                                                type="submit"
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Save all
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>)}
                                    </tr>

                                    
                                ))}
                                    
                                </tbody>
                            </table>
    <nav className="flex items-center w-full flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">{beginNo}-{endNo}</span> of <span className="font-semibold text-gray-900 dark:text-white">{users.length}</span></span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <li className="page-item">

<a className="page-link flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" 

    onClick={goToPrevPage} 

    href='#'>

    

    Previous

</a>

</li>

{pageNumbers.map(pgNumber => (

<li key={pgNumber} 

    className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >



    <a onClick={() => setCurrentPage(pgNumber)}  

        className='page-link flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' 

        href='#'>

        

        {pgNumber}

    </a>

</li>

))}

<li className="page-item">

<a className="page-link flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" 

    onClick={goToNextPage}

    href='#'>

    

    Next

</a>

</li>
        </ul>
    </nav>
                          
                        {/* </div>
                    </div> */}
                </div>
            </div>
        </Layout>
    );
};

export default TopTraders;
