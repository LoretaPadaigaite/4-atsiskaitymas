import { Link, Outlet } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import './Navigation.css';



export const Navigation = () => {
    return (
        <div className='navigation'>

          <Logo/>

          <Link className="link" to='/login' >Login</Link>
          <Link className="link" to='/register' >Register</Link>
          <Link className="link" to='/' >Home</Link>
          <Link className="link" to='/add' >Add</Link>

          <Outlet/>
  
        </div>
    )
}