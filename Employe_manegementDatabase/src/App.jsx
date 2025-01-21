import { useState } from 'react'
import './App.css'
import Create from './Create';

function App() {

  let data = [
    {
      fname: '',
      lname: '',
      bio: '',
      email: '',
      url: '',
    }
  ]


  let [profile, setProfile] = useState(data);




  let [isToggle, setIsToggle] = useState(false)



  return (
    <div className='bg-[#000000] h-[100vh] relative p-5 text-lime-500' >
      <h1 className='border-b-2 border-lime-500 pb-6 text-2xl font-extrabold text-center text-lime-500 mb-5 '>Employee Management system</h1>
      <buttonnpm 
       className='bg-lime-500 text-white font-semibold px-6 py-2 m-3 rounded'
       onClick={()=>setIsToggle(true)}
       >Create Employe</buttonnpm>




      <div style={{ visibility: isToggle ? 'visible' : 'hidden' }}>
        <Create profile={profile} setProfile={setProfile} setIsToggle={setIsToggle} />
      </div>


      {/* Left */}
      <div className='flex gap-5 border-2 r-double border-lime-500 mt-8'>
        <div className='border-r-2 w-1/2 p-5  border-lime-400'>
          <div className='bg-lime-500 text-white mb-3 flex items-center justify-between p-2 rounded cursor-pointer'>
            <h1 className='font-bold'>1. User name</h1>
            <img className='h-8' src="https://cdn-icons-png.flaticon.com/128/458/458594.png" alt="delete" title='delete' />
          </div>

        </div>

        {/* right frame */}
        <div className='w-1/2 flex flex-col justify-center items-center p-5'>
          <img className='h-32 w-auto border-4 rounded-full border-lime-500' src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" />
          <h1 className='font-bold  text-2xl mt-3'>User name</h1>
          <p className='bg-orange-500 px-2 text-white font-semibold rounded'>email@email.com</p>
          <p className='text-center w-[80%] my-2'> doloribus tenetur reiciendis mollitia quo natus ut laborum eum modi, dolorum vitae conse nesciunt perspiciatis a vel? ipsum dolor sit amet consectetur,  n harum omnis, porro labore sequi recusandae.</p>

          <button className='bg-[#ff0000] duration-500 hover:bg-[#ff0000da] text-white font-semibold px-6 py-2 m-3 rounded'>Delete Employe</button>

        </div>
      </div>
    </div>
  )
}

export default App
