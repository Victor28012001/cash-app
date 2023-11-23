import React from 'react'
import { TablePackages, TableApproval, TableInvestments, TableMessages, TableUsers, TableGateway, TableAllUsers, TabledepositOrder, TablewithdrawalRequest } from "./AdminTableitems";

const TablesApproval = () => {

  return (
    <div className=" overflow-auto w-full">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="">
            <th scope="col" className=''>Email</th>
            <th scope="col" className='text-sm' >Email Status</th>
            <th scope="col" className='text-sm'>Avatar</th>
            <th scope="col" className='text-sm'>Agent</th>
            <th scope="col" className='text-sm'>User Status</th>
            <th scope="col" className='text-sm text-right'>Time</th>
            <th scope="col" className='text-sm text-right'>Date</th>
          </tr>
        </thead>

        <tbody>
          <TableApproval />
        </tbody>

      </table>

    </div>
  )
}

const TablesInvestments = () => {


  return (
    <div className=" overflow-auto w-full">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="">
            <th scope="col" className='flex text-sm self-start'>Username</th>
            <th scope="col" className='text-sm'>Package</th>
            <th scope="col" className='text-sm'>Invested</th>
            <th scope="col" className='text-sm'>Increase</th>
            <th scope="col" className='text-sm'>ROI</th>
            <th scope="col" className='text-sm'>Status</th>
            <th scope="col" className='text-sm text-right'>Investment ID</th>
          </tr>
        </thead>

        <tbody>
          <TableInvestments />
        </tbody>

      </table>

    </div>
  )
}

const TableMessages = () => {


  return (
    <div className=" overflow-auto">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="">
            <th scope="col" className='flex text-sm self-start'>Email</th>
            <th scope="col" className='text-sm' >message</th>
            <th scope="col" className='text-sm'>title</th>
            <th scope="col" className='text-sm'>Image</th>
            <th scope="col" className='text-sm'>Status</th>
            <th scope="col" className='text-sm text-right'>Date</th>
          </tr>
        </thead>

        <tbody>
          <TableMessages />
        </tbody>

      </table>

    </div>
  )
}


const TablesPackage = () => {


  return (
    <div className=" overflow-auto">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="">
            <th scope="col" className='text-sm text-left'>Name</th>
            <th scope="col" className='text-sm' >Daily Increase</th>
            <th scope="col" className='text-sm'>bonus</th>
            <th scope="col" className='text-sm'>status</th>
            <th scope="col" className='text-sm'>MIN</th>
            <th scope="col" className='text-sm'>MAX</th>
            <th scope="col" className='text-sm text-right'>Time & Date</th>
          </tr>
        </thead>

        <tbody>
          <TablePackages />
        </tbody>

      </table>

    </div>
  )
}

const TablesGateway = () => {

  return (
    <div className=" overflow-auto">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="text-sm">
            <th scope="col" className=' self-start'>Payment Method</th>
            <th scope="col" className='text-sm' >details</th>
            <th scope="col" className='text-sm'>Email</th>
            <th scope="col" className='text-sm'>Icon</th>
          </tr>
        </thead>

        <tbody>
          <TableGateway />
        </tbody>

      </table>

    </div>
  )

}

const TablesAllUsers = () => {


  return (
    <div className=" overflow-auto">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="text-sm">
            <th scope="col" className=' self-start'>Username</th>
            <th scope="col" className='text-sm' >refferal Code</th>
            <th scope="col" className='text-sm'>plan Profit</th>
            <th scope="col" className=' self-start'>online</th>
            <th scope="col" className='text-sm' >verified</th>
            <th scope="col" className='text-sm'>account Balance</th>
            <th scope="col" className='text-sm'>Reg. Date</th>
          </tr>
        </thead>

        <tbody>
          <TableAllUsers />
        </tbody>

      </table>

    </div>
  )

}

const TablesdepositOrder = () => {


  return (
    <div className=" overflow-auto">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="text-sm">
            <th scope="col" className=' self-start'>Email</th>
            <th scope="col" className='text-sm'>Amount</th>
            <th scope="col" className='text-sm'>Mode</th>
            <th scope="col" className='text-sm'>Status</th>
            <th scope="col" className='text-sm' >refferer ID</th>
            <th scope="col" className='text-sm'>referrer Pay</th>
            <th scope="col" className='text-sm'>Reg. Date</th>
          </tr>
        </thead>

        <tbody>
          <TabledepositOrder />
        </tbody>

      </table>

    </div>
  )

}

const TableswithdrawalRequest = () => {


  return (
    <div className=" overflow-auto">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="text-sm">
          <th scope="col" className=' self-start'>Email</th>
          <th scope="col" className='text-sm'>Wallet Address</th>
            <th scope="col" className='text-sm'>Amount</th>
            <th scope="col" className='text-sm'>Mode</th>
            <th scope="col" className='text-sm'>Status</th>
            <th scope="col" className='text-sm' >refferer ID</th>
            <th scope="col" className='text-sm'>Reg. Date</th>
          </tr>
        </thead>

        <tbody>
          <TablewithdrawalRequest />
        </tbody>

      </table>

    </div>
  )

}

const TablesUsers = () => {


  return (
    <div className=" overflow-auto">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="text-sm">
            <th scope="col" className=' self-start'>Username</th>
            <th scope="col" className='text-sm'>Email</th>
            <th scope="col" className='text-sm' >refferal Code</th>
            <th scope="col" className='text-sm'>account Balance</th>
            <th scope="col" className='text-sm'>Reg. Date</th>
          </tr>
        </thead>

        <tbody>
          <TableUsers />
        </tbody>

      </table>

    </div>
  )

}

export { TablesApproval, TablesInvestments, TableMessages, TablesPackage, TablesGateway, TablesUsers, TablesAllUsers, TablesdepositOrder, TableswithdrawalRequest }
