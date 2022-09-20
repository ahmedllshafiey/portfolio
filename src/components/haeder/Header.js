import React from "react";
import './header.css'
import photo from '../../assets/Me At The Pool.jpg'



function Header(){
    return( 
        <div className="container mt-5">
            <div className="row card1">
                <div className="col-md-5 col-sm-12">
                    <img className="mypic" src={photo} alt="profile"></img>
                </div>
                <div className="col-md-6 col-sm-12">
                    <span className="myname display-1">I'm Ahmed Sayed</span>
                    <span className="about"><br/>I like ART of Programming/Medicine Making/Portrait</span>
                </div>
            </div>
        </div>
    )
}

export default Header;