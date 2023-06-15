import React from 'react';
import './Download.css'

function Download() {
    return (
        <div className="Download">
            <a href={process.env.PUBLIC_URL + '/assets/Cv.pdf'} download>
                <button>Download CV</button>
            </a>
        </div>
    );
}

export default Download;
