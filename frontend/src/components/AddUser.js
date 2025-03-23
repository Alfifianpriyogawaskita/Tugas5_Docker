import React,{useState} from 'react';
import axios from 'axios';
import {Navigate, useNavigate} from "react-router-dom";
import { BASE_URL } from "../utils";

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Laki");

    const saveUser = async (e) =>{
        e.preventDefault();
        try{
            await axios.post(`${BASE_URL}/users`,{
                name,
                email,
                gender
            })
            Navigate("/")
        }catch (eror){
            console.log(eror)
        }
    }


  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half"></div>
        <form onSubmit={saveUser}>
            <div className='field'>
                <label className="label">Name</label>
                <div className='control'>
                    <input type="text" className='input' value={name} onChange={(e)=> setName(e.target.value)} placeholder='name' />
                </div>
            </div>
            <div className='field'>
                <label className="label">Email</label>
                <div className='control'>
                    <input type="text" className='input' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='email' />
                </div>
            </div>
            <div className='field'>
                <label className="label">Gender</label>
                <div className='control'>
                    <div className="select is-fullwidth">
                        <select value={gender} onChange={(e)=> setGender(e.target.value)}>
                            <option value="male">laki</option>
                            <option value="female">cewek</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='field'>
                <button type='submit' className='button is-sucsses'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default AddUser
