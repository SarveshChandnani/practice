import React, { useState } from 'react'
import './AdminLogin.css';
import FormInput from '../login/FormInput';
import Topbar from '../../Components/Topbar';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    const navigate = useNavigate();
   const handleSubmit = async (e)=>{
       
        const email = adminEmail;
        const password = adminPassword;

        if(email === "admin60@gmail.com" && password === "ICONNECTI@"){
            console.log("hiiiiiiiiiiiiiii");
            navigate('AdminPage');
            
        }else{
            
            window.alert("Invalid Credentials");
        }
    }
   
    const [adminEmail , setEmail] = useState("");
    const [adminPassword , setPassword] = useState("");
    
    console.log(adminEmail);
  return (
    <div className='outer'>
    <Topbar/>
    <div className='login'>
    
    <div className='loginWrapper'>
    <div className='header'></div>
       
            <div className='loginStart'>
            <form   >
            
         

            <input  placeholder='Enter admin Email' onChange={(e)=> setEmail(e.target.value)}/>
            <input  placeholder='Enter admin Password' type = "password" onChange={(e)=> setPassword(e.target.value)}/>

            <div className='loginEnd'>
            <button className='SignInButton'  onClick={handleSubmit}>Login</button>
            <p className='passwordForgot'>Forgot Password?</p>
            </div>
            
            </form>
            </div>
          
           
           

        </div>
    </div>
    </div>
  )
}

export default AdminLogin