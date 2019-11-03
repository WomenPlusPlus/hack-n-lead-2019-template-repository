import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



const StyledHeader = styled.div`
    display: flex;
    width: 100%;
    background-color: transparent;
    padding: .5rem 1rem;
`;

const Logo = styled.div`
    width: 50%;
    color: white;
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif; 
    /* font-family: 'Indie Flower', cursive; */
    font-weight: 600;
    font-style: normal;
    font-size: 30px;
    line-height: 1.2em;
    letter-spacing: .14em;
    text-transform: none;
  
    @media(max-width: 600px) {
        display: none;
    }
`;

const Nav = styled.ul`
    float: right;
    display: flex;
    justify-content: flex-end;
    width: 50%;
    margin: 0;
    padding-left: 0;
    @media(max-width: 600px) {
        width: 100%;
    }
`;

const NavItem = styled.li`
    list-style: none;
    padding: 1em; 
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    text-decoration: none;
    color: #a6a6a6;
    :hover {
        color: #1f1f2e; 
        transition: all .5s ease-in-out;
    }
    
`;

class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <Logo>Ask Ravi</Logo>
                <Nav>
                    <NavLink
                        style={{ textDecoration: 'none' }} exact to="/"><NavItem>Home</NavItem></NavLink>
                    
                    <NavLink activeStyle={{
                        fontWeight: "bold"
                    }}
                        style={{ textDecoration: 'none' }} to="/about"><NavItem>About</NavItem></NavLink>
                    {/* <NavLink activeStyle={{
                        fontWeight: "bold"
                    }}
                        style={{ textDecoration: 'none' }} to="/contact"><NavItem>Contact</NavItem></NavLink> */}
                </Nav>
            </StyledHeader>
        )
    }
}

export default Header;