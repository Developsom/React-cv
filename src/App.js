import React from 'react';

function App() {
    return (
        <div className="App">
            <a href={process.env.PUBLIC_URL + '/assets/Cv.pdf'} download>
                <button>Download CV</button>
            </a>
        </div>
    );
}

export default App;
