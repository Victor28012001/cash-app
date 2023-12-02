import { React, useState, useEffect } from 'react'
import AdminLayout from '../../layout/Admin/AdminLayout'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';


const EditUsers = (props) => {


  const navigate = useNavigate()
  const [user, setUser] = useState([])
  const [error, setError] = useState([])
  const [loading, setLoading] = useState(true)



  const { id } = useParams();


  useEffect(() => {
    axios.get(`/api/users/${id}`)
      .then(res => {
        if(res.data.status === 200){
          setUser(res.data.user)
        }
        else if(res.data.status === 500){
          swal('Error', res.data.message, 'error');
          navigate('/ManageUsers')
        }
        setLoading(false)
      })
  }, [id])

  const handleInput = (e) => {
    e.persist
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const makeUpdate = (e) => {
    e.preventDefault()
    const data = user

    axios.put(`/api/users/${id}`, data)
      .then(res => {
        if(res.data.status === 200){
          swal("Success!", res.data.message, "success");
          navigate('/AllPackages')
        }
        else if(res.data.status === 500){
          navigate('/AllPackages')
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

            <label htmlFor="f-name" className='text-[#8f8f8f]'>Username</label>
            <input onChange={handleInput} placeholder="Username" value={user.username} type="text" name="username" id="f-name" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            <small className='color-red text-sm'>{error.username}</small>


            <label htmlFor="email" className='text-[#8f8f8f]'>Email</label>
            <input onChange={handleInput} placeholder="Email" value={user.email} type="email" name="email" id="email" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            <small className='color-red text-sm'>{error.email}</small>
            

            <label htmlFor="password" className='text-[#8f8f8f]'>refferal Bonus</label>
            <input onChange={handleInput} placeholder="refferal" value={user.refbonus} type="text" name="refbonus" id="password" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            <small className='color-red text-sm'>{error.refbonus}</small>


            <label htmlFor="Address" className='text-[#8f8f8f]'>Wallet Balance</label>
            <input onChange={handleInput} placeholder="Balance" value={user.balance} type="text" name="balance" id="Address" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            <small className='color-red text-sm'>{error.balance}</small>


            <label htmlFor="regDate" className='text-[#8f8f8f]'>Reg. Date</label>
            <input onChange={handleInput} placeholder="Reg. Date" value={user.regDate} type="dateTime" name="regDate" id="regDate" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />

            <input type="submit" value="Update Profile" className='w-[20%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none' />
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}

export default EditUsers
