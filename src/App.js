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
                <p>TEST1</p>
              </div>
            </div>
            <div className="col-md-12 p3">
              <div className="third_column area">
                <div className="row">
                  <div className="col-md-12">
                    <div className="block-indicators">
                      <div className="indicator">
                        <h4>CPU</h4>
                        <ComponentGoogleCharts name="CPU"></ComponentGoogleCharts>
                      </div>
                      <div className="indicator">
                        <h4>Network</h4>
                        <ComponentGoogleCharts name="Network"></ComponentGoogleCharts>
                      </div>
                      <div className="indicator">
                        <h4>Speed</h4>
                        <ComponentGoogleCharts name="Speed"></ComponentGoogleCharts>
                      </div>
                      <div className="indicator">
                        <h4>Power</h4>
                        <ComponentGoogleCharts name="Power"></ComponentGoogleCharts>
                      </div>
                      <div className="indicator">
                        <h4>Memory</h4>
                        <ComponentGoogleCharts name="Memory"></ComponentGoogleCharts>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="block-indicators">
                      <div className="indicator">
                        <h4>CPU</h4>
                        <ComponentGoogleCharts name="CPU"></ComponentGoogleCharts>
                      </div>
                      <div className="indicator">
                        <h4>Tachometer</h4>
                        <ComponentGoogleCharts name="Tachometer"></ComponentGoogleCharts>
                      </div>
                      <div className="indicator">
                        <h4>Speed</h4>
                        <ComponentGoogleCharts name="Speed"></ComponentGoogleCharts>
                      </div>
                      <div className="indicator">
                        <h4>Counter</h4>
                        <ComponentGoogleCharts name="Counter"></ComponentGoogleCharts>
                      </div>
                      <div className="indicator">
                        <h4>Pressure</h4>
                        <ComponentGoogleCharts name="Pressure"></ComponentGoogleCharts>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 p3">
          <div className="fourth_column area">
            <p>TEST4</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
