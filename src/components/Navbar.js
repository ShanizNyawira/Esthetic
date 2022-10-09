import { NavLink, BrowserRouter } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar">
            <BrowserRouter>
                <NavLink to="/">
                    Esthetica
                </NavLink>
                <NavLink to="/add">
                    Add
                </NavLink>
            </BrowserRouter>



        </nav>
    );
}

export default Navbar;
