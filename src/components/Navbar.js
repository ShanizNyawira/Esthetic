import { NavLink, BrowserRouter } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar">

                <NavLink exact to="/" style={{textDecoration:'none'}}>
                    Esthetica
                </NavLink>
                <NavLink exact to="/add" style={{textDecoration:'none'}}>
                    Add
                </NavLink>
                <NavLink exact to="/about" style={{textDecoration:'none'}}>
                    About
                </NavLink>



        </nav>
    );
}

export default Navbar;
