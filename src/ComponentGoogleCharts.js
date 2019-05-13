import React, { useState, useEffect } from 'react';
import {Chart} from 'react-google-charts';

function ComponentGoogleCharts() {
    const [memory, setMemory] = useState(0);
    const [cpu, setCpu] = useState(0);
    const [network, setNetwork] = useState(0);
    const [intervalID, setIntervalID] = useState(null);

    useEffect(() => {
        
                const intervalID = setInterval(() => {
                setMemory(Math.random() * 100);
                setCpu(Math.random() * 100);
                setNetwork(Math.random() * 100);
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
        width={400}
        height={120}
        chartType="Gauge"
        loader={<div>Loading Chart</div>}
        data={[
          ['Label', 'Value'],
          ['Memory', memory],
          ['CPU', cpu],
          ['Network', network],
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


