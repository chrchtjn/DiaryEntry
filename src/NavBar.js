
import {Link} from "react-router-dom";
import './NavBar.css';

export default function Navbar(){

   return(
    
    <nav className="nav-bar">
        <ul>
            <li>
                <span className='title'>NAMEGOESHERE</span>
            </li>
            <li>
                <Link to='/Discover'>Discover</Link>
               <Link to='/Login'>Log In</Link>
            </li>
        </ul>
    </nav>

   );
};