import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import axios from 'axios';
const Delete=()=>{
    const [state,setState]=useState({id:''})
    const navigation=useNavigate();
    const deleteItem=()=>{
        axios.delete(`http://localhost:5000/deleteItem?id=${state.id}`).then(()=>alert("Deleted")).catch(e=>console.log(e))
    }
    return(
        <>
           
            <label>
                Id:
            </label>
            <input name='id' value={state?.id} onChange={(e)=>setState({id:e.target.value})} required />
            <input type="submit" value='delete' disabled={!state.id} onClick={deleteItem}></input>
            
            <input type="submit" value='Home' onClick={()=>navigation('/home')}></input>
        </>
    )
}
export default Delete
