import React, { useEffect, useState } from 'react'
import Layout from '../../layout/Admin/Layout'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

const AccountVerification = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState()
  const [validationError,setValidationError] = useState({})  


  const changeHandler = (event) => {
		setImage(event.target.files[0]);
	};  


  const verification = async (e) => {
    e.preventDefault();    
    const formData = new FormData()    
    formData.append('verifile', image)    
    await axios.post(`http://localhost:8000/api/products`, formData).then(({data})=>{
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
      <div className=' bg-[#f0f0f0] py-[15px] h-full'>
        <div className="cont w-[90%] h-[45vh] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white  rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">
          <div className="write">
            <div className="greeting">
              <p><span className="font-black">NOTE: </span>All information provided by you cannot be accessed by anyone, this platform uses end to end encryption to protect it's investors' data and details.</p>
              <p>Please verify you are not a robot by completing the below upload to be able to withdraw.</p>
            </div>
          </div>
          <div className="form w-[100%] flex flex-col items-start px-[12px]">
            <form action="" method="post" className=" flex flex-col gap-[8px]" onSubmit={verification}>
              <label htmlFor="verifile" className='text-[#8f8f8f]'>Upload any means of ID *</label>
              <input type="file" name="verifile" id="verifile" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10'/>
              <input type="submit" value="Upload ID" onChange={changeHandler} className='w-[50%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none'/>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AccountVerification
