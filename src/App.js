import React from 'react';
import Block from './Block.js';
import './App.css';
import ComponentGoogleCharts from './ComponentGoogleCharts';

function App() {
  return (
    <div className="App">
    <header></header>
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12 p3">
              <div className="second_column area">
                <p>TEST</p>
              </div>
            </div>
            <div className="col-md-12 p3">
              <div className="third_column area">
                <ComponentGoogleCharts></ComponentGoogleCharts>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 p3">
          <div className="fourth_column area">
            <p>TEST</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
