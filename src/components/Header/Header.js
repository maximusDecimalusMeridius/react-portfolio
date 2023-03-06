import React from 'react';
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({setPage}){

    return(
        <header>
            <div className="header-title">Andy Gaudy</div>
            <Navigation setPage={setPage}/>
        </header>
    );
};

export default Header;