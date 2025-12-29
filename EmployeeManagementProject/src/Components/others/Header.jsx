import React from 'react'

const Header = (props) => {


  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser()
  }
 
  return (
    <div className='flex justify-between text-white '>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>username👋</span></h1>
        <button onClick={logOutUser} className="bg-indigo-500 shadow-lg shadow-indigo-500/50 ...  py-2 px-5 h-10 rounded-xl font-semibold hover:scale-95">LogOut</button>
    </div>
  )
}

export default Header