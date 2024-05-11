import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
const Read=()=>{
    let navigation=useNavigate();
    let [state,setState]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/getAllItem').then((res)=>setState(()=>res.data)).catch((e)=>console.log(e))
    },[])
    return(
        <div>
            <table>
                <tr>
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>quantity</th>
                        <th>Cost</th>
                    </thead>
                </tr>
                <tbody>
                    {state.map((item)=>{
                        return(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.cost}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            <input type='submit' value="home" onClick={()=>navigation('/home')}></input>
        </div>
    )
}
export default Read