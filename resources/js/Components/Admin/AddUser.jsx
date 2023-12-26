import { React, useState, useMemo } from 'react'
import AdminLayout from '../../layout/Admin/AdminLayout'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Select from 'react-select'
import countryList from 'react-select-country-list';

const AddUser = () => {


  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [user, setUser] = useState([])
  // const [loading, setLoading] = useState(true)
  const options = useMemo(() => countryList().getData(), [])


  const handleInput = (e) => {
    e.persist
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const passCheck = (e) => {
    e.persist
    setCpassword(e.target.value)
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const changeHandler = value => {
    const country = value.label
    setUser({ ...user, country })
    setValue(value)
  }

  console.log(cpassword);

  const confirmPassword = (datas) => {
    if (cpassword !== datas.password) {
      return swal("A Mistake!", 'your 2 passwords do not match', "error")
    }
    else {
      return call(datas)
    }
  }

  const call = (data) => {

    axios.post(`/api/users/`, data)
      .then(res => {
        if (res.data.status === 200) {
          swal("Success!", res.data.message, "success");
          navigate('/AllUsers')
        }
        else if (res.data.status === 500) {
          navigate('/AllUsers')
        }
        else if (res.data.status === 404) {
          swal("Error!", res.data.message, "error");
          navigate('/AllUsers')
        }
      })
  }



  const makeUpdate = (e) => {
    e.preventDefault()
    const data = user
    confirmPassword(data)
  }

  // if(loading){
  //   return <h4>Loading....</h4>
  // }

  return (
    <AdminLayout>
      <div className='bg-[#f0f0f0] py-[25px] h-full'>
        <div className="cont w-[90%] mb-[20px] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">

          <form action="" onSubmit={makeUpdate} method="post" className=" flex flex-col gap-[18px] w-[90%] py-[5px]">

            <label htmlFor="username" className='text-[#8f8f8f]'>Username</label>
            <input onChange={handleInput} placeholder="Username" type="text" name="username" id="username" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="email" className='text-[#8f8f8f]'>Email</label>
            <input onChange={handleInput} placeholder="Email" type="email" name="email" id="email" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="password" className='text-[#8f8f8f]'>Password</label>
            <input onChange={handleInput} placeholder="Password" type="password" name="password" id="password" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="cpassword" className='text-[#8f8f8f]'>Confirm Password</label>
            <input onChange={passCheck} placeholder="Confirm Password" type="password" name="password_confirmation" id="cpassword" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="phone" className='text-[#8f8f8f]'>Phone Number</label>
            <input onChange={handleInput} placeholder="Phone Number" type="tel" name="phone" id="phone" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="country" className='text-[#8f8f8f]'>Country</label>
            <Select options={options} value={value} onChange={changeHandler} name="country" id="country" />

            <label htmlFor="Address" className='text-[#8f8f8f]'>Address</label>
            <input onChange={handleInput} placeholder="Address" type="text" name="address" id="address" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />

            <div className="flex"><input type="checkbox" name="terms" id="terms" />
              <span>I accept the <a href="">Terms Of Service</a></span>
            </div>

            <input type="submit" value="Update User" className='w-[20%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none' />
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AddUser
