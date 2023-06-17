import React from 'react'
import { useState } from "react";
import "./login.css"
import FormInput from './FormInput';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = async(e) => {
    e.preventDefault();
     const {username , password} = values;

     const res = await fetch('/signin' , {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })

     });

     const data = await res.json();

     if(res.status === 422 || !data){
        window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
     }else{
        window.alert("Login Succesful");
        console.log("Login Successful");
        navigate('MainScreen');
     }
       

  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
const navigate = useNavigate();
  return (
    <div className='login'>
    <div className='loginWrapper'>
    <div className='header'></div>
       
            <div className='loginStart'>
            <form  method='POST' >
            
            {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
            <div className='loginEnd'>
            <button className='SignInButton' type='Submit' onClick={handleSubmit}>Login</button>
            <p className='passwordForgot'>Forgot Password?</p>
            </div>
            
            </form>
            </div>
          
            <p>Not yet Registered? Register as</p>
            <div className='registerButtons'>
            <button className='RegisterButton' onClick={()=>{
              navigate('Register');
            }}>Company SPOC</button>
            <button className='RegisterButton'>College SPOC</button>
            <button className='RegisterButton'>Student</button>
           
            </div>

        </div>
    </div>

  );
}

export default Login