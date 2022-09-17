import React from "react";
import './skills.css'
import photo from '../../assets/Me At The Pool.jpg'

function skills(){
    return( 
        <div className="container mt-5">
            <div className="row card1">
                <div className="col-md-3 col-sm-12 text-center">
                    <div className="text-center display-1">85%</div>
                    <div className="display-6">HTML</div>
                </div>
                <div className="col-md-3 col-sm-12 text-center">
                    <div className="text-center display-1">70%</div>
                    <div className="display-6">CSS</div>
                </div>
                <div className="col-md-3 col-sm-12 text-center">
                    <div className="text-center display-1">65%</div>
                    <div className="display-6">JS</div>
                </div>
                <div className="col-md-3 col-sm-12 text-center">
                    <div className="text-center display-1">60%</div>
                    <div className="display-6">SQL</div>
                </div>
            </div>
        </div>
    )
}

export default skills;