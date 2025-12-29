import { useState } from "react"

const Login = ({handlerLogin}) => {

 

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = ((e)=>{
              e.preventDefault()
              handlerLogin(email, password)
               setemail('')
               setpassword('')
    })
    
  return (
    <div className='flex h-screen w-full items-center justify-center bg-black'>
        <div className='border-2 rounded-xl border-emerald-700 p-20'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                  <input  
                  value = {email} 
                  onChange={(e)=>{
                       setemail(e.target.value)
                  }}
                  required 
                  className=' text-white outline-none bg-transparent border-2 border-emerald-700 text-xl py-3 px-5  rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your eamil'/>
                  <input 
                  value = {password}
                  onChange={(e)=>{
                    setpassword(e.target.value)
                  }}
                  required className='text-white outline-none bg-transparent border-2 border-emerald-700 text-xl py-3 px-5  rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter your password'/>
                  <button className='mt-5 hover:scale-95  text-white border-none outline-none py-3 px-5 rounded-full bg-emerald-700 shadow-lg shadow-emerald-500/50 placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )

}


export default Login