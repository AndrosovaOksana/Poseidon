import React from 'react';
import Block from './Block.js';
import './App.css';

function App() {
  return (
    <div className="App">
    <header></header>
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-3 p3">
          <div className="first_column area">
            <p>TEST</p>
            <Block></Block>
            <Block></Block>
          </div>
        </div>
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-12 p3">
              <div className="second_column area">
                <p>TEST</p>
              </div>
            </div>
            <div className="col-md-12 p3">
              <div className="third_column area">
                <p>TEST</p>
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
