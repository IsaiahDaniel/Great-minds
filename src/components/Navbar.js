import React, { useState } from 'react';
import styled from "styled-components";
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import GreatMindsLogo from "../assets/great-minds-logo-2.png";

const Navbar = () => {

    const [click, setClick] = useState(false);

    const setHamburgerIcon = () => {
        setClick(!click);
    } 

    return (
        <NavBar>
            <div className="container">
                <div className="flex-row">
                    <Logo to="/" style={{ display: "flex", alignItems: "center" }}>
                        <img src={GreatMindsLogo} alt="" />
                        {/* <h2>GreatMinds</h2> */}
                    </Logo>


                    <NavList>
                        <NavItem>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/insights">Insights</NavLink>
                        </NavItem>
                    </NavList>
                    <MobileNav onClick={setHamburgerIcon} click={click}>
                        <NavItem>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/insights">Insights</NavLink>
                        </NavItem>
                    </MobileNav>
                    <MobileIcon onClick={setHamburgerIcon}>
                        { click ? <FaTimes /> : <FaBars />  }
                    </MobileIcon>
                </div>
            </div>
        </NavBar>
    )
}

const NavBar = styled.nav`
    height: 120px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15 );
    /* position: fixed; */
    width: 100%;
    z-index: 100;
`;

const Logo = styled(Link)`
    color: #333;
    width: 150px;
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 900px){
        display: none;
    }

`;

const NavItem = styled.li`
    padding: 0 30px;
`;

const MobileIcon = styled.div`
    display: none;
    font-size: 34px;
    cursor: pointer;

    @media(max-width: 960px){
        display: block;
    }

`;

const MobileNav = styled.nav`
    display: none;
    font-size: 30px;
    position: absolute;
    top: 120px;
    left: ${({ click }) => click ? "0px" : "-100%"};
    width: 100%;
    background: #eee;
    border-bottom: 1px solid #ccc;
    text-align: center;
    list-style: none;
    transition: all 0.5s ease-in;

    @media(max-width: 900px){
        display: block;
    }

`

export default Navbar;