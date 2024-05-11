import { useNavigate } from "react-router-dom";
import React from 'react'
const Home=()=>{
  const navigation=useNavigate();
  return(
    <div>
      <div className="button">
        <button onClick={()=>navigation('/create')}>Create</button>
        <button onClick={()=>navigation('/delete')}>Delete</button>
        <button onClick={()=>navigation('/update')}>Update</button>
        <button onClick={()=>navigation('/read')}>Display</button>
      </div>
    </div>
  )
}
export default Home