import React, { useState, useEffect } from 'react';
import {Chart} from 'react-google-charts';

function ComponentGoogleCharts(props) {
    const [state, setState] = useState(0);
    const [intervalID, setIntervalID] = useState(null);

    useEffect(() => {
        
                const intervalID = setInterval(() => {
                setState(Math.random() * 100);
                setIntervalID(intervalID);
            }, 1000);
        
        return function() {
            if(intervalID !== null) {
                clearInterval(intervalID);
            }
        }
     
    });
    
    return (
        <Chart
        width={150}
        height={150}
        chartType="Gauge"
        loader={<div>Loading Chart</div>}
        data={[
          ['Label', 'Value'],
          [props.name, state],
        ]}
        options={{
          redFrom: 90,
          redTo: 100,
          yellowFrom: 75,
          yellowTo: 90,
          minorTicks: 5,
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    );
}

export default ComponentGoogleCharts;


