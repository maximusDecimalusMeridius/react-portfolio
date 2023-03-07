import React from 'react';
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({page, setPage}){

    return(
        <header>
            <h1 className="header-title">Andy Gaudy's Portfolio</h1>
            <Navigation page={page} setPage={setPage}/>
        </header>
    );
};

export default Header;