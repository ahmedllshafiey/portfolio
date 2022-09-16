import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'

function Nav(){
    return(
        <div>
            <ul className='list'>
                <span className='logo'>Ahmed's</span>
                <li className='nav-li'><a href='#'>Contact</a></li>
                <li className='nav-li'><a href='#'>About Me</a></li>
                <li className='nav-li'><a href='#'>Home Page</a></li>
            </ul>             
        </div>
    )
}

export default Nav;