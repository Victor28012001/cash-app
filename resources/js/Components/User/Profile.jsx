import React, { useEffect, useState } from 'react'
import Layout from '../../layout/Admin/Layout'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([])
  // const [image, setImage] = useState()
  const [validationError,setValidationError] = useState({})  


  const handleInput = (e) => {
    e.persist
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }


  const changeHandler = (event) => {
		// setImage(event.target.files[0]);
    setProfile({ ...profile, [event.target.name]: event.target.files[0] })
	};  


  const createProduct = async (e) => {
    e.preventDefault();      
    await axios.post(`http://localhost:8000/api/products`, profile).then(({data})=>{
      swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/")
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })
  }
  return (
    <Layout>
      <div className=' bg-[#f0f0f0] py-[15px] h-full overflow-y-hidden'>
        <div className="cont w-[90%] mb-[20px] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">

          <form action="" method="post" onSubmit={createProduct} className=" flex flex-col gap-[18px] w-[90%] py-[5px]">

            <label htmlFor="f-name" className='text-[#8f8f8f]'>First Name</label>
            <input  placeholder="First Name" onChange={handleInput} type="text" name="f-name" id="f-name" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="email" className='text-[#8f8f8f]'>Email</label>
            <input  placeholder="Email" onChange={handleInput} type="email" name="email" id="email" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="password" className='text-[#8f8f8f]'>Password</label>
            <input  placeholder="Password" onChange={handleInput} type="password" name="password" id="password" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="Address" className='text-[#8f8f8f]'>Address</label>
            <input  placeholder="Contact Address" onChange={handleInput} type="text" name="Address" id="Address" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />

            <label htmlFor="country" className='text-[#8f8f8f]'>Country</label>
            <input  placeholder="Home Country" onChange={handleInput} type="text" name="country" id="country" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />

            <img src="" alt="" className='w-[140px] h-[140px] rounded-full bg-[#000]'/>
            
            <label htmlFor="profile" className='text-[#8f8f8f]'>Profile Pics*</label>
            <input onChange={changeHandler} type="file" name="profile" id="profile" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <input type="submit" value="Update Profile" className='w-[20%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none' />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
