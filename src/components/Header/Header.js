import React from "react";
import {Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
    return ( 
        <div className="Container">
            <Nav>
                <NavMenu>
                    <NavLink className="menu-item"  to="projects" smooth={true}>
                        Projects
                    </NavLink>
                    <NavLink className="menu-item" to="about" smooth={true}>
                        About
                    </NavLink>
                    <NavLink className="menu-item"  to="contact" smooth={true}>
                        Contact
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <a
                        className="btn PrimaryBtn"
                        href="https://github.com/Doug-Coder64/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </NavBtn>
                <bars onClick={toggle}/>
            </Nav>
        </div>
    );
}

export default Header;