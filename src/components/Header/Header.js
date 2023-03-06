import React from 'react';
import Navigation from "../Navigation/Navigation";
import "./style.css";

function Header(props){
    return(
        <header>
            <div class="header-title">Andy Gaudy</div>
            <Navigation setPage={props.setPage}/>
        </header>
    );
};

export default Header;