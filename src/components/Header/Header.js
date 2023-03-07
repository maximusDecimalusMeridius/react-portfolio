import React from 'react';
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({page, setPage}){

    return(
        <header>
            <div className="header-title">Andy Gaudy</div>
            <Navigation page={page} setPage={setPage}/>
        </header>
    );
};

export default Header;