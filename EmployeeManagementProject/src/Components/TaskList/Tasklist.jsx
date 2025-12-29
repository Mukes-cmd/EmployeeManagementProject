import React from 'react'
import Accept from './Accept'
import New from './New'
import Complete from './Complete'
import Failed from './Failed'

const Tasklist = ( {data}) => {
  return (
    <div id="flex" className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      {data.tasks.map((elem, idx)=>{
        if(elem.active){
          return <Accept key={idx} data={elem}/>
        }
        if(elem.newTask){
          return <New key={idx} data={elem}/>
        }
        if(elem.completed){
          return <Complete key={idx} data={elem}/>
        }
        if(elem.Failed){
          return <Failed key={idx} data={elem}/>
        }
      })}
          
           
          
    </div>
  )
}

export default Tasklist