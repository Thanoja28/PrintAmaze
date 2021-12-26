import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css';


function Navbar1() {
    const [click, setclick] = useState(false);
    const [Button, setButton] = useState('true');
    const handleClick = () => {setclick(!click)};
    const closeMobileMenu = () => {setclick(false)};
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton('false');
        } else {
            setButton('true');
        }
    };
// eslint-disable-next-line
const useEffect = (() => {
        showButton()
   }, [ ]);

window.addEventListener('resize', showButton);

    return (
        <div>
            <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to = '/' className= "navbar-logo">
                        PrintAmaze
                        <i class="fab fa-artstation"></i>
                    </Link>
                    <div className="menu-icon" onClick = {handleClick} >
                        <i className = { click ? 'fas fa-times': 'fas fa-bars' } />
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'} >
                        <li className = "nav-item" >
                        <Link to = '/' className = "nav-links" onClick = {closeMobileMenu} >
                            Home
                        </Link>
                        </li>

                        <li className = "nav-item" >
                        <Link to = '/about' className = "nav-links" onClick = {closeMobileMenu} >
                            About
                        </Link>
                        </li>

                        <li className = "nav-item" >
                        <Link to = '/contact' className = "nav-links" onClick = {closeMobileMenu} >
                           Contact
                        </Link>
                        </li>

                        <li className = "nav-item" >
                        <Link to = '/projects' className = "nav-links-mobile" onClick = {closeMobileMenu} >
                            Projects
                        </Link>
                        </li>
                    </ul>
                    {Button && <Button ButtonStyle ="btn--outline">
                        Projects
                    </Button> }
                </div>
            </nav>
            </>
        </div>
    )
}


export default Navbar1;
