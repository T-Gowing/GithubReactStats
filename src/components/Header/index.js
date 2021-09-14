import React from 'react';
import { SearchForm } from '..';
import './style.css'

function Header() {
    return(
        <div>
            <header>
            <img src="https://i.ibb.co/cvSyn4p/thing.jpg" alt="thing" border="0"/>
            <SearchForm/>
            </header>
        </div>
    )

}

export default Header;