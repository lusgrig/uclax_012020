import React, { useState, useEffect } from 'react';
import './Nav.scss';
import {NavLink} from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
const [showMenu, updateShowMenu] = useState(false);

const handleHamburgerClick =()=>{
    console.log("clicked");
    if (showMenu === false){
        updateShowMenu(true);

    } else {
        updateShowMenu(false);
    }

}
const handleWindowResize = ()=>{
    if (window.innerWidth >599){
        updateShowMenu(true)
    } else {
        updateShowMenu(false);    
    }
}
useEffect(()=>{
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
},[]);


    return (    
        <nav>
           
           
            <div className="hamburger" onClick={ handleHamburgerClick }>
                <FontAwesomeIcon icon = { faBars }/>
            
            </div>
           {
               showMenu &&
           
                <div className="links">
                    <NavLink to="/" exact>Welcome</NavLink>
                    <NavLink to="/Services">About</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>

                   
                    
                </div>
            
            }
        </nav>
    );    
}

export default Nav;
    