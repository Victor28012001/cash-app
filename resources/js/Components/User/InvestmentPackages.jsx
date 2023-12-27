import { React, useState, useEffect } from 'react'
import Layout from '../../layout/Admin/Layout'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const InvestmentPackages = () => {
  const navigate = useNavigate();  
  const { id } = useParams()  
  const [packages, setPackages] = useState([])
  const [packag, setPackag] = useState({})
  const [validationError,setValidationError] = useState({})  


  useEffect(() => {
    const fetchApi = async () => {
      await axios.get("http://localhost:8000/api/packages/")
        .then(res => res)
        .then(res => {
          setPackages(res.data.allpackages)
          console.log(packages)
        }
        )
        .catch(() => {
          console.log('ok')
        });
    }

    fetchApi()
  }, [])

  console.log(packages)


  
  const handleInput = (e) => {
    e.persist
    setPackag({ ...packag, [e.target.name]: e.target.value })
  }



  const updatePackage = async (e, id) => {
    e.preventDefault();    


    await axios.get(`http://localhost:8000/api/packages/${id}`).then((res)=>{
      if(res.data.status === 200){
        setPackag(res.data.packages)
        console.log('ok1')
      }
      else if(res.data.status === 500){
        swal('Error', res.data.message, 'error');
        navigate('/ManageUsers')
      }})

      const packageName = packag.name
      const invested = packag.invested
      const increase = packag.increase


      // const formData = new FormData()    
      // formData.append('packageName', packageName)
      // formData.append('invested', invested)
      // formData.append('increase', increase)

      // console.log(formData)

      const investment = {
        name: packageName,
        invested: invested,
        increase: increase
      }

      console.log(investment)


      await axios.post(`http://localhost:8000/api/investments`, investment).then((res)=>{
      swal("Success!", res.data.message, "success");
      console.log(res)
      navigate(`/Package/${id}`)
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        swal('Error', response.data.message, 'error');
      }
    })
  }



  return (
    <Layout>
      <div className=' bg-[#f0f0f0] py-[15px] h-full'>
        <div className='flex flex-wrap px-[15px] gap-[20px]'>
        {packages.map((item) => (<div key={item.id} className="cont w-[30%] text-bold m-[20px] flex flex-col items-center justify-around border-0 px-3 py-3 text-blueGray-600 relative bg-white bg-white rounded-[15px] text-sm shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] pl-10">

            <form action="" method="post" encType="multipart/form-data" onSubmit={(e) => updatePackage(e, item.id)} className=" flex flex-col gap-[28px] w-[90%] py-[5px]">

              <h2 className='text-xl leading-6 font-bold text-slate-900'>{item.name}</h2>

              <hr />

              <h2 className='text-4xl font-bold text-slate-900 tracking-tighter'>{item.increase}% <span className='font-bold text-lg text-[#d0d0d0]'>daily profit</span></h2>

              <ul className='font-bold text-md text-[#d0d0d0]'>
                <li>{item.duration} Days Investment</li>
                <li>${item.bonus} Purchase Bonus</li>
                <li>${item.MIN} MIN</li>
                <li>${item.MAX} MAX</li>
              </ul>

              <input type="number" onChange={handleInput} placeholder='Amount to Invest' name="invested" id="invested" className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10' />


              <input type="submit" value="Select Plan" className='mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center' />
            </form>
          </div>))}
        </div>
      </div>
    </Layout>
  )
}

export default InvestmentPackages
