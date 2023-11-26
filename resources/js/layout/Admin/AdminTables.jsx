import React from 'react'
import { useState} from 'react';
import useTable from '../../hooks/useTable';
import AdminTablesFooter from './AdminTablesFooter';
import { TablePackages, TableApproval, TableInvestments, TableMessages, TableUsers, TableGateway, TableAllUsers, TabledepositOrder, TablewithdrawalRequest } from "./AdminTableitems";

const TablesApproval = ({ datas, rowsPerPage }) => {
  let data = datas[0].approval
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <div className=" overflow-auto w-full">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="">
            <th scope="col" className='text-left '>Email</th>
            <th scope="col" className='text-left text-sm' >Email Status</th>
            <th scope="col" className='text-left text-sm'>Avatar</th>
            <th scope="col" className='text-left text-sm'>User Status</th>
            <th scope="col" className='text-left text-sm'>Date</th>
          </tr>
        </thead>

        <tbody>
          <TableApproval slice={slice}/>
        </tbody>

      </table>
      <AdminTablesFooter range={range} slice={slice} setPage={setPage} page={page} />

    </div>
  )
}

const TablesInvestments = ({ datas, rowsPerPage }) => {
  let data = datas[1].investments
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);


  return (
    <div className=" overflow-auto w-full">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="">
            <th scope="col" className='text-left flex text-sm'>Username</th>
            <th scope="col" className='text-left text-sm'>Package</th>
            <th scope="col" className='text-left text-sm'>Invested</th>
            <th scope="col" className='text-left text-sm'>Increase</th>
            <th scope="col" className='text-left text-sm'>ROI</th>
            <th scope="col" className='text-left text-sm'>Status</th>
            <th scope="col" className='text-left text-sm'>Investment ID</th>
          </tr>
        </thead>

        <tbody>
          <TableInvestments slice={slice} />
        </tbody>

      </table>

      <AdminTablesFooter range={range} slice={slice} setPage={setPage} page={page} />

    </div>
  )
}

const TablesMessages = ({ datas, rowsPerPage }) => {
  let data = datas[2].messages
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);


  return (
    <div className=" overflow-auto w-full">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="">
            <th scope="col" className='text-left text-sm'>Email</th>
            <th scope="col" className='text-left text-sm' >message</th>
            <th scope="col" className='text-left text-sm'>title</th>
            <th scope="col" className='text-left text-sm'>Image</th>
            <th scope="col" className='text-left text-sm'>Status</th>
            <th scope="col" className='text-left text-sm'>Date</th>
          </tr>
        </thead>

        <tbody>
          <TableMessages slice={slice} />
        </tbody>

      </table>

      <AdminTablesFooter range={range} slice={slice} setPage={setPage} page={page} />

    </div>
  )
}


const TablesPackage = ({ datas, rowsPerPage }) => {
  let data = datas[3].package
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);


  return (
    <div className=" overflow-auto w-full">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="">
            <th scope="col" className='text-left text-sm text-left'>Name</th>
            <th scope="col" className='text-left text-sm' >Daily Increase</th>
            <th scope="col" className='text-left text-sm'>bonus</th>
            <th scope="col" className='text-left text-sm'>status</th>
            <th scope="col" className='text-left text-sm'>MIN</th>
            <th scope="col" className='text-left text-sm'>MAX</th>
            <th scope="col" className='text-left text-sm'>Time & Date</th>
          </tr>
        </thead>

        <tbody>
          <TablePackages slice={slice} />
        </tbody>

      </table>

      <AdminTablesFooter range={range} slice={slice} setPage={setPage} page={page} />

    </div>
  )
}

const TablesGateway = ({ datas, rowsPerPage }) => {
  let data = datas[5].paymentGateway
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <div className=" overflow-auto w-full">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="text-sm">
            <th scope="col" className='text-left '>Payment Method</th>
            <th scope="col" className='text-left text-sm' >details</th>
            <th scope="col" className='text-left text-sm'>Email</th>
            <th scope="col" className='text-left text-sm'>Icon</th>
          </tr>
        </thead>

        <tbody>
          <TableGateway slice={slice} />
        </tbody>

      </table>

      <AdminTablesFooter range={range} slice={slice} setPage={setPage} page={page} />

    </div>
  )

}

const TablesAllUsers = ({ datas, rowsPerPage }) => {
  let data = datas[4].allUsers
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);


  return (
    <div className=" overflow-auto w-full">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="text-sm">
            <th scope="col" className='text-left '>Username</th>
            <th scope="col" className='text-left text-sm' >refferal Code</th>
            <th scope="col" className='text-left text-sm'>plan Profit</th>
            <th scope="col" className='text-left '>online</th>
            <th scope="col" className='text-left text-sm' >verified</th>
            <th scope="col" className='text-left text-sm'>account Balance</th>
            <th scope="col" className='text-left text-sm'>Reg. Date</th>
          </tr>
        </thead>

        <tbody>
          <TableAllUsers slice={slice} />
        </tbody>

      </table>

      <AdminTablesFooter range={range} slice={slice} setPage={setPage} page={page} />

    </div>
  )

}

const TablesdepositOrder = ({ datas, rowsPerPage }) => {
  let data = datas[7].depositOrder
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);


  return (
    <div className=" overflow-auto w-full">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="text-sm">
            <th scope="col" className='text-left '>Email</th>
            <th scope="col" className='text-left text-sm'>Amount</th>
            <th scope="col" className='text-left text-sm'>Mode</th>
            <th scope="col" className='text-left text-sm'>Status</th>
            <th scope="col" className='text-left text-sm' >refferer ID</th>
            <th scope="col" className='text-left text-sm'>referrer Pay</th>
            <th scope="col" className='text-left text-sm'>Reg. Date</th>
          </tr>
        </thead>

        <tbody>
          <TabledepositOrder slice={slice} />
        </tbody>

      </table>

      <AdminTablesFooter range={range} slice={slice} setPage={setPage} page={page} />

    </div>
  )

}

const TableswithdrawalRequest = ({ datas, rowsPerPage }) => {
  let data = datas[8].withdrawalRequest
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);


  return (
    <div className=" overflow-auto w-full">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="text-sm">
          <th scope="col" className='text-left '>Email</th>
          <th scope="col" className='text-left text-sm'>Wallet Address</th>
            <th scope="col" className='text-left text-sm'>Amount</th>
            <th scope="col" className='text-left text-sm'>Mode</th>
            <th scope="col" className='text-left text-sm'>Status</th>
            <th scope="col" className='text-left text-sm' >refferer ID</th>
            <th scope="col" className='text-left text-sm'>Reg. Date</th>
          </tr>
        </thead>

        <tbody>
          <TablewithdrawalRequest slice={slice} />
        </tbody>

      </table>

      <AdminTablesFooter range={range} slice={slice} setPage={setPage} page={page} />

    </div>
  )

}

const TablesUsers = ({ datas, rowsPerPage }) => {
  let data = datas[6].users
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <div className=" overflow-auto w-full">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="text-sm">
            <th scope="col" className='text-left '>Username</th>
            <th scope="col" className='text-left text-sm'>Email</th>
            <th scope="col" className='text-left text-sm' >refferal Code</th>
            <th scope="col" className='text-left text-sm'>account Balance</th>
            <th scope="col" className='text-left text-sm'>Reg. Date</th>
          </tr>
        </thead>

        <tbody>
          <TableUsers slice={slice} />
        </tbody>

      </table>

      <AdminTablesFooter range={range} slice={slice} setPage={setPage} page={page} />

    </div>
  )

}

export { TablesApproval, TablesInvestments, TablesMessages, TablesPackage, TablesGateway, TablesUsers, TablesAllUsers, TablesdepositOrder, TableswithdrawalRequest }
