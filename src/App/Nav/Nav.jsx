import React, { useState, useEffect } from 'react';
import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
//Variable, method
    const [showMenu, updateShowMenu] = useState(true);
    const [isSmall, updateIsSmall] = useState(true);


    const handleHamburgerClick = () => {
        // console.log('you hit the hamburger');
        let newShowMenu;
        if(showMenu === true){
            newShowMenu = false;
        } else{
            newShowMenu = true;
        }
        updateShowMenu(newShowMenu);
    }
     
    const handleIsSmall = () => {
        // console.log('how wide wondow', window.innerWidth, isSmall);

        if (window.innerWidth > 599) {
            updateIsSmall(false);
            updateShowMenu(true);
        } else{
            updateIsSmall(true);
            updateShowMenu(false);            
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleIsSmall);
        handleIsSmall(); //fire up when the page loads
    }, []);
    

    return (    
        <nav>
            {
            isSmall &&
           
            <div className="hamburger" onClick={ handleHamburgerClick }>
                <FontAwesomeIcon icon = { faBars }/>
            
            </div>
            }
            {
                showMenu &&
                <div className="links">
                    <a href="#">Welcome</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    
                </div>
            }  
            
        </nav>
    );    
}

export default Nav;
    