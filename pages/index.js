import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import App from '../comps/Plotly';
import styles from '../styles/Home.module.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useEffect } from "react";

export default function Home() {
const [value, setValue] = React.useState(0);
const [x, setX] = React.useState([1, 2, 3]);
const [y, setY] = React.useState([2, 5, 3]);

useEffect(() => {
  setX([...x, x.length + 1]);
  setY([...y, value]);
}, [value])

let props = {x, y};

React.useState(props);

const handleChange = (event, newValue) => {
  if (typeof newValue === 'number') {
    setValue(newValue);
  }
};
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <App {...props}/>
      <div style={{display: "flex", justifyContent: "center"}}>
      <Box width={300}>
      <Slider
        size="small"
        defaultValue={value}
        aria-label="Small"
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
      </Box>
    </div>


      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
    </div>
  )
}
