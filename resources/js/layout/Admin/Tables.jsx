import React from 'react'
import { useState } from 'react';
import useTable from '../../hooks/useTable';
import AdminTablesFooter from './AdminTablesFooter';
import { TablePackages, TableMessages, TableTranxlogs } from "./Tableitems";

const TablesPackges = ({ datas, rowsPerPage }) => {
  let data = datas[2].packages
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const [records, setRecords] = useState([]);

  const Filter = (event) => {
    setRecords(data.filter(f => f.username.toLowerCase().includes(event.target.value)))
  }

  return (
    <div className=" overflow-auto w-full">

      <div className="flex justify-between">
        <h1 className='text-lg font-black'>Packges</h1>
        <input type="text" name="search" id="" onChange={Filter} placeholder='search....' className='border-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded  outline-none w-[40%] pl-10' />
      </div>


      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="">
            <th scope="col" className='text-sm  text-left'>Package</th>
            <th scope="col" className='text-sm  text-left' >Invested</th>
            <th scope="col" className='text-sm  text-left'>ROI</th>
            <th scope="col" className='text-sm  text-left'>Status</th>
          </tr>
        </thead>

        <tbody>
          <TablePackages slice={slice} records={records} />
        </tbody>

      </table>
      <AdminTablesFooter range={range} slice={slice} setPage={setPage} page={page} />

    </div>
  )
}

const TablesMessages = ({ datas, rowsPerPage }) => {
  let data = datas[1].TableMessages
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const [records, setRecords] = useState([]);

  const Filter = (event) => {
    setRecords(data.filter(f => f.username.toLowerCase().includes(event.target.value)))
  }

  return (
    <div className=" overflow-auto w-full">

      <div className="flex justify-between">
        <h1 className='text-lg font-black'>Messages</h1>
        <input type="text" name="search" id="" onChange={Filter} placeholder='search....' className='border-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded  outline-none w-[40%] pl-10' />
      </div>


      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="">
            <th scope="col" className='flex text-sm self-start'>Email</th>
            <th scope="col" className='text-sm'>Message</th>
            <th scope="col" className='text-sm'>Title</th>
            <th scope="col" className='text-sm'>Status</th>
            <th scope="col" className='text-sm text-right'>Date</th>
          </tr>
        </thead>

        <tbody>
          <TableMessages slice={slice} records={records} />
        </tbody>

      </table>
      <AdminTablesFooter range={range} slice={slice} setPage={setPage} page={page} />

    </div>
  )
}

const TablesTranxlogs = ({ datas, rowsPerPage }) => {
  let data = datas[0].transactions
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const [records, setRecords] = useState([]);

  const Filter = (event) => {
    setRecords(data.filter(f => f.username.toLowerCase().includes(event.target.value)))
  }


  return (
    <div className=" overflow-auto w-full">

      <div className="flex justify-between">
        <h1 className='text-lg font-black'>Transaction Logs</h1>
        <input type="text" name="search" id="" onChange={Filter} placeholder='search....' className='border-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded  outline-none w-[40%] pl-10' />
      </div>


      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="">
            <th scope="col" className='text-sm text-left'>Email</th>
            <th scope="col" className='text-sm text-left' >Amount</th>
            <th scope="col" className='text-sm text-left'>Mode</th>
            <th scope="col" className='text-sm text-left'>Status</th>
            <th scope="col" className='text-sm text-left'>Trancaction ID</th>
            <th scope="col" className='text-sm text-left'>Date</th>
          </tr>
        </thead>

        <tbody>
          <TableTranxlogs slice={slice} records={records} />
        </tbody>

      </table>
      <AdminTablesFooter range={range} slice={slice} setPage={setPage} page={page} />

    </div>
  )
}


export { TablesPackges, TablesMessages, TablesTranxlogs }
