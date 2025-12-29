import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

   const [userData, setuserData] = useContext(AuthContext)
  return (
    <div id="flex" className='bg-[#1c1c1c] p-5 rounded mt-5 '>
         <div className='bg-red-400 py-2 px-4 mb-2 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h2 className='text-lg font-medium w-1/5 '>New Task</h2>
            <h3 className='text-lg font-medium w-1/5 '>Active Task</h3>
            <h3 className='text-lg font-medium w-1/5 '>Completed</h3>
            <h3 className='text-lg font-medium w-1/5 '>Failed</h3>
         </div>
           
           <div id='flex'>
            {userData.map(function(elem, idx){
               return    <div key = {idx} className=' border-2 bg-emerald-500 py-2 px-4 mb-2 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 text-blue-600'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-yellow-600'>{elem.taskNumbers.active}</h3>
            <h3 className='text-lg font-medium w-1/5 text-white-600'>{elem.taskNumbers.newTask}</h3>
            <h3 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumbers.completed}</h3>
            <h3 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumbers.failed}</h3>
           
            
         </div>
               
            })}
           </div>
         
        
         
         
    </div>
  )
}

export default AllTask