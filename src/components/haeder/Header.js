import React from "react";
import './header.css'
import photo from '../../assets/Me At The Pool.jpg'

function Header(){
    return( 
        <div className="container">
                <div className="row">
                <div className="col-md-6 col-sm-12 text-center">
                    <div className="info text-center">
                        Hi,I'm<br/>Ahmed<br/>Sayed
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 text-center">
                    <img className="img text-center" src={photo}></img>
                </div>
            </div>
        </div>
    )
}

export default Header;