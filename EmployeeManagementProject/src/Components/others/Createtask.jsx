import React, { useContext } from 'react'
import { useState } from 'react'
import Complete from '../TaskList/Complete'
import Failed from '../TaskList/Failed'
import { AuthContext } from '../../Context/AuthProvider'


const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

const [Task, setTask] = useState('')
const [Date, setDate] = useState('')
const [assignTo, setassignTo] = useState('')
const [Description, setDescription] = useState('')
const [Category, setCategory] = useState('')

const [newtask, setnewtask] = useState({})

const submitHandler = (e) => {
  e.preventDefault()

  const newTask = {
    task: Task,
    date: Date,
    assignTo,
    description: Description,
    category: Category,
    active: false,
    newTask: true,
    completed: false,
    failed: false
  }
setnewtask(newTask)
  const updatedData = [...userData]

  updatedData.forEach((user) => {
    if (assignTo === user.firstName) {
      user.tasks.push(newTask)
      user.taskCounts.newTask += 1
    }
  })

  setUserData(updatedData)
  console.log(updatedData)
}


  return (
    <div className="mt-7 p-6 bg-[#1c1c1c] rounded-lg">
  <form onSubmit = {(e)=>{
      submitHandler(e)
      console.log("task created")
  }} className="flex w-full justify-between gap-10">

    {/* LEFT SECTION */}
    <div className="w-1/2 space-y-4">

      <div>
        <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
        <input
        value = {Task}
          onChange={(e)=>{
            setTask(e.target.value)
          }}
          type="text"
          placeholder="Make a UI design"
          className="w-full text-sm px-3 py-2 rounded-md bg-transparent border border-gray-600 text-white outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <h3 className="text-sm text-gray-300 mb-1">Date</h3>
        <input
        value = {Date}
        onChange={(e)=>{
          setDate(e.target.value)
        }}
          type="date"
          className="w-full text-sm px-3 py-2 rounded-md bg-transparent border border-gray-600 text-white outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
        <input
        value = {assignTo}
        onChange={(e)=>{
          setassignTo(e.target.value)
        }}
          type="text"
          placeholder="employee name"
          className="w-full text-sm px-3 py-2 rounded-md bg-transparent border border-gray-600 text-white outline-none focus:border-emerald-500"
        />
      </div>

      <div>
        <h3 className="text-sm text-gray-300 mb-1">Category</h3>
        <input
        value = {Category}
        onChange={(e)=>{
          setCategory(e.target.value)
        }}
          type="text"
          placeholder="design, dev, etc"
          className="w-full text-sm px-3 py-2 rounded-md bg-transparent border border-gray-600 text-white outline-none focus:border-emerald-500"
        />
      </div>
    </div>

    {/* RIGHT SECTION */}
    <div className="w-1/2 flex flex-col justify-between">

      <div>
        <h3 className="text-sm text-gray-300 mb-1">Description</h3>
        <textarea
        value={Description}
        onChange={(e)=>{
          setDescription(e.target.value)
        }}
          rows="8"
          className="w-full resize-none text-sm px-3 py-2 rounded-md bg-transparent border border-gray-600 text-white outline-none focus:border-emerald-500"
        ></textarea>
      </div>

      <button
        className="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 transition text-black font-medium py-2 rounded-md"
      >
        Create Task
      </button>
    </div>

  </form>
</div>
  )
}

export default CreateTask