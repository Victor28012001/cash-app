import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/facebook'
import 'react-social-icons/twitter'
import 'react-social-icons/instagram'
import 'react-social-icons/whatsapp'

const Footer = () => {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6">
              <button
                type="button"
              >
                <SocialIcon className="bg-white text-blue-600 shadow-lg font-normal h-12 w-12 rounded-full outline-none focus:outline-none mr-2 p-3" url="www.x.com" href='' label='' />
              </button>
              <button
                type="button"
              >
                {/* <i className="flex fab fa-facebook-square"></i> */}
                <SocialIcon className="bg-white text-blue-600 shadow-lg font-normal h-12 w-12 rounded-full outline-none focus:outline-none mr-2 p-3" url="www.facebook.com" href='' label='' />
              </button>
              <button
                type="button"
              >
                <SocialIcon className="bg-white text-blue-600 shadow-lg font-normal h-12 w-12 rounded-full outline-none focus:outline-none mr-2 p-3" url="www.instagram.com" href='' label='' />
              </button>
              <button
                type="button"
              >
                <SocialIcon className="bg-white text-blue-600 shadow-lg font-normal h-12 w-12 rounded-full outline-none focus:outline-none mr-2 p-3" url="www.whatsapp.com" href='' label='' />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      to="/about">About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      to="/">Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      to="/contact">Contact Us
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}Cash-app by{" "}
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900"
              >
                Cash-app
              </Link>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
