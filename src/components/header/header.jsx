import logo from "../../img/logo.png"
import "./header.css"
import "../../font/Fredoka.ttf"
import { NavLink } from "react-router-dom"
function Header(){
    return(
        <header>
            <NavLink to="/">
            <img src={logo} alt="" />
            <h1> <span className="tip">tip</span> <span className="top">-top</span></h1>
            </NavLink>
        </header>
    )
}

export default Header