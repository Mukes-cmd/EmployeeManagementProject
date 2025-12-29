import React from 'react'

const Accept = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center '>
                  <h3 className='text-sm text-white bg-red-600  px-3 py-1 rounded-sm '>{data.category}</h3>
                  <h4 className='text-sm text-white '>{data.taskDate}</h4>
                </div>
                  <h1 className='mt-5 text-2xl text-white font-semibold'>{data.taskTitle}</h1>
                
                <p className='text-sm text-white mt-2'>{data.description}</p>
                <div className='flex justify-between mt-4'>
                    <button className='bg-green-500 px-1 py-2 text-sm rounded-sm'>Mark as Completed</button>
                    <button className='bg-red-500 px-1 py-2 text-sm rounded-sm'> Mark as Failed</button>
                </div>
            </div>
  )
}

export default Accept