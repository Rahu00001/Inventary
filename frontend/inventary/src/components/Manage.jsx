import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Manage =()=>{
    let navigation=useNavigate();
    let [state,setState]=useState({});
    let [error,setError]=useState(false);
    const defaultItem={
        id:'',
        name:'',
        quantity:'',
        cost:''
    }
    let type=window.location.pathname==='/update'?"update":"create";
    const handleChange=(e)=>{
        setState(prev=>({...prev,[e.target.name]: e.target.value}))
    }
    useEffect(()=>{
        axios.get(`http://localhost:5000/getItemById?id=${state?.id}`).then(res=>{
            console.log(res.data);
            if(type==="update"){
                if(res.data.length >0){
                    setState(prev=>(res.data?.[0]))
                }else{
                    setState(prev=>defaultItem)
                }
            }else{
                if(res.data.length >0){
                    setError(true)
                }else{
                    setError(false)
                }
            }
        }
        
    ).catch(err=>console.log(err))},[state?.id])
    const submit=()=>{
        if(type==="update"){
            axios.put("http://localhost:5000/updateItem",state).then(res=>alert("Updated")).catch((e)=>console.log(e))
        }else{
            axios.post("http://localhost:5000/createItem",state)
            .then(res=>{
                alert("Inserted");
                setState(defaultItem);}
            )
            
        }
    }
    console.log(state,error)
    return(
       
            <form onSubmit={e=>{e.preventDefault();submit()}} method='post'>
            <label>Id</label>
            <input name='id' value={state?.id} onChange={(e)=>handleChange(e)}></input>
            <label>Name</label>
            <input name='name' value={state?.name} onChange={(e)=>handleChange(e)}></input>
            <label>Quantity</label>
            <input name='quantity' value={state?.quantity} onChange={(e)=>handleChange(e)}></input>
            <label>cost</label>
            <input name='cost' value={state?.cost} onChange={(e)=>handleChange(e)}></input>
            <input type="submit" value="submit" disabled={error}></input>
            <input type="submit" value="home" onClick={()=>navigation('/home')}></input>
            </form>
            
      
    )
}

export default Manage