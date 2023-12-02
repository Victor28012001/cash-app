import { React, useState, useEffect } from 'react'
import AdminLayout from '../../layout/Admin/AdminLayout'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const EditPackages = (props) => {


  const navigate = useNavigate()
  const [packag, setPackage] = useState([])
  const [error, setError] = useState([])
  const [loading, setLoading] = useState(true)



  const { id } = useParams();


  useEffect(() => {
    axios.get(`/api/packages/${id}`)
      .then(res => {
        if(res.data.status === 200){
          setPackage(res.data.packages)
        }
        else if(res.data.status === 500){
          swal('Error', res.data.message, 'error');
          navigate('/AllPackages')
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

    axios.put(`/api/packages/${id}`, data)
      .then(res => {
        if(res.data.status === 200){
          swal("Success!", res.data.message, "success");
          navigate('/AllPackages')
        }
        else if(res.data.status === 500){
          navigate('/dashboard')
        }
        else if(res.data.status === 404){
          swal("Error!", res.data.message, "error");
          navigate('/AllPackages')
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

            <label htmlFor="f-name" className='text-[#8f8f8f]'>package name</label>
            <input onChange={handleInput} placeholder="package name" value={packag.name} type="text" name="name" id="f-name" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            <small className='color-red text-sm'>{error.name}</small>


            <label htmlFor="increase" className='text-[#8f8f8f]'>Increase</label>
            <input onChange={handleInput} placeholder="Increase" value={packag.increase} type="number" name="increase" id="increase" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            <small className='color-red text-sm'>{error.increase}</small>
            

            <label htmlFor="password" className='text-[#8f8f8f]'>Bonus</label>
            <input onChange={handleInput} placeholder="bonus" value={packag.bonus} type="number" name="bonus" id="password" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            <small className='color-red text-sm'>{error.bonus}</small>


            <label htmlFor="Address" className='text-[#8f8f8f]'>MIN</label>
            <input onChange={handleInput} placeholder="MIN" value={packag.MIN} type="number" name="MIN" id="Address" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            <small className='color-red text-sm'>{error.MIN}</small>



            <label htmlFor="Address" className='text-[#8f8f8f]'>MAX</label>
            <input onChange={handleInput} placeholder="MAX" value={packag.MAX} type="number" name="MAX" id="Address" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            <small className='color-red text-sm'>{error.MAX}</small>


            <label htmlFor="duration" className='text-[#8f8f8f]'>Duration</label>
            <input onChange={handleInput} placeholder="Duration" value={packag.duration} type="number" name="duration" id="duration" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />

            <input type="submit" value="Update Package" className='w-[20%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none' />
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}

export default EditPackages
