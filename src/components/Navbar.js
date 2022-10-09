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
            </BrowserRouter>



        </nav>
    );
}

export default Navbar;
