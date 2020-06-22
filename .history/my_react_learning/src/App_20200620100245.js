import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import AddName from './component/addName/index.js'
import DataPart from './component/dataPart/dataPart.js'
// import Chart from './component/Charts/index.js'

function App () {
    return (
        <div className="App">
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header> */}
            {/* <AddName></AddName> */}
            {/* <Chart></Chart> */}
            <DataPart></DataPart>
        </div>
    );
}

export default App;
