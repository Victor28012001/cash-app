import React from 'react'
import { TablePackages, TableApproval, TableInvestments, TableMessages, TableUsers, TableGateway, TableAllUsers, TabledepositOrder, TablewithdrawalRequest } from "./AdminTableitems";

const TablesApproval = () => {

  return (
    <div className=" overflow-auto w-full">

      <table className="table-auto w-full text-sm">


        <thead>
          <tr className="">
            <th scope="col" className='text-left '>Email</th>
            <th scope="col" className='text-left text-sm' >Email Status</th>
            <th scope="col" className='text-left text-sm'>Avatar</th>
            <th scope="col" className='text-left text-sm'>Agent</th>
            <th scope="col" className='text-left text-sm'>User Status</th>
            <th scope="col" className='text-left text-sm'>Time</th>
            <th scope="col" className='text-left text-sm'>Date</th>
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
          <TableInvestments />
        </tbody>

      </table>

    </div>
  )
}

const TablesMessages = () => {


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
          <TableMessages />
        </tbody>

      </table>

    </div>
  )
}


const TablesPackage = () => {


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
          <TablePackages />
        </tbody>

      </table>

    </div>
  )
}

const TablesGateway = () => {

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
          <TableGateway />
        </tbody>

      </table>

    </div>
  )

}

const TablesAllUsers = () => {


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
          <TableAllUsers />
        </tbody>

      </table>

    </div>
  )

}

const TablesdepositOrder = () => {


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
          <TabledepositOrder />
        </tbody>

      </table>

    </div>
  )

}

const TableswithdrawalRequest = () => {


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
          <TablewithdrawalRequest />
        </tbody>

      </table>

    </div>
  )

}

const TablesUsers = () => {


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
          <TableUsers />
        </tbody>

      </table>

    </div>
  )

}

export { TablesApproval, TablesInvestments, TablesMessages, TablesPackage, TablesGateway, TablesUsers, TablesAllUsers, TablesdepositOrder, TableswithdrawalRequest }
