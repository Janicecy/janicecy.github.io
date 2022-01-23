import React from 'react';
import { makeStyles } from '@mui/styles';
import Projects from './Projects';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    padding: '2% 8%',
  },
  header: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to right, #001529 , #2c3e50)',
    margin: '30px 0'
  },
  skills: {
    lineHeight: 1.8,
    fontSize: '1.5rem',
  }
}))

export default function Content() {
  const classes = useStyles(window.innerWidth)
  return (
    <div id='content' className={classes.root} >
      {/* <div className={classes.header}>Main Skills</div>
      <ul className={classes.skills}>
        <li><b>Programming Languages:</b> JavaScript ES6+, TypeScript, Python, Java</li>
        <li><b>Database:</b> MongoDB, PostgreSQL</li>
        <li><b>Web Development Technologies:</b> React, React Hooks, Vue 2, React Redux, Node.js, Express.js, Webpack</li>
      </ul> */}
      <Projects />
    </div>
  )
}
