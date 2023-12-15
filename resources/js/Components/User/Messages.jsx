import React, { useEffect, useState } from 'react'
import Layout from '../../layout/Admin/Layout'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'


const Messages = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([])
  const [validationError,setValidationError] = useState({})  
  

  const handleInput = (e) => {
    e.persist
    setMessages({ ...messages, [e.target.name]: e.target.value })
  }


  const createProduct = async (e) => {
    e.preventDefault();    
    await axios.post(`http://localhost:8000/api/products`, messages).then((data)=>{
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
        <div className="cont w-[90%] mb-[20px] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">

          <form action="" method="post" onSubmit={createProduct} className=" flex flex-col gap-[18px] w-[90%] py-[5px]">

            <input  placeholder="Message title" type="text" onChange={handleInput} name="title" id="title" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />

            <textarea placeholder='write your message here' onChange={handleInput} name="" id="" cols="50" rows="15" className='border-[1px] border-[#f0f0f0] border-solid h-[75%] rounded-tl-[4px] rounded-bl-[4px] outline-none focus:outline-none focus:ring'></textarea>


            <input type="submit" value="Send Message" className='w-[20%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none' />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Messages
