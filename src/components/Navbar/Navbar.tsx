import React from "react";
import './Navbar.css';
import Button from "../Button/Button";
function Navbar(){
    return(
        <nav className="Nav">
            <div className="title">
                <a>
                  titulo  
                </a>
            </div>
            <section className="display-menu">
            </section>
        </nav>
        /*<header className="nav-header">
            <Button />
            <a>Brayan Ramon Cisneros Manriquez</a>
        </header>*/
    );
}
export default Navbar;