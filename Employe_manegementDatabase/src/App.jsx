import { useState } from 'react'
import './App.css'
import Create from './Create';

function App() {

  const [profile, setProfile] = useState([]);

  const [isToggle, setIsToggle] = useState(false);

  const addEmployee = (newEmployee) => {
    setProfile(prev => [...prev, newEmployee]);
  }

  let [index, setIndex] = useState(0);

  function changeIndex(ind) {
    setIndex(ind)
  }


  function deleteFn(ind){
    let filterdata = profile.filter((e,id)=> id != ind);
    setProfile(filterdata);
  }

  return (
    <div className='bg-[#000000] h-[100vh] relative p-5 text-lime-500'>
      <h1 className='border-b-2 border-lime-500 pb-6 text-2xl font-extrabold text-center text-lime-500 mb-5'>
        Employee Management System
      </h1>
      <button
        className='bg-lime-500 text-white font-semibold px-6 py-2 m-3 rounded'
        onClick={() => setIsToggle(true)}
      >
        Create Employee
      </button>

      {isToggle && (
        <Create setProfile={addEmployee} setIsToggle={setIsToggle} />
      )}

      {/* Left */}
      <div className='flex gap-5 border-2 r-double border-lime-500 mt-8'>
        <div className='border-r-2 w-1/2 p-5 border-lime-400 h-[75vh] overflow-y-scroll'>
          {profile.map((employee, ind) => (
            <div onClick={() => changeIndex(ind)} key={ind} className='bg-lime-500 text-white mb-3 flex items-center justify-between p-2 rounded cursor-pointer'>
              <h1 className='font-bold'>{ind+1}. {employee.fname} {employee.lname}</h1>
              <img className='h-8' src="https://cdn-icons-png.flaticon.com/128/458/458594.png" onClick={()=>deleteFn(ind)} alt="delete" title='delete' />
            </div>
          ))}
        </div>

        <div className='w-1/2 flex flex-col justify-center items-center p-5'>
          <h1 className='text-3xl font-bold mb-5'>Employee Details</h1>
          {profile.length > 0 ? (
            <>
              <img className='h-32 w-32  object-cover border-4 rounded-full border-lime-500' src={profile[index].url} alt="" />
              <h1 className='font-bold text-2xl mt-3'>{profile[index].fname} {profile[index].lname}</h1>
              <p className='bg-orange-500 px-2 text-white font-semibold rounded'>{profile[index].email}</p>
              <p className='text-center w-[80%] my-2'>{profile[index].bio}</p>
            </>
          ) : 'No User Found'}

          {
            profile.length > 0 &&

            <button className='bg-[#ff0000] duration-500 hover:bg-[#ff0000da] text-white font-semibold px-6 py-2 m-3 rounded' onClick={()=>deleteFn(index)}>
              Delete Employee
            </button>
          }
        </div>
      </div>
    </div>
  )
}

export default App;
