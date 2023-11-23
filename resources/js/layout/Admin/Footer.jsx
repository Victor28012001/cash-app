import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillHeartFill} from 'react-icons/bs'

const Footer = () => {

  const year = new Date().getFullYear();


  return (
    <div>
      <div className="font-normal text-inherit absolute top-[100%] bottom-0 left-[50%] translate-x-[-50%]">
          &copy; {year}, made with{" "}
          <BsFillHeartFill className="-mt-0.5 inline-block h-3.5 w-3.5" /> by{" "}
          <Link
            to='/dashboard'
            target="_blank"
            className="transition-colors hover:text-blue-500"
          >
            Cash-app
          </Link>
        </div>
    </div>
  )
}

export default Footer
