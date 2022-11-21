import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import './Navigation.css';



export const OuterNavigation = () => {
  
    return (
        <div className='navigation'>

          <Logo/>


          <Link className="link" to='/login' >Login</Link>
          <Link className="link" to='/register' >Register</Link>

  
        </div>

  
    )
}