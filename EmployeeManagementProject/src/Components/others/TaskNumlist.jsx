import React from 'react'

const TaskNumlist = ({data}) => {

  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
            <h2 className='text-3xl font-semibold text-white'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium text-white'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-800'>
            <h2 className='text-3xl font-semibold text-white'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium text-white'>Complete Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-emerald-700'>
            <h2 className='text-3xl font-semibold text-white'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium text-white'>Accept Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-amber-900'>
            <h2 className='text-3xl font-semibold text-white'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium text-white'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskNumlist