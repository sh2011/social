import { NavLink } from "react-router-dom"
import "./navbar.css"
function Navbar(){
    return(
        <nav>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/messages">Messages</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/users">Feed</NavLink>
            <NavLink to="/users">Friends</NavLink>
        </nav>
    )
}

export default Navbar