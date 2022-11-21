import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import './Navigation.css';

export const InnerNavigation = () => {
  
    return (
        <div className='navigation'>

          <Logo/>

          <Link className="link" to='/' >Home</Link>
          <Link className="link" to='/add' >Add</Link>
  
        </div>
    )
}