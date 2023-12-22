import React from 'react'
import { useState, useEffect } from 'react';
import swal from 'sweetalert'
import {useNavigate} from 'react-router-dom'
import AdminLayout from '../../layout/Admin/AdminLayout'

const AddGateway = () => {
  const navigate = useNavigate();  
  const [packages, setPackages] = useState([])
  const [validationError,setValidationError] = useState({})  
  
  const handleInput = (e) => {
    e.persist
    setPackages({ ...packages, [e.target.name]: e.target.value })
  }

  
  const updatePackage = async (e, id) => {
    e.preventDefault();    


      await axios.post(`http://localhost:8000/api/gateways`, packages).then((res)=>{
      swal("Success!", res.data.message, "success");
      console.log(res)
      navigate(`/Package/${id}`)
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        swal('Error', res.data.message, 'error');
      }
    })
  }


  return (
    <AdminLayout>
      <div className='bg-[#f0f0f0] py-[15px] h-full'>
        <div className="cont w-[90%] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">

          <form action="" method="post" onSubmit={updatePackage} className=" flex flex-col gap-[28px] w-[90%] py-[5px]">


            <h2 className='font-black text-xl'>Add Payment Gateway</h2>

            <label htmlFor="Method" className='text-[#8f8f8f]'>Payment Method</label>
            <input onChange={handleInput} placeholder='Payment Method' type="text" name="Method" id="Method" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="Address" className='text-[#8f8f8f]'>Payment Address</label>
            <input onChange={handleInput} placeholder='Payment Address' type="text" name="Address" id="Address" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />

            <label htmlFor="Icon" className='text-[#8f8f8f]'>Payment Icon *</label>
            <input onChange={handleInput} type="file" name="Icon" id="Icon" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <input type="submit" value="Add Payment" className='w-[20%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none' />
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AddGateway
