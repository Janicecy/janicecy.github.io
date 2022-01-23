import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Sidebar from './components/Intro';
import Content from './components/Content';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  lastUpdated: {
    position: 'absolute',
    bottom: '1rem',
    color: '#f8f8f8',
    opacity: .5,
    left: '50%',
    transform: 'translateX(-50%)'
  },
}))
export default function App(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Sidebar />
      <Content />
      <div className={classes.lastUpdated}>Updated in January 2022</div>
    </div>
  );
}

