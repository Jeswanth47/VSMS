import React from 'react'

export const Login = () => {
  return (
    <div className='s4'>
        <label for="username">UserName</label>
        <input type="text" id="username" placeholder="Username" />
        <br></br>
        <div className='s4'>
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
        <br></br>
        <br></br>
      <a href="https://www.google.com">Forgot password?</a>
      </div>
      <div className='s4'>
       <button type="submit" id="sub">Login</button>
      </div>
      </div>
  )
}
