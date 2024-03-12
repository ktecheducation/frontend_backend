import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
const [user,setuser]=useState([])
useEffect(()=>{
  axios.get("/api/user")
  .then((resdata)=>{
    setuser(resdata.data)
  })
  .catch((error)=>{
    console.log(error)
  })
})
  if(user.length>0)
  {
    return (
      <>
        <div className="overflow-x-auto">
    <table className="table">
  
      <thead>
        <tr>
          <th>user id</th>
          <th>user Name</th>
          <th>user course</th>
          <th>user stream</th>
        </tr>
      </thead>
      <tbody>
        {
          user.map((userdata)=>{
            return(
              <>
              <tr key={userdata.userid}>
                <td>{userdata.userid}</td>
                <td>{userdata.username}</td>
                <td>{userdata.course}</td>
                <td>{userdata.stream}</td>
              </tr>
              </>
            )
          })
        }
     
      </tbody>
    </table>
  </div>
      </>
    )
  }
  else
  {
    return(
      <>
        <h1>no data  found</h1>
      </>
    )
  }
 
}

export default App
