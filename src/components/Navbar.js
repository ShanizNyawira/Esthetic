import { NavLink, BrowserRouter } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar">
            <BrowserRouter>
                <NavLink exact to="/" style={{textDecoration:'none'}}>
                    Esthetica
                </NavLink>
                <NavLink exact to="/add" style={{textDecoration:'none'}}>
                    Add
                </NavLink>
                <NavLink exact to="/about" style={{textDecoration:'none'}}>
                    About
                </NavLink>
            </BrowserRouter>



        </nav>
    );
}

export default Navbar;
