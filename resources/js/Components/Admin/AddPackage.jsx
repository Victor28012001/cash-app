import React from 'react'
import { useState, useEffect } from 'react';
import swal from 'sweetalert'
import {useNavigate} from 'react-router-dom'
import AdminLayout from '../../layout/Admin/AdminLayout'

const AddPackage = () => {
  const navigate = useNavigate();  
  const [packages, setPackages] = useState([])
  const [validationError,setValidationError] = useState({})  
  
  const handleInput = (e) => {
    e.persist
    setPackages({ ...packages, [e.target.name]: e.target.value })
  }

  
  const updatePackage = async (e, id) => {
    e.preventDefault();    


      await axios.post(`http://localhost:8000/api/packages`, packages).then((res)=>{
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
      <div className='bg-[#f0f0f0] py-[25px] h-full'>
        <div className="cont w-[90%] mb-[20px] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">

          <form action="" method="post" onSubmit={updatePackage} className=" flex flex-col gap-[18px] w-[90%] py-[5px]">

            <label htmlFor="name" className='text-[#8f8f8f]'>Package Name</label>
            <input onChange={handleInput} placeholder="Package Name..." type="text" name="name" id="name" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="Increase" className='text-[#8f8f8f]'>Daily Percentage Increase (%) </label>
            <input onChange={handleInput} placeholder="% Increase.." type="number" name="Increase" id="Increase" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="bonus" className='text-[#8f8f8f]'>Package Purchase Bonus (USD)</label>
            <input onChange={handleInput} placeholder="$ Bonus" type="text" name="bonus" id="bonus" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="MIN" className='text-[#8f8f8f]'>MIN Investment (USD)</label>
            <input onChange={handleInput} placeholder="$ From..." type="number" name="MIN" id="MIN" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="MAX" className='text-[#8f8f8f]'>MAX Investment (USD)</label>
            <input onChange={handleInput} placeholder="$ To..." type="number" name="MAX" id="MAX" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="duration" className='text-[#8f8f8f]'>Duration (Days)</label>
            <input onChange={handleInput} placeholder="X Days..." type="number" name="duration" id="duration" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />

            
            <input type="submit" value="Update Settings" className='w-[20%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none' />
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AddPackage
