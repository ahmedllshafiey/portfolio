import React from "react";
import './progress.css';


function Prog(){
    return(
        <div>
            <div class="container">

                <div class="container__progressbars">

                <div class="progressbar">
                    <svg class="progressbar__svg">
                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-html shadow-html"> </circle>
                    </svg>
                    <span class="progressbar__text shadow-html">HTML</span>
                </div>

                <div class="progressbar">
                    <svg class="progressbar__svg">
                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-css shadow-css"> </circle>
                    </svg>
                    <span class="progressbar__text shadow-css">CSS</span>
                </div>

                <div class="progressbar">
                    <svg class="progressbar__svg">
                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-scss shadow-scss"> </circle>
                    </svg>
                    <span class="progressbar__text shadow-scss">SCSS</span>
                </div>

                <div class="progressbar">
                    <svg class="progressbar__svg">
                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-js shadow-js"> </circle>
                    </svg>
                    <span class="progressbar__text shadow-js">JavaScript</span>
                </div>

                <div class="progressbar">
                    <svg class="progressbar__svg">
                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-ts shadow-ts"> </circle>
                    </svg>
                    <span class="progressbar__text shadow-ts">React.js</span>
                </div>

                <div class="progressbar">
                    <svg class="progressbar__svg">
                    <circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-ts shadow-ts"> </circle>
                    </svg>
                    <span class="progressbar__text shadow-ts">SQL</span>
                </div>
                </div>

            </div>

            <div id="main-container-social" class="main-container-social"></div>
        </div>
    )
}

export default Prog;