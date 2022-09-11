import React from 'react'

export const Signup = () => {
  return (
    <div>
      <form>
      <div className='k1'>
        <label for="name">Name</label>
        <input id="name" type="text" placeholder="Enter your name" />
      </div>
      <div className='k1'>
        <label for="g-mail">E-mail</label>
        <input id="g-mail" type="email" placeholder="Enter your e-mail" />
      </div>
      <div className='k1'>
        <label for="age">Mobile Number</label>
        <input id="age" type="number" placeholder="Enter your Mobile Number" />
      </div>
      <div className='k1'>
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Password" />
      </div>
      <div className='k1'>
      <label for="password">Repeat Password</label>
      <input type="password" id="password" placeholder="Password" />
      </div>
      <br></br>
      <div></div>
      <div>
      <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}
