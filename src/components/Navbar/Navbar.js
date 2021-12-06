import React from 'react';
import { Nav, NavLink, NavIcon, Bars, SearchBar, LoginUser, AddToCart} from './NavbarElements';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavLink to='/'>
               PrintAmaze
            </NavLink>
            <NavIcon>
                <Link to="/LoginContainer">
                  <LoginUser title="Login/Register" />
                </Link>
                <Link to="/SearchContainer" >
                  <SearchBar />
                </Link>
                <AddToCart />
              <Bars onClick={toggle}/>
            </NavIcon>
        </Nav>
        </>
    );
};

export default Navbar;
