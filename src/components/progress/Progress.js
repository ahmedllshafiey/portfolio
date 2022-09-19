import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import './progress.css';


function Prog(){
    return(
        <div>
            <ProgressBar variant="danger" className="my-4" now={85} label={`${"HTML"}`} />
            <ProgressBar variant="warning" className="my-4" now={80} label={`${"CSS"}`} />
            <ProgressBar variant="success" className="my-4" now={70} label={`${"SASS"}`} />
            <ProgressBar variant="info" className="my-4" now={75} label={`${"JS"}`} />
        </div>
    )
}

export default Prog;