import React from 'react';
//import Plot from 'react-plotly.js';
import { useEffect } from "react";
import { createTheme } from '@mui/material/styles';
import theme from '../config/theme';

export default function App(props) {
  const layout = createTheme({
    paper_bgcolor: theme.palette.background.paper,
    plot_bgcolor: theme.palette.background.paper,
    xaxis: {
      color: theme.palette.text.primary
    },
    yaxis: {
      color: theme.palette.text.primary
    },
    legend: {
      font: {
        color: theme.palette.text.primary
      },
    },
    title: {
      font: {
        color: theme.palette.text.primary,
      }
    },
    scene: {
      xaxis: {
        color: theme.palette.text.primary
      },
      yaxis: {
        color: theme.palette.text.primary
      },
      zaxis: {
        color: theme.palette.text.primary
      },
    },
    title: 'A Fancy Plot',
    width: 320, 
    height: 240
  }, props.layout);

  let data = [
    {
      x: [1, 2, 3],
      y: [2, 6, 3],
      type: 'scatter',
      mode: 'lines+markers',
      marker: {color: 'red'},
    },
    {type: 'bar', x: props.x, y: props.y},
  ];

  useEffect(() => {
    let newPlotly = require('plotly.js');

    const initTerminal = async () => {
      let plotDiv = document.getElementById('plotDiv');
      let Plot = new newPlotly.newPlot(plotDiv, data, layout);  
      return Plot;
    }
    initTerminal()
}, [])

useEffect(() => {
  let newPlotly = require('plotly.js');

  let plotDiv = document.getElementById('plotDiv');
  let Plot = new newPlotly.newPlot(plotDiv, data, layout);
}, [props])

    return (
      <div id="plotDiv" style={{display: "flex", justifyContent: "center"}}></div>
    );
}