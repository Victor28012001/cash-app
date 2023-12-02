import {React, useState, useEffect} from 'react'
import AdminLayout from '../../layout/Admin/AdminLayout'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const Settings = () => {
  

  const navigate = useNavigate()
  const [settings, setSettings] = useState([])
  const [error, setError] = useState([])
  const [loading, setLoading] = useState(true)



  const id = 1;


  useEffect(() => {
    axios.get(`/api/settings/`)
      .then(res => {
        if(res.data.status === 200){
          setSettings(res.data.allSettings[0])
        }
        else if(res.data.status === 500){
          swal('Error', res.data.message, 'error');
          navigate('/AdminDashboard')
        }
        setLoading(false)
      })
  }, [id])

  const handleInput = (e) => {
    e.persist
    setSettings({ ...settings, [e.target.name]: e.target.value })
  }

  const makeUpdate = (e) => {
    e.preventDefault()
    const data = settings

    axios.put(`/api/settings/${id}`, data)
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

          <form action="" method="post" onSubmit={makeUpdate} className=" flex flex-col gap-[18px] w-[90%] py-[5px]">

            <label htmlFor="f-name" className='text-[#8f8f8f]'>Site URL</label>
            <input onChange={handleInput} value={settings.siteUrl} placeholder="First Name" type="text" name="f-name" id="f-name" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="siteName" className='text-[#8f8f8f]'>Name</label>
            <input onChange={handleInput} value={settings.siteName} placeholder="site Name" type="text" name="siteName" id="siteName" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="withdrawLimit" className='text-[#8f8f8f]'>Withdrawal Limit</label>
            <input onChange={handleInput} value={settings.withdrawLimit} placeholder="withdraw Limit" type="text" name="withdrawLimit" id="withdrawLimit" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="Address" className='text-[#8f8f8f]'>Registration Bonus</label>
            <input onChange={handleInput} value={settings.regBonus} placeholder="Contact Address" type="text" name="Address" id="Address" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="country" className='text-[#8f8f8f]'>Referral Bonus %</label>
            <input onChange={handleInput} value={settings.refBonus} placeholder="Home Country" type="text" name="country" id="country" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />
            
            
            <label htmlFor="siteEmail" className='text-[#8f8f8f]'>Site Email</label>
            <input onChange={handleInput} value={settings.siteEmail} placeholder="site Email" type="email" name="siteEmail" id="siteEmail" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="phone" className='text-[#8f8f8f]'>Phone</label>
            <input onChange={handleInput} value={settings.phone} placeholder="phone" type="tel" name="phone" id="phone" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="siteTitle" className='text-[#8f8f8f]'>Site Title</label>
            <input onChange={handleInput} value={settings.siteTitle} placeholder="site Title" type="text" name="siteTitle" id="siteTitle" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <label htmlFor="copyrightYear" className='text-[#8f8f8f]'>Copyright Year</label>
            <input onChange={handleInput} value={settings.copyrightYear} placeholder="copyright Year" type="text" name="copyrightYear" id="copyrightYear" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />

            <label htmlFor="country" className='text-[#8f8f8f]'>Logo</label>
            <img src={settings.logo} alt="" className='w-[140px] h-[140px] rounded-full bg-[#000]'/>
            
            <label htmlFor="logo" className='text-[#8f8f8f]'>Select New logo*</label>
            <input onChange={handleInput} value='' type="file" name="logo" id="logo" className='border-0 px-3 py-3 placeholder-blueGray-500 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


            <input type="submit" value="Update Settings" className='w-[20%] border-0 px-2 py-2 text-blueGray-600 relative bg-[#00abff] rounded text-sm shadow outline-none focus:outline-none' />
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}

export default Settings
