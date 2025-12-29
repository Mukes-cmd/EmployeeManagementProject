import Login from "./Components/Auth/Login"
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard"
import Header from './Components/others/Header'
// import { getLocalStorage, setLocalStorage } from "./Utile/LocalStorage"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./Context/AuthProvider"
// import { useEffect } from "react"


function App() {


  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)

  const [userdata, setUserData] = useContext(AuthContext)

    useEffect(() => {
      const loggedInUser = localStorage.getItem('loggedInUser')
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.rol)
        setloggedInUserData(userData.data)
      } 
    }, [])
    
  
  
   
 const handlerLogin = (email, password)=>{
       if(email=='admin@123.com' && password == '123'){
          setUser('admin')
           localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
       }else if(userdata){
        const employee = userdata.find((e)=> email == e.email && password == e.password )
        if(employee){
       setUser('employee')
       setloggedInUserData(employee)
       localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}))
        }
       }else{
        alert("invalid information")
       }
 }





  return (
    <>
   {!user ? <Login handlerLogin={handlerLogin}/>: ''}
   {user ==='admin' && <AdminDashboard changeUser={setUser}/>}

   {user =='employee' ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser}/> : null}
    </>
  )
}

export default App
