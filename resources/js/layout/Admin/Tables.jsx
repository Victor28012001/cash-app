import React from 'react'
import {TablePackages, TableMessages, TableTranxlogs} from "./Tableitems";

const TablesPackges = () => {

    return (
        <div className=" overflow-auto w-full">

        <table className="table-auto w-full text-sm">


          <thead>
            <tr className="">
              <th scope="col" className='text-sm'>Package</th>
              <th scope="col" className='text-sm' >Invested</th>
              <th scope="col" className='text-sm'>ROI</th>
              <th scope="col" className='text-sm text-right'>Status</th>
            </tr>
          </thead>

          <tbody>
            <TablePackages />
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
              <th scope="col" className='flex text-sm self-start'>Email</th>
              <th scope="col" className='text-sm'>Message</th>
              <th scope="col" className='text-sm'>Title</th>
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

const TablesTranxlogs = () => {


    return (
        <div className=" overflow-auto">

        <table className="table-auto w-full text-sm">


          <thead>
            <tr className="">
              <th scope="col" className='flex text-sm self-start'>Email</th>
              <th scope="col" className='text-sm' >Amount</th>
              <th scope="col" className='text-sm'>Mode</th>
              <th scope="col" className='text-sm'>Status</th>
              <th scope="col" className='text-sm'>Trancaction ID</th>
              <th scope="col" className='text-sm text-right'>Date</th>
            </tr>
          </thead>

          <tbody>
            <TableTranxlogs />
          </tbody>

        </table>

      </div>
    )
}


export {TablesPackges, TablesMessages, TablesTranxlogs}
