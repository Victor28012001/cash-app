import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import {BiLogIn} from 'react-icons/bi'

const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  let location = useLocation();
  let register = '/register'
  let login = '/login'
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-black shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-xl font-bolder leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            to="/"
          >
            <h1>CASH-APP</h1>
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                to="/about"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " far fa-file-alt text-lg leading-lg mr-2"
                  }
                />{" "}
                About Us
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                to="/contact"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " far fa-file-alt text-lg leading-lg mr-2"
                  }
                />{" "}
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            

            <li className="flex items-center">
            <Link to='/login'>
              <button
                className={
                  (props.transparent
                    ? "bg-white text-gray-800 active:bg-gray-100"
                    : "bg-pink-500 text-white active:bg-pink-600") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                {/* <FiLogIn /> */}
                 Login
              </button>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to='/register'>
              <button
                className={
                  (props.transparent
                    ? "bg-white text-gray-800 active:bg-gray-100"
                    : "bg-pink-500 text-white active:bg-pink-600") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                {/* <BiLogIn />  */}
                Register
              </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


// to={location.pathname!==register||login?'/register':'/auth/register'}
