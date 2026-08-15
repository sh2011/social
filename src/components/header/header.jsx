import logo from "../../img/logo.png"
import "./header.css"
import "../../font/Fredoka.ttf"
function Header(){
    return(
        <header>
            <img src={logo} alt="" />
            <h1> <span className="tip">tip</span> <span className="top">-top</span></h1>
        </header>
    )
}

export default Header