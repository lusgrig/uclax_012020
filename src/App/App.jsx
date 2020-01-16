// React library
import React from 'react';

// App component Styles
import './App.scss';

// My Components
import Header from './Header/Header.jsx';
import Nav from './Nav/Nav.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';

const App = () => {
    return (
        <div className='App'>
    
            <Header />
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}

export default App;