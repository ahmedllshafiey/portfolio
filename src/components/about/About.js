import React from "react";
import './about.css'
import photo from '../../assets/Me At The Pool.jpg'

function about(){
    return( 
        <div className="container mt-5">
            <div className="row card1">
                <div className="col-md-3 col-sm-12 text-center">
                    <div className="text-center display-1">85%</div>
                    <div className="display-6 text-center">ART</div>
                </div>
                <div className="col-md-3 col-sm-12 text-center">
                    <div className="text-center display-1">70%</div>
                    <div className="display-6 text-center">SCI</div>
                </div>
                <div className="col-md-3 col-sm-12 text-center">
                    <div className="text-center display-1">65%</div>
                    <div className="display-6 text-center">C</div>
                </div>
                <div className="col-md-3 col-sm-12 text-center">
                    <div className="text-center display-1">60%</div>
                    <div className="display-6 text-center">H<sub>2</sub></div>
                </div>
            </div>
        </div>
    )
}

export default about;