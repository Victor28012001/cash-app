import { React, useState, useEffect } from 'react'
import AdminLayout from '../../layout/Admin/AdminLayout'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const EditInvestment = (props) => {


  const navigate = useNavigate()
  const [packag, setPackage] = useState([])
  const [error, setError] = useState([])
  const [loading, setLoading] = useState(true)



  const { id } = useParams();


  useEffect(() => {
    axios.get(`/api/investments/${id}`)
      .then(res => {
        if(res.data.status === 200){
          setPackage(res.data.investment)
        }
        else if(res.data.status === 500){
          swal('Error', res.data.message, 'error');
          navigate('/Investments')
        }
        setLoading(false)
      })
  }, [id])

  const handleInput = (e) => {
    e.persist
    setPackage({ ...packag, [e.target.name]: e.target.value })
  }

  const makeUpdate = (e) => {
    e.preventDefault()
    const data = packag

    axios.put(`/api/investments/${id}`, data)
      .then(res => {
        if(res.data.status === 200){
          swal("Success!", res.data.message, "success");
          navigate('/Investments')
        }
        else if(res.data.status === 500){
          navigate('/dashboard')
        }
        else if(res.data.status === 404){
          swal("Error!", res.data.message, "error");
          navigate('/Investments')
        }
        setLoading(false)
      })
  }

  if(loading){
    return <h4>Loading....</h4>
  }

  return (

    <AdminLayout>
      <div className='bg-[#f0f0f0] py-[15px] h-full'>
        <div className="cont w-[90%] mb-[20px] ml-[50%] translate-x-[-50%] text-bold flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">

          <form action="" method="post"  onSubmit={makeUpdate} className=" flex flex-col gap-[18px] w-[90%] py-[5px]">

            <label htmlFor="ackageName" className='text-[#8f8f8f]'>package name</label>
            <input onChange={handleInput} placeholder="package name" value={packag.packageName} type="text" name="ackageName" id="ackageName" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            <small className='color-red text-sm'>{error.ackageName}</small>


            <label htmlFor="username" className='text-[#8f8f8f]'>username</label>
            <input onChange={handleInput} placeholder="username" value={packag.username} type="text" name="username" id="username" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            <small className='color-red text-sm'>{error.username}</small>


            <label htmlFor="increase" className='text-[#8f8f8f]'>Increase</label>
            <input onChange={handleInput} placeholder="Increase" value={packag.increase} type="number" name="increase" id="increase" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            <small className='color-red text-sm'>{error.increase}</small>
            


            <label htmlFor="invested" className='text-[#8f8f8f]'>Invested</label>
            <input onChange={handleInput} placeholder="Invested" value={packag.invested} type="number" name="invested" id="invested" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            <small className='color-red text-sm'>{error.invested}</small>
            

            <label htmlFor="password" className='text-[#8f8f8f]'>ROI</label>
            <input onChange={handleInput} placeholder="ROI" value={packag.ROI} type="number" name="ROI" id="password" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            <small className='color-red text-sm'>{error.ROI}</small>

{/* 
            <label htmlFor="Address" className='text-[#8f8f8f]'>invest Id</label>
            <input onChange={handleInput} placeholder="invest Id" value={packag.investId} type="number" name="investId" id="Address" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            <small className='color-red text-sm'>{error.investId}</small> */}

            <input type="submit" value="Update Package" className='w-[20%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none' />
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}

export default EditInvestment
