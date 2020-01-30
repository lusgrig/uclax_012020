import React from 'react';
import './Main.scss';
import {Switch, Route} from 'react-router-dom';
import Welcome from '../Pages/Welcome.jsx';
import Contact from '../Pages/Contact.jsx';
import Services from '../Pages/Services.jsx';



const Main = () => {
    return (

        <main className='Main'>

        <Switch>
            
            <Route path='/Services'>
                <Services />
            </Route>
            <Route path='/Contact'>
                <Contact />
            </Route>
            <Route path='/'>
                <Welcome />
            </Route>

        </Switch>
        
        </main>
    )
};

export default Main;