import {NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='s1'>
        <div className='s2'>
        <h1>Welcome to Vehicle Service</h1>
        </div>
        <NavLink to='/login' className='s3'>Login</NavLink>
        <NavLink to='/signup'>Signup</NavLink>
    </nav>
 )
}
