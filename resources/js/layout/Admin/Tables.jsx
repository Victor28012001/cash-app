import React from 'react'
import {TablePackages, TableMessages, TableTranxlogs} from "./Tableitems";

const TablesPackges = () => {

    return (
        <div className=" overflow-auto w-full">

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
        <div className=" overflow-auto w-full">

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
            <TableTranxlogs />
          </tbody>

        </table>

      </div>
    )
}


export {TablesPackges, TablesMessages, TablesTranxlogs}
