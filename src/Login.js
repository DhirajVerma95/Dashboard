import React, { useState } from 'react'
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const checkLogin = (e) =>{
    e.preventDefault();
    if(email === "admin" && password === "password"){
      return true;
    }
    else{
      return false;
    }
  }


  return (
    <>
      <div className='maincontainer'>
        <form action=''  onSubmit={checkLogin}>
          <div className='inputEmail'>
            <label htmlFor='email'>Email</label>
            <input type="text" name="email" id="email" required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
          </div>
          <div className='inputPassword'>
            <label htmlFor='password'>Password</label>
            <input type="text" name="password" id="password" required value={password} onChange={(e)=>setPassword(e.target.value)}></input>
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    </>
  )
}

export default Login